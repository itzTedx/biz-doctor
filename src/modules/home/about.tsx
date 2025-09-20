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
    <section aria-labelledby="about-heading" className="relative py-6 md:py-12">
      <div className="container py-6 md:py-12">
        <div className="relative z-10 grid gap-6 md:grid-cols-3 md:gap-20">
          <Badge aria-label="Company tagline" role="banner">
            <BadgeDot aria-hidden="true" /> Your business doctor
          </Badge>
          <div className="space-y-4 md:col-span-2">
            <h2 className="text-balance font-semibold text-5xl text-primary" id="about-heading">
              Your Trusted Partner in <span className="font-normal tracking-tight">Business Transformation</span>
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              Led by <strong>Mr. Saji Thomas</strong>, a seasoned financial strategist and visionary leader, BizDoctor
              combines proven expertise with forward-thinking strategies to solve complex business challenges.
            </p>
          </div>
          <figure className="relative flex aspect-square items-end justify-end rounded-xl bg-card p-4 md:aspect-3/4">
            <Badge aria-label="Leadership" className="z-10" variant="secondary">
              Saji Thomas
            </Badge>
            <Image
              alt="Portrait of Mr. Saji Thomas, Founder and CEO of BizDoctor, a seasoned financial strategist and business transformation expert"
              className="object-cover max-md:object-top"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/images/saji-thomas.webp"
            />
          </figure>
          <div
            aria-labelledby="services-heading"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:col-span-2"
            role="region"
          >
            <h3 className="sr-only" id="services-heading">
              Our Core Services and Expertise
            </h3>
            {ABOUT_CARDS.map((card) => (
              <article
                aria-labelledby={`${card.id}-title`}
                className={`group flex flex-col justify-between gap-4 rounded-xl bg-card p-6 ${card.wrapperExtraClassName ?? ""}`.trim()}
                key={card.id}
              >
                <h4 className={card.h3ClassName} id={`${card.id}-title`}>
                  {card.title}
                </h4>

                <div className="flex items-center justify-between gap-3">
                  <p className="text-muted-foreground text-xs">{card.description}</p>
                  <button
                    aria-label={`Learn more about ${card.title}`}
                    className="flex size-8 shrink-0 items-center justify-center rounded bg-primary-500 text-card transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group-hover:bg-primary-background group-hover:text-primary-300"
                    type="button"
                  >
                    <IconArrowUpRight aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <AnimatedAboutPattern aria-hidden="true" className="absolute top-12 hidden md:block" />
    </section>
  );
};
