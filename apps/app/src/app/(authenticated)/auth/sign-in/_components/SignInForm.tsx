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
import { Button, Input, ReloadIcon } from "@acmeinc/ui";
import { signIn } from "next-auth/react";
import * as React from "react";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
});

export function SignInForm() {
  const [loading, setLoading] = React.useState(false);

  const form = f.useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(arg: z.infer<typeof formSchema>) {
    setLoading(true);
    await signIn("email", { email: arg.email });
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type={"email"} placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {!loading ? (
            "Send email"
          ) : (
            <>
              <ReloadIcon className="h-4 w-4 mr-2 animate-spin" />
              Sending email
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
