"use client";

import * as React from "react";

import {
  type HTMLMotionProps,
  type LegacyAnimationControls,
  motion,
  type TargetAndTransition,
  type Transition,
} from "motion/react";

import { Slot, WithAsChild } from "@/components/animate-ui/primitives/animate/slot";

import { useAutoHeight } from "@/hooks/use-auto-height";

type AutoHeightProps = WithAsChild<
  {
    children: React.ReactNode;
    deps?: React.DependencyList;
    animate?: TargetAndTransition | LegacyAnimationControls;
    transition?: Transition;
  } & Omit<HTMLMotionProps<"div">, "animate">
>;

function AutoHeight({
  children,
  deps = [],
  transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    bounce: 0,
    restDelta: 0.01,
  },
  style,
  animate,
  asChild = false,
  ...props
}: AutoHeightProps) {
  const { ref, height } = useAutoHeight<HTMLDivElement>(deps);

  const Comp = asChild ? Slot : motion.div;

  return (
    <Comp animate={{ height, ...animate }} style={{ overflow: "hidden", ...style }} transition={transition} {...props}>
      <div ref={ref}>{children}</div>
    </Comp>
  );
}

export { AutoHeight, type AutoHeightProps };
