import Link from "next/link";
import Script from "next/script";

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
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-primary-950 pt-8 text-card md:pt-12"
      id="services"
    >
      {/* Decorative background elements */}
      <Decorative className="relative z-10" color="bg-background" roundClassName="bg-primary-950" />
      <div
        aria-hidden="true"
        className="-translate-1/2 absolute top-0 left-1/2 size-[32rem] rounded-full bg-radial from-accent/70 to-70% to-primary-background/0 blur-3xl md:size-[52rem]"
      />
      <div aria-hidden="true" className="absolute top-0 left-0 h-[300px] w-full md:h-[600px]">
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
        {/* Section header */}
        <header className="relative z-10 grid gap-6 md:grid-cols-3 md:gap-20">
          <Badge>
            <BadgeDot aria-hidden="true" />
            our 4 core pillars
          </Badge>
          <h2 className="col-span-2 text-balance font-semibold text-3xl sm:text-4xl md:text-5xl" id="services-heading">
            Empowering your business through specialized consulting.
          </h2>
        </header>

        {/* Services list */}
        <div aria-label="Our core business consulting services" role="list">
          {SERVICES.map(({ id, tags, title, location, service, items }) => (
            <article
              className="space-y-8 md:space-y-12"
              itemScope
              itemType="https://schema.org/Service"
              key={id}
              role="listitem"
            >
              <Separator aria-hidden="true" className="opacity-10" />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-4">
                <span aria-label={`Service ${id}`} className="font-mono">
                  {id}
                </span>
                <div className="space-y-4 md:col-span-10">
                  <div aria-label="Service categories" className="block font-mono text-muted-foreground text-xs">
                    {tags}
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
                    <header className="sm:col-span-2">
                      <h3 className="font-semibold text-2xl sm:text-3xl" itemProp="name">
                        {title}
                      </h3>
                      <p aria-label="Service coverage area" className="text-sm" itemProp="areaServed">
                        {location}
                      </p>
                    </header>
                    <div className="space-y-3 sm:col-span-3">
                      <h4 className="font-semibold text-base sm:text-lg" itemProp="description">
                        {service}
                      </h4>
                      <ul
                        aria-label={`Key features of ${title}`}
                        className="list-inside list-disc space-y-2 text-sm sm:space-y-3"
                        role="list"
                      >
                        {items.map((item, itemIndex) => (
                          <li
                            itemProp="offers"
                            itemScope
                            itemType="https://schema.org/Offer"
                            key={`${item}-${itemIndex}`}
                          >
                            <span itemProp="description">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <Button
                  aria-describedby={`service-${id}-description`}
                  asChild
                  className="self-auto max-sm:hidden"
                  size="icon"
                >
                  <Link aria-label={`Learn more about ${title} consulting services`} href="#" itemProp="url">
                    <IconArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <Separator aria-hidden="true" className="opacity-10" />
      </div>

      {/* Call to action */}
      <Decorative className="relative z-10 mt-0" color="bg-background" position="down" roundClassName="bg-primary-950">
        <Magnetic range={80}>
          <Button asChild>
            <Link aria-label="Talk to a BizDoctor expert about our consulting services" href="#contact">
              Talk to an expert
            </Link>
          </Button>
        </Magnetic>
      </Decorative>

      {/* Structured Data for SEO */}
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Business Consulting Services",
            description:
              "Comprehensive business consulting services covering HR, Marketing, Finance, and Supply Chain management",
            provider: {
              "@type": "Organization",
              name: "BizDoctor",
              url: "https://www.bizdoctor.com",
            },
            areaServed: ["India", "UAE", "GCC", "Global"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "BizDoctor Consulting Services",
              itemListElement: SERVICES.map((service, index) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.service,
                  provider: {
                    "@type": "Organization",
                    name: "BizDoctor",
                  },
                  areaServed: service.location,
                  category: service.tags.split(" • "),
                  offers: service.items.map((item) => ({
                    "@type": "Offer",
                    description: item,
                  })),
                },
                position: index + 1,
              })),
            },
          }),
        }}
        type="application/ld+json"
      />
    </section>
  );
};
