import Script from "next/script";

import { Badge, BadgeDot } from "@/components/ui/badge";
import { FlickeringGrid } from "@/components/ui/flicker-grid";
import { NumberCounter } from "@/components/ui/number-counter";

import { IconCommunity } from "@/assets/icons/community";
import { IconExperience } from "@/assets/icons/experience";
import { IconGlobe } from "@/assets/icons/globe";
import { AboutRive } from "@/assets/pattern/about-rive";

import { HOW_WORKS } from "@/data/how-works";

export const WhyChoose = () => {
  return (
    <>
      <section
        aria-labelledby="why-choose-heading"
        className="relative space-y-20 py-12 sm:space-y-24 md:space-y-28"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        {/* Section Header */}
        <header className="container relative z-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          <h2 className="sr-only" id="why-choose-heading">
            Why Choose BizDoctor?
          </h2>
          <Badge aria-label="Section identifier">
            <BadgeDot aria-hidden="true" />
            Why Choose BizDoctor?
          </Badge>
          <div className="md:col-span-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge aria-label="Service focus" variant="secondary">
                Future-Ready Solutions
              </Badge>
              <p className="text-muted-foreground text-sm">- Built on trust, driven by results</p>
            </div>

            <p className="text-balance text-xl leading-relaxed sm:text-2xl md:text-3xl lg:text-4xl">
              At BizDoctor, we go beyond consultancy — we become your partner in growth. Our team brings decades of
              expertise, innovative thinking, and proven results to help businesses thrive in today's competitive
              landscape.{" "}
              <span className="text-muted-foreground">
                Here's why organizations across India, UAE, and the GCC trust us:
              </span>
            </p>
          </div>
        </header>

        {/* Statistics Section */}
        <div
          aria-labelledby="statistics-heading"
          className="container relative z-10 grid max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-16"
          role="region"
        >
          <h3 className="sr-only" id="statistics-heading">
            Our Achievements and Track Record
          </h3>
          <ul aria-label="Key statistics and achievements" className="space-y-4 sm:space-y-5" role="list">
            <li
              className="relative flex items-center justify-between rounded-3xl bg-linear-140 from-50% from-background to-120% to-primary-600 p-6 sm:p-7 md:from-40% md:to-110% md:p-8"
              itemScope
              itemType="https://schema.org/QuantitativeValue"
            >
              <div>
                <p className="font-medium font-mono text-4xl text-primary leading-none sm:text-5xl">
                  <strong>
                    <NumberCounter aria-label="30 plus years of experience" suffix="+" value={30} />
                  </strong>
                </p>
                <h4 className="font-light text-muted-foreground text-sm sm:text-base">
                  Years of experience in business
                </h4>
                <meta content="30+" itemProp="value" />
                <meta content="years" itemProp="unitText" />
              </div>
              <div
                aria-hidden="true"
                className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-radial-[at_50%_0%] from-background to-background/0 text-primary shadow-[0_-2.5px_4px_0_oklch(1_0_0_/_15%)_inset] backdrop-blur-md sm:size-20"
              >
                <IconExperience aria-hidden="true" className="size-10 md:size-12" />
              </div>
              <div className="absolute top-0 right-0 h-full w-3/4">
                <div className="absolute top-0 right-1/4 h-full w-px translate-x-8 bg-primary-600/25" />
                <div className="-translate-y-1/2 absolute top-1/2 h-px w-full bg-gradient-to-l from-primary-600/25 to-transparent" />
              </div>
            </li>

            <li
              className="-bg-linear-140 relative flex items-center justify-between rounded-3xl from-50% from-background to-120% to-primary-600 p-6 sm:p-7 md:from-40% md:to-110% md:p-8"
              itemScope
              itemType="https://schema.org/QuantitativeValue"
            >
              <div
                aria-hidden="true"
                className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-radial-[at_50%_0%] from-background to-background/0 text-primary shadow-[0_-2.5px_4px_0_oklch(1_0_0_/_15%)_inset] backdrop-blur-md sm:size-20"
              >
                <IconGlobe aria-hidden="true" className="size-10 md:size-12" />
              </div>
              <div>
                <p className="text-end font-medium font-mono text-4xl text-primary leading-none sm:text-5xl">
                  <strong>
                    <NumberCounter aria-label="2500 plus businesses served" suffix="+" value={2500} />
                  </strong>
                </p>
                <h4 className="text-right font-light text-muted-foreground text-sm sm:text-base">
                  Businesses served across the globe
                </h4>
                <meta content="2500+" itemProp="value" />
                <meta content="businesses" itemProp="unitText" />
              </div>
              <div className="absolute top-0 left-0 h-full w-3/4">
                <div className="-translate-x-8 absolute top-0 left-1/4 h-full w-px bg-primary-600/25" />
                <div className="-translate-y-1/2 absolute top-1/2 h-px w-full bg-gradient-to-r from-primary-600/25 to-transparent" />
              </div>
            </li>

            <li
              className="relative flex items-center justify-between rounded-3xl bg-linear-140 from-50% from-background to-120% to-primary-600 p-6 sm:p-7 md:from-40% md:to-110% md:p-8"
              itemScope
              itemType="https://schema.org/QuantitativeValue"
            >
              <div>
                <p className="font-medium font-mono text-4xl text-primary leading-none sm:text-5xl">
                  <strong>
                    <NumberCounter aria-label="150 plus corporate training programs" suffix="+" value={150} />
                  </strong>
                </p>
                <h4 className="font-light text-muted-foreground text-sm sm:text-base">
                  Corporate training programs delivered
                </h4>
                <meta content="150+" itemProp="value" />
                <meta content="programs" itemProp="unitText" />
              </div>
              <div
                aria-hidden="true"
                className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-radial-[at_50%_0%] from-background to-background/0 text-primary shadow-[0_-2.5px_4px_0_oklch(1_0_0_/_25%)_inset] backdrop-blur-md sm:size-20"
              >
                <IconCommunity aria-hidden="true" className="size-10 md:size-12" />
              </div>
              <div className="absolute top-0 right-0 h-full w-3/4">
                <div className="absolute top-0 right-1/4 h-full w-px translate-x-8 bg-primary-600/25" />
                <div className="-translate-y-1/2 absolute top-1/2 h-px w-full bg-gradient-to-l from-primary-600/25 to-transparent" />
              </div>
            </li>
          </ul>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge aria-label="Service approach" variant="secondary">
                We're more than just consultants
              </Badge>
              <p className="text-muted-foreground text-sm">- we're your growth partners.</p>
            </div>
            <h3 className="text-pretty font-semibold text-2xl text-primary sm:text-3xl">
              Trusted by 2,500+ professionals and businesses across India, UAE, and the GCC.
            </h3>
            <p className="text-base text-muted-foreground sm:text-lg">
              We deliver strategies that drive measurable success. From finance and HR to marketing and supply chain,
              our all-in-one consulting approach helps you streamline operations, optimize performance, and unlock new
              opportunities seamlessly.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div
          aria-labelledby="how-works-heading"
          className="container relative z-10 grid gap-6 sm:gap-14 md:grid-cols-3 md:gap-20"
          role="region"
        >
          <header>
            <Badge aria-label="Process identifier">
              <BadgeDot aria-hidden="true" />
              Your business doctor
            </Badge>
          </header>
          <div className="space-y-3 md:col-span-2 md:space-y-4">
            <h2
              className="text-balance font-semibold text-3xl text-primary sm:text-4xl md:text-5xl"
              id="how-works-heading"
            >
              We make business consulting{" "}
              <span className="font-normal tracking-tight">simple, structured, and effective</span>
            </h2>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              We believe business consulting should be simple, structured, and results-driven. Our approach ensures that
              every solution we provide is practical, measurable, and aligned with your vision.
            </p>
          </div>

          <div
            aria-label="Our consulting process"
            className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {HOW_WORKS.map(({ title, description, Illustration }, index) => (
              <article
                aria-labelledby={`how-works-${title.toLowerCase()}`}
                className="relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-primary-950 p-6 sm:gap-8 sm:p-8"
                itemScope
                itemType="https://schema.org/HowToStep"
                key={title}
                role="listitem"
              >
                <div className="relative z-10 space-y-2 text-center sm:space-y-3">
                  <h3
                    className="font-medium font-mono text-card text-lg uppercase sm:text-xl"
                    id={`how-works-${title.toLowerCase()}`}
                    itemProp="name"
                  >
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base" itemProp="text">
                    {description}
                  </p>
                  <meta content={(index + 1).toString()} itemProp="position" />
                </div>
                <Illustration aria-hidden="true" />
                <div className="-translate-1/2 absolute top-0 left-1/2 size-80 bg-radial from-accent/70 to-80% to-primary-950/0 blur-3xl" />
                <div className="absolute top-0 left-0 h-[300px] w-full md:h-[600px]">
                  <FlickeringGrid
                    aria-hidden="true"
                    className="inset-0 z-1 [mask-image:radial-gradient(160px_circle_at_top,white,transparent)]"
                    color="#8c86f9"
                    flickerChance={0.5}
                    gridGap={4}
                    height={200}
                    maxOpacity={0.5}
                    squareSize={2}
                    width={400}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <AboutRive aria-hidden="true" />
      </section>

      {/* Structured Data for SEO */}
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Organization",
              name: "BizDoctor",
              description:
                "Business consulting firm specializing in finance, marketing, supply chain, and HR solutions",
              foundingDate: "1994",
              areaServed: [
                {
                  "@type": "Country",
                  name: "India",
                },
                {
                  "@type": "Country",
                  name: "United Arab Emirates",
                },
                {
                  "@type": "Country",
                  name: "Saudi Arabia",
                },
                {
                  "@type": "Country",
                  name: "Oman",
                },
                {
                  "@type": "Country",
                  name: "Qatar",
                },
                {
                  "@type": "Country",
                  name: "Kuwait",
                },
                {
                  "@type": "Country",
                  name: "Bahrain",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2500",
                bestRating: "5",
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "30+ Years Business Experience",
                  credentialCategory: "Experience",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "2500+ Businesses Served",
                  credentialCategory: "Client Base",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "150+ Corporate Training Programs",
                  credentialCategory: "Training Delivery",
                },
              ],
              serviceType: [
                "Finance Consulting",
                "Marketing Consulting",
                "Supply Chain Consulting",
                "HR Consulting",
                "Corporate Training",
                "Strategic Planning",
              ],
              knowsAbout: [
                "Business Strategy",
                "Financial Management",
                "Digital Marketing",
                "Supply Chain Optimization",
                "Human Resources Management",
                "Corporate Training",
              ],
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.bizdoctor.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Why Choose BizDoctor",
                  item: "https://www.bizdoctor.com/#why-choose",
                },
              ],
            },
          }),
        }}
        type="application/ld+json"
      />
    </>
  );
};
