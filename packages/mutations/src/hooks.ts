"use client";

import {
  experimental_useOptimistic,
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import type { z } from "zod";
import {
  isNextNotFoundError,
  isNextRedirectError,
  type ClientCaller,
  type HookCallbacks,
  type HookRes,
} from "./types";

// UTILS

const getMutationStatus = <const IV extends z.ZodTypeAny, const Data>(
  res: HookRes<IV, Data>
) => {
  const hasSucceded = typeof res.data !== "undefined";
  const hasErrored =
    typeof res.validationError !== "undefined" ||
    typeof res.serverError !== "undefined" ||
    typeof res.fetchError !== "undefined";

  const hasExecuted = hasSucceded || hasErrored;

  return { hasExecuted, hasSucceded, hasErrored };
};

const useMutationCallbacks = <const IV extends z.ZodTypeAny, const Data>(
  res: HookRes<IV, Data>,
  hasSucceded: boolean,
  hasErrored: boolean,
  reset: () => void,
  cb?: HookCallbacks<IV, Data>
) => {
  const onSuccessRef = useRef(cb?.onSuccess);
  const onErrorRef = useRef(cb?.onError);

  // Execute the callback on success or error, if provided.
  useEffect(() => {
    const onSuccess = onSuccessRef.current;
    const onError = onErrorRef.current;

    if (onSuccess && hasSucceded) {
      onSuccess(res.data!, reset);
    } else if (onError && hasErrored) {
      onError(res, reset);
    }
  }, [hasErrored, hasSucceded, res, reset]);
};

/**
 * Use the action from a Client Component via hook.
 * @param clientCaller Caller function with typesafe input data for the Server Action.
 * @param cb Optional callbacks executed when the action succeeds or fails.
 *
 * {@link https://github.com/TheEdoRan/next-safe-action/tree/main/packages/next-safe-action#2-the-hook-way See an example}
 */
export const useMutation = <const IV extends z.ZodTypeAny, const Data>(
  clientCaller: ClientCaller<IV, Data>,
  cb?: HookCallbacks<IV, Data>
) => {
  const [isExecuting, startTransition] = useTransition();
  const executor = useRef(clientCaller);
  const [res, setRes] = useState<HookRes<IV, Data>>({});

  const { hasExecuted, hasSucceded, hasErrored } = getMutationStatus<IV, Data>(
    res
  );

  const execute = useCallback(
    (input: z.input<IV>) => {
      return startTransition(() => {
        cb?.onMutate && cb.onMutate(input);
        return executor
          .current(input)
          .then((res: any) => setRes(res))
          .catch((e: any) => {
            if (isNextRedirectError(e) || isNextNotFoundError(e)) {
              throw e;
            }

            setRes({ fetchError: e });
          });
      });
    },
    [cb]
  );

  const reset = useCallback(() => {
    setRes({});
  }, []);

  useMutationCallbacks(res, hasSucceded, hasErrored, reset, cb);

  return {
    execute,
    isExecuting,
    res,
    reset,
    hasExecuted,
    hasSucceded,
    hasErrored,
  };
};

/**
 * Use the action from a Client Component via hook, with optimistic data update.
 *
 * **NOTE: This hook uses an experimental React feature.**
 * @param clientCaller Caller function with typesafe input data for the Server Action.
 * @param initialOptData Initial optimistic data.
 * @param cb Optional callbacks executed when the action succeeds or fails.
 *
 * {@link https://github.com/TheEdoRan/next-safe-action/tree/main/packages/next-safe-action#optimistic-update--experimental See an example}
 */
export const useOptimisticMutation = <
  const IV extends z.ZodTypeAny,
  const Data,
>(
  clientCaller: ClientCaller<IV, Data>,
  initialOptData: Data,
  cb?: HookCallbacks<IV, Data>
) => {
  const [res, setRes] = useState<HookRes<IV, Data>>({});

  const [optState, syncState] = experimental_useOptimistic<
    Data & { __isExecuting__: boolean },
    Partial<Data>
  >(
    { ...initialOptData, ...res.data, __isExecuting__: false },
    (state: any, newState: any) => ({
      ...state,
      ...newState,
      __isExecuting__: true,
    })
  );

  const executor = useRef(clientCaller);

  const { hasExecuted, hasSucceded, hasErrored } = getMutationStatus<IV, Data>(
    res
  );

  const execute = useCallback(
    (input: z.input<IV>, newOptimisticData: Partial<Data>) => {
      syncState(newOptimisticData);

      return executor
        .current(input)
        .then((res: any) => setRes(res))
        .catch((e: any) => {
          // NOTE: this doesn't work at the moment.
          if (isNextRedirectError(e) || isNextNotFoundError(e)) {
            throw e;
          }

          setRes({ fetchError: e });
        });
    },
    [syncState]
  );

  const reset = useCallback(() => {
    setRes({});
  }, []);

  useMutationCallbacks(res, hasSucceded, hasErrored, reset, cb);

  const { __isExecuting__, ...optimisticData } = optState;

  return {
    execute,
    isExecuting: __isExecuting__,
    res,
    optimisticData: optimisticData as Data, // removes omit of `__isExecuting__` from type
    reset,
    hasExecuted,
    hasSucceded,
    hasErrored,
  };
};

export type { HookCallbacks, HookRes };
