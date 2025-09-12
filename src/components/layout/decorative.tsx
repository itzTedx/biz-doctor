import { cn } from "@/lib/utils";

interface Props {
  children?: React.ReactNode;
  roundClassName?: string;
  color?: string;
  className?: string;
}

export const Decorative = ({ children, roundClassName, color, className }: Props) => {
  return (
    <div className={cn("-mt-12", className)}>
      <div className={cn("h-24 w-full rounded-b-3xl bg-card", color)} />
      <div
        className={cn(
          "relative mx-auto flex h-16 max-w-3xl items-center justify-center gap-3 rounded-b-4xl bg-card",
          color
        )}
      >
        {children}
        <div className="absolute right-full h-full w-16">
          <div className={cn("absolute top-0 right-0 size-1/2 bg-card", color)} />
          <div className={cn("absolute top-0 right-0 size-full rounded-full bg-background", roundClassName)} />
        </div>
        <div className="absolute left-full h-full w-16">
          <div className={cn("absolute top-0 left-0 size-1/2 bg-card", color)} />
          <div className={cn("absolute top-0 right-0 size-full rounded-full bg-background", roundClassName)} />
        </div>
      </div>
    </div>
  );
};
