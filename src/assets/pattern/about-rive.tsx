"use client";

import { Fit, Layout, useRive } from "@rive-app/react-canvas";

export const AboutRive = () => {
  const { RiveComponent } = useRive({
    src: "/rive/about-pattern.riv",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Layout,
    }),
  });
  return <RiveComponent className="absolute top-0 left-0 h-[670px] w-[395px]" />;
};
