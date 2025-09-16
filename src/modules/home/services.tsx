import Link from "next/link";

import { Decorative } from "@/components/layout/decorative";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { IconArrowUpRight } from "@/assets/icons/arrow";
import { CardPattern } from "@/assets/pattern/card-pattern";

import { SERVICES } from "@/data/services";

export const Services = () => {
  return (
    <section className="relative overflow-hidden bg-primary-950 pt-12 text-card">
      <Decorative className="relative z-10" color="bg-background" roundClassName="bg-primary-950" />
      <div className="-translate-x-1/2 -top-1/2 absolute left-1/2 size-[46rem] rounded-full bg-radial from-accent/50 to-70% to-primary-background/0" />
      <CardPattern aria-hidden={true} className="-translate-x-1/2 absolute top-16 left-1/2 size-[40rem]" />
      <div className="container space-y-6 py-12">
        <div className="relative z-10 grid gap-20 md:grid-cols-3">
          <Badge>
            <BadgeDot /> our 4 core pillars
          </Badge>
          <h2 className="col-span-2 text-balance font-semibold text-5xl">
            Empowering your business through specialized consulting.
          </h2>
        </div>
        <ul className="space-y-12">
          {SERVICES.map(({ id, tags, title, location, service, items }) => (
            <li className="space-y-12" key={id}>
              <Separator className="opacity-10" />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <span className="font-mono">{id}</span>
                <div className="space-y-4 md:col-span-10">
                  <span className="block font-mono text-muted-foreground text-xs">{tags}</span>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
                    <div className="sm:col-span-2">
                      <h3 className="font-semibold text-3xl">{title}</h3>
                      <p className="text-sm">{location}</p>
                    </div>
                    <div className="space-y-3 sm:col-span-3">
                      <h4 className="font-semibold">{service}</h4>
                      <ul className="list-inside list-disc space-y-3">
                        {items.map((item, index) => (
                          <li key={`${item}-${index}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <Button asChild size="icon">
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
        <Button asChild>
          <Link aria-label="Talk to a BizDoctor expert" href="#contact">
            Talk to an expert
          </Link>
        </Button>
      </Decorative>
    </section>
  );
};
