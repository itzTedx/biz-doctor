import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex h-fit w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap border font-medium font-mono text-xs uppercase transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "rounded-full border-transparent bg-card px-2 py-0.5 font-normal text-primary-foreground ring-2 ring-card/50 [a&]:hover:bg-primary/90",
        secondary:
          "rounded border-transparent bg-card px-1 py-0.5 font-semibold text-secondary [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return <Comp className={cn(badgeVariants({ variant }), className)} data-slot="badge" {...props} />;
}

function BadgeDot({ className }: React.ComponentProps<"span">) {
  return <span className={cn("size-2 rounded-full bg-secondary", className)} />;
}

export { Badge, badgeVariants, BadgeDot };
