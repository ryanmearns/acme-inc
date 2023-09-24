"use client";

import {
  Button,
  ChevronDownIcon,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ExitIcon,
  PersonIcon,
} from "@acmeinc/ui";
import { signOut, useSession } from "next-auth/react";

export function DashboardUser() {
  const { data: session } = useSession({ required: true });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-start items-center">
          <PersonIcon className="h-4 w-4 mr-2" />
          <span className="grow text-left line-clamp-1">
            {session?.user.name}
          </span>
          <ChevronDownIcon className="h-4 w-4 ml-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-48">
        <DropdownMenuItem onClick={() => signOut()}>
          <ExitIcon className="w-4 h-4 mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
