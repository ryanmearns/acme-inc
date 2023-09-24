"use client";

import { Button, buttonVariants, cn } from "@acmeinc/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DesktopDesktopNavigation = (props: {
  navigation: { name: string; href: string; Icon: React.ReactElement }[];
}) => {
  const pathname = usePathname();

  return (
    <div className="px-2 space-y-1 grow">
      {props.navigation.map((item) => (
        <Button
          asChild
          key={item.href}
          className="w-full justify-start group/item"
          variant={pathname === item.href ? "secondary" : "ghost"}
        >
          <Link href={item.href}>
            <div className="transition-all mr-2 ease-in-out delay-150 group-hover/item:scale-110 duration-100">
              {item.Icon}
            </div>
            {item.name}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export const DesktopMobileNavigation = (props: {
  navigation: { name: string; href: string; Icon: React.ReactElement }[];
}) => {
  const pathname = usePathname();

  return (
    <div className="md:hidden pb-1 absolute bottom-0 bg-primary-foreground border-t w-full flex items-center space-x-2 justify-center">
      {props.navigation.map((item) => (
        <button key={item.href}>
          <Link
            href={item.href}
            className={cn(
              pathname === item.href ? "text-primary" : "text-primary/50",
              "flex flex-col items-center p-4 space-y-1.5"
            )}
          >
            <div>{item.Icon}</div>
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        </button>
      ))}
    </div>
  );
};
