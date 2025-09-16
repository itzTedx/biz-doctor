import Image from "next/image";

import { Badge, BadgeDot } from "@/components/ui/badge";

import { IconArrowUpRight } from "@/assets/icons/arrow";
import { AnimatedAboutPattern } from "@/assets/pattern/animated-about-pattern";

interface AboutCard {
  id: string;
  h3ClassName: string;
  description: string;
  wrapperExtraClassName?: string;
  title?: string;
}

const ABOUT_CARDS = [
  {
    id: "strategic-smart-solutions",
    title: "Strategic Smart Solutions",
    h3ClassName: "font-semibold text-xl",
    description:
      "Comprehensive HR, marketing, finance, and business consultancy to boost efficiency and growth across India, UAE, and the GCC.",
    wrapperExtraClassName: "",
  },
  {
    id: "optimizing-people-processes-performance",
    title: "Optimizing People, Processes & Performance",
    h3ClassName: "text-balance font-semibold text-xl",
    description: "Corporate training, HRMS, and workflow design to unlock team potential and streamline operations.",
    wrapperExtraClassName: "",
  },
  {
    id: "insight-driven-growth",
    title: "Insight-Driven Growth",
    h3ClassName: "font-semibold text-xl",
    description:
      "Financial audits, MIS reporting, and supply chain management to enhance decision-making and profitability.",
    wrapperExtraClassName: "md:col-span-2",
  },
] as const satisfies readonly AboutCard[];

export const About = () => {
  return (
    <section className="relative py-6 md:py-12">
      <div className="container py-6 md:py-12">
        <div className="relative z-10 grid gap-6 md:grid-cols-3 md:gap-20">
          <Badge>
            <BadgeDot /> Your business doctor
          </Badge>
          <div className="space-y-4 md:col-span-2">
            <h2 className="text-balance font-semibold text-5xl text-primary">
              Your Trusted Partner in <span className="font-normal tracking-tight">Business Transformation</span>
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              Led by Mr. Saji Thomas, a seasoned financial strategist and visionary leader, BizDoctor combines proven
              expertise with forward-thinking strategies to solve complex business challenges.
            </p>
          </div>
          <div className="relative flex aspect-square items-end justify-end rounded-xl bg-card p-4 md:aspect-3/4">
            <Badge className="z-10" variant="secondary">
              Saji Thomas
            </Badge>
            <Image
              alt="Portrait of Mr.Saji Thomas"
              className="object-cover max-md:object-top"
              fill
              src="/images/saji-thomas.webp"
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:col-span-2">
            {ABOUT_CARDS.map((card) => (
              <div
                className={`group flex flex-col justify-between gap-4 rounded-xl bg-card p-6 ${card.wrapperExtraClassName ?? ""}`.trim()}
                key={card.id}
              >
                <h3 className={card.h3ClassName}>{card.title}</h3>

                <div className="flex items-center justify-between gap-3">
                  <p className="text-muted-foreground text-xs">{card.description}</p>
                  <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary-500 text-card transition-colors duration-300 ease-in-out group-hover:bg-primary-background group-hover:text-primary-300">
                    <IconArrowUpRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatedAboutPattern className="absolute top-12 hidden md:block" />
    </section>
  );
};
