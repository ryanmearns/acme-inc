"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

export function FadeIn(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
    />
  );
}

export function FadeInStagger({ faster = false, ...props }): JSX.Element {
  return (
    <FadeInStaggerContext.Provider value>
      <motion.div
        initial="hidden"
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        viewport={viewport}
        whileInView="visible"
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
