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
  return <RiveComponent className="-top-10 -left-6 absolute hidden h-[676px] w-[394px] md:block" />;
};
