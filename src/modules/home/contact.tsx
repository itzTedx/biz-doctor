import Link from "next/link";

import { Badge, BadgeDot } from "@/components/ui/badge";
import { FlickeringGrid } from "@/components/ui/flicker-grid";

import { IconPhone } from "@/assets/icons/phone";
import { IconEmail } from "@/assets/icons/socials";
import { ContactPattern } from "@/assets/pattern/contact-pattern";

import { ContactForm } from "../contact/contact-form";

export const Contact = () => {
  return (
    <section className="py-9 sm:py-12 md:py-20" id="contact">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex h-fit flex-col gap-9 py-6 md:sticky md:top-16">
          <div className="space-y-6">
            <Badge>
              <BadgeDot />
              How We Work
            </Badge>

            <h2 className="font-semibold text-5xl text-primary">Let’s Talk Growth</h2>
          </div>
          <div className="space-y-3">
            <ul className="flex w-fit items-center gap-1.5 rounded-md bg-card p-1.5">
              <li className="flex size-9 items-center justify-center rounded bg-background text-muted-500">
                <Link href="tel:+971 54 123 4567">
                  <IconPhone />
                </Link>
              </li>
              <li className="flex size-9 items-center justify-center rounded bg-background text-muted-500">
                <Link href="mailto:info@bizdoctor.com">
                  <IconEmail />
                </Link>
              </li>
            </ul>
            <p className="max-w-lg font-semibold text-lg text-muted-foreground leading-relaxed">
              Your next big step starts with a conversation. Whether you’re looking for HR solutions, financial
              consultancy, or business transformation, our experts are here to guide you.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-primary-950 p-6 text-background sm:p-12 lg:p-20">
          <ContactPattern className="pointer-events-none absolute top-0 right-0 z-0 select-none" />
          <h3 className="relative z-10 mb-8 font-semibold text-3xl sm:text-4xl lg:text-5xl">Get in Touch</h3>
          <ContactForm />
          <div className="absolute top-0 left-0 size-[672px] w-full">
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
  );
};
