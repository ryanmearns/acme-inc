import { cva } from "class-variance-authority";

const headingVariants = cva("", {
  variants: {
    size: {
      1: "text-xs",
      2: "text-sm",
      3: "text-base",
      4: "text-lg",
      5: "text-xl",
      6: "text-2xl",
      7: "text-3xl",
      8: "text-4xl",
      9: "text-5xl",
    },
    weight: {
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      bold: "font-semibold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: 2,
    weight: "regular",
    align: "left",
  },
});

export { headingVariants };
