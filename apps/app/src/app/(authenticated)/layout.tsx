import { auth } from "@/auth/utils";
import * as React from "react";
import { AuthProvider } from "./auth-provider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await auth();

  return <AuthProvider session={session}>{children}</AuthProvider>;
}
