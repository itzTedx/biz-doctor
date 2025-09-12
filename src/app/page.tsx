import Image from "next/image";

import { Decorative } from "@/components/layout/decorative";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowUpRight } from "@/assets/icons/arrow";
import { AboutPattern } from "@/assets/pattern/about-pattern";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <header className="relative z-10 bg-card pt-12">
          <div className="container relative z-10 max-w-6xl space-y-4 pt-12 text-center">
            <Badge variant="secondary">Your business doctor</Badge>
            <h1 className="text-balance font-bold font-sans text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              Guiding Growth Through Finance, Marketing, Supply Chain & HR
            </h1>
            <p className="mx-auto max-w-3xl text-balance">
              Empowering organizations with 30+ years of strategic consulting, tailored solutions, and sustainable
              growth strategies across industries.
            </p>
            <div className="mx-auto mt-6 flex w-fit items-center gap-3">
              <Button>Book a Free Consultation</Button>
              <Button variant="outline">Our Services</Button>
            </div>
            <Image alt="Hero" height={246} src="/images/background/hero-bizdoctor.svg" width={1052} />
          </div>

          <Image alt="Hero" className="absolute top-0" height={760} src="/images/background/pattern.svg" width={1512} />
        </header>
        <Decorative>
          <div className="-space-x-3 flex *:ring-2 *:ring-background">
            <div className="size-7 overflow-hidden rounded-full md:size-9">
              <Image alt="Avatar 1" height={36} src="/images/avatar/avatar-1.webp" width={36} />
            </div>
            <div className="size-7 overflow-hidden rounded-full md:size-9">
              <Image alt="Avatar 2" height={36} src="/images/avatar/avatar-2.webp" width={36} />
            </div>
            <div className="size-7 overflow-hidden rounded-full md:size-9">
              <Image alt="Avatar 3" height={36} src="/images/avatar/avatar-3.webp" width={36} />
            </div>
            <div className="size-7 overflow-hidden rounded-full md:size-9">
              <Image alt="Avatar 4" height={36} src="/images/avatar/avatar-4.webp" width={36} />
            </div>
          </div>
          <p className="max-w-fit font-light text-primary-background text-xs md:text-sm">
            <span className="font-medium"> Your growth starts here</span> - Let’s shape your business future together
          </p>
        </Decorative>
      </div>
      <section className="relative py-12">
        <div className="ml-16 h-px w-9 bg-primary" />
        <div className="container py-12">
          <div className="relative z-10 grid gap-20 md:grid-cols-3">
            <Badge>
              <BadgeDot /> Your business doctor
            </Badge>
            <div className="col-span-2 space-y-4">
              <h2 className="text-balance font-semibold text-5xl text-primary">
                Your Trusted Partner in <span className="font-normal tracking-tight">Business Transformation</span>
              </h2>
              <p className="max-w-xl text-lg text-muted-foreground">
                Led by Mr. Saji Thomas, a seasoned financial strategist and visionary leader, BizDoctor combines proven
                expertise with forward-thinking strategies to solve complex business challenges.
              </p>
            </div>
            <div className="aspect-3/4 rounded-xl bg-red-400">{/* <Image src='/images/'/> */}</div>
            <div className="col-span-2 grid grid-cols-2 gap-3">
              <div className="group flex flex-col justify-between rounded-xl bg-card p-6">
                <h3 className="font-semibold text-xl">
                  Strategic Smart <br />
                  Solutions
                </h3>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-muted-foreground text-xs">
                    Comprehensive HR, marketing, finance, and business consultancy to boost efficiency and growth across
                    India, UAE, and the GCC.
                  </p>
                  <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary-500 text-card transition-colors duration-300 ease-in-out group-hover:bg-primary-background group-hover:text-primary-300">
                    <IconArrowUpRight />
                  </div>
                </div>
              </div>
              <div className="group flex flex-col justify-between rounded-xl bg-card p-6">
                <h3 className="text-balance font-semibold text-xl">Optimizing People, Processes & Performance</h3>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-muted-foreground text-xs">
                    Corporate training, HRMS, and workflow design to unlock team potential and streamline operations.
                  </p>
                  <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary-500 text-card transition-colors duration-300 ease-in-out group-hover:bg-primary-background group-hover:text-primary-300">
                    <IconArrowUpRight />
                  </div>
                </div>
              </div>
              <div className="group col-span-2 flex flex-col justify-between rounded-xl bg-card p-6">
                <h3 className="font-semibold text-xl">Insight-Driven Growth</h3>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-muted-foreground text-xs">
                    Financial audits, MIS reporting, and supply chain management to enhance decision-making and
                    profitability.
                  </p>
                  <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary-500 text-card transition-colors duration-300 ease-in-out group-hover:bg-primary-background group-hover:text-primary-300">
                    <IconArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutPattern className="absolute top-12" />
      </section>
    </main>
  );
}
