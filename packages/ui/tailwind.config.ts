import type { Config } from "tailwindcss";
import { twConfig } from "@acmeinc/tailwind-config";

const config: Omit<Config, "content"> = {
  content: [],
  ...twConfig,
};

export { config };
