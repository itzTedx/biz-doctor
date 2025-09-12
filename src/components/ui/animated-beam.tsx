"use client";

import { RefObject, useEffect, useId, useRef, useState } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>; // Container ref
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  // New: dashed-beam support along the connection path
  useDash?: boolean;
  dashArray?: string | number;
  dashSpeed?: number; // pixels per second along the path
  // New: perimeter dashed rectangle around the full SVG
  usePerimeter?: boolean;
  perimeterInset?: number; // inset in px inside the SVG bounds
  perimeterRadius?: number; // corner radius
  perimeterDashArray?: string | number;
  perimeterDashSpeed?: number; // px/sec around the perimeter
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  useDash = true,
  dashArray = "6 10",
  dashSpeed = 120,
  usePerimeter = false,
  perimeterInset = 2,
  perimeterRadius = 8,
  perimeterDashArray = "6 12",
  perimeterDashSpeed = 160,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [pathLength, setPathLength] = useState(0);
  const basePathRef = useRef<SVGPathElement | null>(null);

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (let _entry of entries) {
        updatePath();
      }
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  // After pathD updates, measure length for dash animation
  useEffect(() => {
    if (!useDash || usePerimeter) return;
    if (basePathRef.current) {
      try {
        const len = basePathRef.current.getTotalLength();
        if (!Number.isNaN(len)) setPathLength(len);
      } catch {
        // ignore measurement errors
      }
    }
  }, [pathD, useDash, usePerimeter]);

  // If using dash animation, compute a linear duration based on speed
  const dashDuration = useDash && pathLength > 0 ? Math.max(0.1, pathLength / dashSpeed) : duration;

  // Perimeter values
  const inset = Math.max(0, perimeterInset);
  const rectWidth = Math.max(0, svgDimensions.width - inset * 2);
  const rectHeight = Math.max(0, svgDimensions.height - inset * 2);
  const perimeterLength = 2 * (rectWidth + rectHeight);
  const perimeterDuration =
    usePerimeter && perimeterLength > 0 ? Math.max(0.1, perimeterLength / perimeterDashSpeed) : duration;

  return (
    <svg
      className={cn("pointer-events-none absolute top-0 left-0 transform-gpu stroke-2", className)}
      fill="none"
      height={svgDimensions.height}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      width={svgDimensions.width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base path (subtle) */}
      {!usePerimeter && (
        <path
          d={pathD}
          ref={basePathRef}
          stroke={pathColor}
          strokeLinecap="round"
          strokeOpacity={pathOpacity}
          strokeWidth={pathWidth}
        />
      )}

      {/* Connection gradient overlay (either solid or dashed) */}
      {!usePerimeter &&
        (useDash ? (
          <motion.path
            animate={{ strokeDashoffset: -pathLength }}
            d={pathD}
            initial={{ strokeDashoffset: 0 }}
            stroke={`url(#${id})`}
            strokeDasharray={dashArray}
            strokeLinecap="round"
            strokeOpacity="1"
            strokeWidth={pathWidth}
            transition={{
              delay,
              duration: dashDuration,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 0,
            }}
          />
        ) : (
          <path d={pathD} stroke={`url(#${id})`} strokeLinecap="round" strokeOpacity="1" strokeWidth={pathWidth} />
        ))}

      {/* Perimeter dashed rectangle around the full SVG */}
      {usePerimeter && rectWidth > 0 && rectHeight > 0 && (
        <motion.rect
          animate={{ strokeDashoffset: -perimeterLength }}
          fill="none"
          height={rectHeight}
          initial={{ strokeDashoffset: 0 }}
          rx={perimeterRadius}
          ry={perimeterRadius}
          stroke={`url(#${id})`}
          strokeDasharray={perimeterDashArray}
          strokeLinecap="round"
          strokeWidth={pathWidth}
          transition={{
            delay,
            duration: perimeterDuration,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
          }}
          width={rectWidth}
          x={inset}
          y={inset}
        />
      )}

      <defs>
        <motion.linearGradient
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          className="transform-gpu"
          gradientUnits={"userSpaceOnUse"}
          id={id}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
