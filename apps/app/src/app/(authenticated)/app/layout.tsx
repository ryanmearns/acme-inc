import { DashboardIcon, GearIcon } from "@acmeinc/ui";
import Link from "next/link";
import * as React from "react";
import { ModeToggle } from "../../_components/theme-toggle";
import { brand } from "../../brand.config";
import {
  DesktopDesktopNavigation,
  DesktopMobileNavigation,
} from "./_components/dashboard-navigation";
import { DashboardUser } from "./_components/dashboard-user";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:flex-row flex flex-col">
      <div className="px-4 md:hidden items-center flex py-3 border-b justify-between">
        <Link href={"/"}>
          <div className="flex mg:flex-1 items-center gap-1.5">
            <brand.icon className="h-5 w-5" />
            <p className="font-mono text-base font-bold">{brand.name}</p>
          </div>
        </Link>
        <div className="flex gap-2">
          <DashboardUser />
          <ModeToggle />
        </div>
      </div>
      <DesktopSidebar>
        <div className="px-5">
          <Link href={"/"}>
            <div className="flex mg:flex-1 items-center gap-1.5">
              <brand.icon className="h-5 w-5" />
              <p className="font-mono text-base font-bold">{brand.name}</p>
            </div>
          </Link>
        </div>
        <div className="px-4">
          <DashboardUser />
        </div>
        <DesktopDesktopNavigation
          navigation={[
            {
              name: "Dashboard",
              href: "/app/dashboard",
              Icon: <DashboardIcon className="h-4 w-4" />,
            },
            {
              name: "Settings",
              href: "/app/settings",
              Icon: <GearIcon className="h-4 w-4" />,
            },
          ]}
        />
      </DesktopSidebar>
      <div className="container">{props.children}</div>
      <DesktopMobileNavigation
        navigation={[
          {
            name: "Dashboard",
            href: "/app/dashboard",
            Icon: <DashboardIcon className="h-4 w-4" />,
          },
          {
            name: "Settings",
            href: "/app/settings",
            Icon: <GearIcon className="h-4 w-4" />,
          },
        ]}
      />
    </div>
  );
}

const DesktopSidebar = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-56 hidden justify-center flex-col flex-none md:flex border-r h-screen sticky top-0 bg-muted/20">
      <div className="pb-4 grow gap-6 flex-col flex pt-5">{props.children}</div>
    </div>
  );
};
