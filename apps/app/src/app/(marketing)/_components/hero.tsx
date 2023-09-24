import { Button, FadeIn, FadeInStagger, RocketIcon } from "@acmeinc/ui";

import Link from "next/link";

type HeroSectionProps = {
  title: string;
  description: string;
};

export const Hero = (props: HeroSectionProps) => {
  return (
    <div className="mx-auto grow flex flex-col justify-center max-w-2xl pb-24 px-20 md:px-6">
      <div className="text-center">
        <h1 className="text-4xl pb-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-l from-primary to-primary/60 sm:text-6xl">
          {props.title}
        </h1>
        <p className="mt-3 md:mt-6 text-lg sm:text-xl sm:leading-8 text-secondary-foreground/60">
          {props.description}
        </p>
        <div className="mt-6 md:mt-8 flex items-center justify-center gap-x-6">
          <Link href={"/app/dashboard"}>
            <Button size={"lg"}>Get started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
