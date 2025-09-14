import { cn } from "@/lib/utils";

const FrameworkAgnostic = () => {
  return (
    <div className={cn("relative", "flex flex-col justify-between", "h-[20rem] space-y-4")}>
      <FrameworkCard />
    </div>
  );
};

export default FrameworkAgnostic;

const FrameworkCard = () => {
  return (
    <>
      <div className={cn("relative", "flex flex-col items-center justify-center gap-1", "h-[14.5rem] w-full")}>
        <div className="absolute flex h-full w-full items-center justify-center">
          <div className="h-full w-[15rem]">
            <svg className="h-full w-full" fill="none" height="100%" viewBox="0 0 100 100" width="100%">
              <g stroke="#737373" strokeWidth="0.1">
                <path d="M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 5" />
              </g>
              <g mask="url(#framework-mask)">
                <circle
                  className="frameworkline framework-line"
                  cx="0"
                  cy="0"
                  fill="url(#framework-blue-grad)"
                  r="12"
                />
              </g>
              <defs>
                <mask id="framework-mask">
                  <path
                    d="M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 5"
                    stroke="white"
                    strokeWidth="0.3"
                  />
                </mask>
                <radialGradient fx="1" id="framework-blue-grad">
                  <stop offset="0%" stopColor={"#3b82f6"} />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
