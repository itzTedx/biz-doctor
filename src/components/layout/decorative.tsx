import { cn } from "@/lib/utils";

interface Props {
  children?: React.ReactNode;
  roundClassName?: string;
  color?: string;
  className?: string;
  position?: "up" | "down";
}

export const Decorative = ({ children, roundClassName, color, className, position = "up" }: Props) => {
  return (
    <div className={cn("-mt-12", className)}>
      {position === "up" && <div className={cn("h-24 w-full bg-card md:rounded-b-3xl", color)} />}
      <div
        className={cn(
          "relative mx-auto flex h-16 max-w-3xl items-center justify-center gap-3 bg-card",
          position === "down" ? "rounded-t-4xl" : "rounded-b-4xl",
          color
        )}
      >
        {children}
        <div className="absolute right-full hidden h-full w-16 md:block">
          <div className={cn("absolute right-0 size-1/2 bg-card", position === "down" ? "bottom-0" : "top-0", color)} />
          <div
            className={cn(
              "absolute right-0 size-full rounded-full bg-background",
              position === "down" ? "bottom-0" : "top-0",
              roundClassName
            )}
          />
        </div>
        <div className="absolute left-full hidden h-full w-16 md:block">
          <div className={cn("absolute left-0 size-1/2 bg-card", position === "down" ? "bottom-0" : "top-0", color)} />
          <div
            className={cn(
              "absolute right-0 size-full rounded-full bg-background",
              position === "down" ? "bottom-0" : "top-0",
              roundClassName
            )}
          />
        </div>
      </div>
      {position === "down" && <div className={cn("h-24 w-full bg-card md:rounded-t-3xl", color)} />}
    </div>
  );
};
