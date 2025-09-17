import Link from "next/link";

import { Magnetic } from "@/components/animate-ui/primitives/effects/magnetic";
import { Decorative } from "@/components/layout/decorative";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flicker-grid";
import { Separator } from "@/components/ui/separator";

import { IconArrowUpRight } from "@/assets/icons/arrow";

import { SERVICES } from "@/data/services";

export const Services = () => {
  return (
    <section className="relative overflow-hidden bg-primary-950 pt-8 text-card md:pt-12">
      <Decorative className="relative z-10" color="bg-background" roundClassName="bg-primary-950" />
      <div className="-translate-1/2 absolute top-0 left-1/2 size-[32rem] rounded-full bg-radial from-accent/70 to-70% to-primary-background/0 blur-3xl md:size-[52rem]" />
      <div className="absolute top-0 left-0 h-[300px] w-full md:h-[600px]">
        <FlickeringGrid
          className="inset-0 z-1 [mask-image:radial-gradient(250px_circle_at_top,white,transparent)] md:[mask-image:radial-gradient(450px_circle_at_top,white,transparent)]"
          color="#8c86f9"
          flickerChance={0.3}
          gridGap={4}
          height={600}
          maxOpacity={0.5}
          squareSize={3}
          width={1920}
        />
      </div>

      <div className="container space-y-6 py-8 md:space-y-8 md:py-12">
        <div className="relative z-10 grid gap-6 md:grid-cols-3 md:gap-20">
          <Badge>
            <BadgeDot /> our 4 core pillars
          </Badge>
          <h2 className="col-span-2 text-balance font-semibold text-3xl sm:text-4xl md:text-5xl">
            Empowering your business through specialized consulting.
          </h2>
        </div>
        <ul className="space-y-8 md:space-y-12">
          {SERVICES.map(({ id, tags, title, location, service, items }) => (
            <li className="space-y-8 md:space-y-12" key={id}>
              <Separator className="opacity-10" />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-4">
                <span className="font-mono">{id}</span>
                <div className="space-y-4 md:col-span-10">
                  <span className="block font-mono text-muted-foreground text-xs">{tags}</span>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                    <div className="sm:col-span-2">
                      <h3 className="font-semibold text-2xl sm:text-3xl">{title}</h3>
                      <p className="text-sm">{location}</p>
                    </div>
                    <div className="space-y-3 sm:col-span-3">
                      <h4 className="font-semibold text-base sm:text-lg">{service}</h4>
                      <ul className="list-inside list-disc space-y-2 text-sm sm:space-y-3">
                        {items.map((item, index) => (
                          <li key={`${item}-${index}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <Button asChild className="self-auto max-sm:hidden" size="icon">
                  <Link aria-label={`Learn more about ${title}`} href={"/"}>
                    <IconArrowUpRight />
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <Separator className="opacity-10" />
      </div>
      <Decorative className="relative z-10 mt-0" color="bg-background" position="down" roundClassName="bg-primary-950">
        <Magnetic range={80}>
          <Button asChild>
            <Link aria-label="Talk to a BizDoctor expert" href="#contact">
              Talk to an expert
            </Link>
          </Button>
        </Magnetic>
      </Decorative>
    </section>
  );
};
