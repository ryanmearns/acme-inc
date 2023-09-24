import Link from "next/link";
import { brand } from "../../brand.config";
import { buttonVariants } from "@acmeinc/ui/src/components/ui/button";

export const Navigation = () => {
  return (
    <header className="z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href={"/"}>
          <div className="flex lg:flex-1 items-center gap-2">
            <brand.icon className="h-7 w-7" />
            <p className="font-mono text-xl font-semibold">{brand.name}</p>
          </div>
        </Link>
        <div className="space-x-4">
          <Link href="/auth/sign-in" className={buttonVariants()}>
            Create account
          </Link>
          <Link
            href="/auth/sign-in"
            className="text-sm font-semibold cursor-pointer leading-6"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
