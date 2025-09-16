import { Badge, BadgeDot } from "@/components/ui/badge";

import { IconExperience } from "@/assets/icons/experience";
import { AboutRive } from "@/assets/pattern/about-rive";
import { CardPattern } from "@/assets/pattern/card-pattern";

import { HOW_WORKS } from "@/data/how-works";

export const WhyChoose = () => {
  return (
    <section className="relative space-y-28 py-12">
      <div className="container relative z-10 grid grid-cols-1 gap-3 md:grid-cols-4">
        <Badge>
          <BadgeDot />
          Why Choose BizDoctor?
        </Badge>
        <div className="md:col-span-3">
          <div className="flex items-center gap-1">
            <Badge variant="secondary">Future-Ready Solutions</Badge>
            <p>- Built by trust, Driven by Results</p>
          </div>
          <p className="text-4xl">
            At BizDoctor, we go beyond consultancy - we become your partner in growth. Our team brings decades of
            expertise, innovative thinking, and proven results to help businesses thrive in today’s competitive
            landscape.{" "}
            <span className="text-muted-foreground">
              Here’s why organizations across India, UAE, and the GCC trust us:
            </span>
          </p>
        </div>
      </div>
      <div className="container relative z-10 grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <ul className="space-y-3">
          <li className="flex items-center justify-between rounded-3xl bg-linear-140 from-40% from-background to-110% to-primary-600 p-8">
            <div>
              <p className="font-medium font-mono text-5xl text-primary leading-none">30+</p>
              <h3 className="font-light text-muted-foreground">Years of Experience in business</h3>
            </div>
            <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-radial-[at_50%_0%] from-background to-background/0 text-primary shadow-[0_-2.5px_4px_0_oklch(1_0_0_/_15%)_inset]">
              <IconExperience />
            </div>
          </li>
          <li className="-bg-linear-140 flex items-center justify-between rounded-3xl from-40% from-background to-110% to-primary-600 p-8">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-radial-[at_50%_0%] from-background to-background/0 text-primary shadow-[0_-2.5px_4px_0_oklch(1_0_0_/_15%)_inset]">
              <IconExperience />
            </div>
            <div>
              <p className="text-end font-medium font-mono text-5xl text-primary leading-none">2,500+</p>
              <h3 className="font-light text-muted-foreground">Businesses Served across global</h3>
            </div>
          </li>
          <li className="flex items-center justify-between rounded-3xl bg-linear-140 from-40% from-background to-110% to-primary-600 p-8">
            <div>
              <p className="font-medium font-mono text-5xl text-primary leading-none">150+</p>
              <h3 className="font-light text-muted-foreground">Corporate Training Programs Delivered</h3>
            </div>
            <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-radial-[at_50%_0%] from-background to-background/0 text-primary shadow-[0_-2.5px_4px_0_oklch(1_0_0_/_15%)_inset]">
              <IconExperience />
            </div>
          </li>
        </ul>
        <div className="space-y-6">
          <div className="flex items-center gap-1">
            <Badge variant="secondary">we’re more than just consultants</Badge>
            <p>- we’re your growth partners.</p>
          </div>
          <h3 className="font-semibold text-3xl text-primary">
            Trusted by 2,500+ Professionals and Businesses across India, UAE, and the GCC.
          </h3>
          <p className="text-lg">
            We deliver strategies that drive measurable success. From finance and HR to marketing and supply chain, our
            all-in-one consulting approach helps you streamline operations, optimize performance, and unlock new
            opportunities seamlessly.
          </p>
        </div>
      </div>
      <div className="container relative z-10 grid gap-20 md:grid-cols-3">
        <Badge>
          <BadgeDot /> Your business doctor
        </Badge>
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-balance font-semibold text-5xl text-primary">
            We make business consulting{" "}
            <span className="font-normal tracking-tight">simple, structured, and effective</span>
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            We believe business consulting should be simple, structured, and results-driven. Our approach ensures that
            every solution we provide is practical, measurable, and aligned with your vision.
          </p>
        </div>
        <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOW_WORKS.map(({ title, description, Illustration }) => (
            <div
              className="relative flex flex-col items-center gap-9 overflow-hidden rounded-2xl bg-primary-950 p-9"
              key={title}
            >
              <div className="relative z-10 space-y-3 text-center">
                <h3 className="font-medium font-mono text-card text-xl uppercase">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
              <Illustration />
              <CardPattern aria-hidden={true} className="absolute top-0" />
            </div>
          ))}
        </div>
      </div>

      <AboutRive />
    </section>
  );
};
