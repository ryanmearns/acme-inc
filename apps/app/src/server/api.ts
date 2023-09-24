import { getTenant } from "@/services/tenant";
import { createMutationMiddleware } from "@acmeinc/mutations";

/**
 * Public (unauthenticated) action
 *
 * If you want a server action to be public use this action middleware.
 * It will only parse the input and nothing more.
 *
 */
export const publicMutation = createMutationMiddleware();

/**
 * Protected (authenticated) action
 *
 * If you want a server action to ONLY be accessible to logged in users, use this. It verifies
 * the session is valid and guarantees `ctx.session.user` is not null and uses the userId to
 * fetch the workspace as the tenantId. This is returned using the getTenant service.
 *
 */

const isAuthed = async () => {
  const { session, workspace } = await getTenant();

  if (!session) {
    throw new Error("Not authorised");
  }

  return {
    session: session,
    workspace: workspace,
  };
};

const protectedMutation = createMutationMiddleware({
  buildContext: isAuthed,
});

export const api = {
  protectedAction: protectedMutation,
  publicAction: publicMutation,
};
