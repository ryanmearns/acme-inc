import type { Config } from "tailwindcss";
import { twConfig } from "@acmeinc/tailwind-config";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  ...twConfig,
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
