import Image from "next/image";
import Link from "next/link";

import { Effects } from "@/components/animate-ui/primitives/effects/effect";
import { Magnetic } from "@/components/animate-ui/primitives/effects/magnetic";
import { Decorative } from "@/components/layout/decorative";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";

import { GetConsultation } from "../contact/get-consultation-button";

export const Hero = () => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      {/* Skip to main content link for accessibility */}
      <Link
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
        href="#main-content"
      >
        Skip to main content
      </Link>

      <header className="relative z-10 bg-card pt-12" role="banner">
        <div className="container relative z-10 max-w-6xl space-y-4 pt-12 text-center">
          <Badge aria-label="Company tagline" role="complementary" variant="secondary">
            Your business doctor
          </Badge>

          <TextEffect
            as="h1"
            className="text-balance font-bold font-sans text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl"
            id="hero-heading"
            per="word"
            preset="slide"
          >
            Guiding Growth Through Finance, Marketing, Supply Chain & HR
          </TextEffect>

          <TextEffect
            aria-describedby="hero-heading"
            as="p"
            className="mx-auto max-w-3xl text-balance"
            delay={0.5}
            per="word"
            preset="fade"
          >
            Empowering organizations with 30+ years of strategic consulting, tailored solutions, and sustainable growth
            strategies across industries.
          </TextEffect>

          <nav aria-label="Hero actions" className="mx-auto mt-6 flex w-fit items-center gap-3">
            <Effects blur delay={0.6} fade>
              <Magnetic range={60}>
                <GetConsultation text=" Book a Free Consultation" />
              </Magnetic>

              <Button asChild variant="outline">
                <Link aria-label="Browse BizDoctor services and solutions" href="#services" role="button">
                  Our Services
                </Link>
              </Button>
            </Effects>
          </nav>

          <Image
            alt="BizDoctor business consulting illustration showing growth strategies across finance, marketing, supply chain and HR sectors"
            height={246}
            loading="eager"
            priority
            src="/images/background/hero-bizdoctor.svg"
            width={1052}
          />
        </div>

        <Image
          alt=""
          aria-hidden="true"
          className="absolute top-0"
          height={760}
          loading="lazy"
          src="/images/background/pattern.svg"
          width={1512}
        />
      </header>

      <Decorative>
        <div
          aria-label="Client testimonials and success stories"
          className="-space-x-3 flex *:ring-2 *:ring-background"
          role="img"
        >
          <div className="size-7 overflow-hidden rounded-full md:size-9">
            <Image
              alt="Satisfied client testimonial"
              height={36}
              loading="lazy"
              src="/images/avatar/avatar-1.webp"
              width={36}
            />
          </div>
          <div className="size-7 overflow-hidden rounded-full md:size-9">
            <Image
              alt="Satisfied client testimonial"
              height={36}
              loading="lazy"
              src="/images/avatar/avatar-2.webp"
              width={36}
            />
          </div>
          <div className="size-7 overflow-hidden rounded-full md:size-9">
            <Image
              alt="Satisfied client testimonial"
              height={36}
              loading="lazy"
              src="/images/avatar/avatar-3.webp"
              width={36}
            />
          </div>
          <div className="size-7 overflow-hidden rounded-full md:size-9">
            <Image
              alt="Satisfied client testimonial"
              height={36}
              loading="lazy"
              src="/images/avatar/avatar-4.webp"
              width={36}
            />
          </div>
        </div>
        <p className="max-w-fit font-light text-primary-background text-xs md:text-sm">
          <span className="font-medium">Your growth starts here</span> - Let's shape your business future together
        </p>
      </Decorative>

      {/* Structured Data for SEO */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPageElement",
            name: "Hero Section",
            description:
              "Guiding Growth Through Finance, Marketing, Supply Chain & HR - Empowering organizations with 30+ years of strategic consulting",
            mainEntity: {
              "@type": "Organization",
              name: "BizDoctor",
              description:
                "Business consulting firm specializing in finance, marketing, supply chain, and HR solutions",
              foundingDate: "1994",
              numberOfEmployees: "30+ years experience",
              areaServed: ["India", "UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait", "Bahrain"],
              serviceType: [
                "Finance Consulting",
                "Marketing Consulting",
                "Supply Chain Consulting",
                "HR Consulting",
                "Strategic Planning",
                "Corporate Training",
              ],
            },
          }),
        }}
        type="application/ld+json"
      />
    </section>
  );
};
