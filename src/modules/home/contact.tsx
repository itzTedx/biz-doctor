import Link from "next/link";
import Script from "next/script";

import { Badge, BadgeDot } from "@/components/ui/badge";
import { FlickeringGrid } from "@/components/ui/flicker-grid";

import { IconPhone } from "@/assets/icons/phone";
import { IconEmail } from "@/assets/icons/socials";
import { ContactPattern } from "@/assets/pattern/contact-pattern";

import { ContactForm } from "../contact/contact-form";

export const Contact = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Biz Doctor",
    description:
      "Get in touch with Biz Doctor for HR solutions, financial consultancy, and business transformation services.",
    mainEntity: {
      "@type": "Organization",
      name: "Biz Doctor",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971-54-123-4567",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic"],
        },
        {
          "@type": "ContactPoint",
          email: "info@bizdoctor.com",
          contactType: "customer service",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "AE",
      },
      url: "https://bizdoctor.com",
      sameAs: [],
    },
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <Script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />

      <section aria-labelledby="contact-heading" className="py-9 sm:py-12 md:py-20" id="contact" role="region">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information Section */}
          <div className="flex h-fit flex-col gap-9 py-6 md:sticky md:top-16">
            <div className="space-y-6">
              <Badge>
                <BadgeDot />
                Let's Work Together
              </Badge>

              <h2 className="font-semibold text-5xl text-primary" id="contact-heading">
                Let's Talk Growth
              </h2>
            </div>

            <div className="space-y-3">
              {/* Contact Methods */}
              <nav aria-label="Contact methods" role="navigation">
                <ul className="flex w-fit items-center gap-1.5 rounded-md bg-card p-1.5" role="list">
                  <li role="listitem">
                    <Link
                      aria-label="Call us at +971 54 123 4567"
                      className="flex size-9 items-center justify-center rounded bg-background text-muted-500 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      href="tel:+971541234567"
                      title="Call us at +971 54 123 4567"
                    >
                      <IconPhone />
                    </Link>
                  </li>
                  <li role="listitem">
                    <Link
                      aria-label="Email us at info@bizdoctor.com"
                      className="flex size-9 items-center justify-center rounded bg-background text-muted-500 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      href="mailto:info@bizdoctor.com"
                      title="Email us at info@bizdoctor.com"
                    >
                      <IconEmail />
                    </Link>
                  </li>
                </ul>
              </nav>

              <p className="max-w-lg font-semibold text-lg text-muted-foreground leading-relaxed" role="text">
                Your next big step starts with a conversation. Whether you're looking for HR solutions, financial
                consultancy, or business transformation, our experts are here to guide you.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="relative overflow-hidden rounded-2xl bg-primary-950 p-6 text-background sm:p-12 lg:p-20">
            <ContactPattern aria-hidden="true" className="pointer-events-none absolute top-0 right-0 z-0 select-none" />

            <h3 className="relative z-10 mb-8 font-semibold text-3xl sm:text-4xl lg:text-5xl" id="contact-form-heading">
              Get in Touch
            </h3>

            <div aria-describedby="contact-form-description" aria-labelledby="contact-form-heading" role="form">
              <div className="sr-only" id="contact-form-description">
                Fill out the form below to get in touch with our business experts. We'll respond to your inquiry within
                24 hours.
              </div>

              <ContactForm />
            </div>

            {/* Decorative background grid */}
            <div aria-hidden="true" className="absolute top-0 left-0 size-[672px] w-full">
              <FlickeringGrid
                className="inset-0 z-1 [mask-image:radial-gradient(250px_circle_at_top,white,transparent)]"
                color="#8c86f9"
                flickerChance={0.1}
                gridGap={3}
                height={600}
                maxOpacity={0.3}
                squareSize={2}
                width={1920}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
