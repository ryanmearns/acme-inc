"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  f,
  zodResolver,
} from "@acmeinc/forms";
import { Button, Half2Icon, Input } from "@acmeinc/ui";
import * as React from "react";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { updateUserMutation } from "../_mutations/update-user";
import { useSession } from "next-auth/react";
import { useMutation } from "@acmeinc/mutations";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string(),
});

export function NewUserForm() {
  const [isPending, startTranstition] = React.useTransition();
  const { update } = useSession();
  const router = useRouter();

  const mutate = useMutation(updateUserMutation, {
    onSuccess: () => {
      router.push("/app/dashboard");
    },
  });

  const form = f.useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(arg: z.infer<typeof formSchema>) {
    startTranstition(async () => {
      try {
        await update({ name: arg.name });
        await mutate.execute({ name: arg.name });
      } catch (error) {
        toast.error("There was an error");
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type={"name"} placeholder="Enter name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {!isPending ? (
            "Save"
          ) : (
            <>
              <Half2Icon className="h-3.5 w-3.5 mr-2 animate-spin" />
              Saving
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
