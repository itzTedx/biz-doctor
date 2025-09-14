import Image from "next/image";

import FrameworkAgnostic from "@/components/framework";
import { Decorative } from "@/components/layout/decorative";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { IconArrowUpRight } from "@/assets/icons/arrow";
import { AnimatedAboutPattern } from "@/assets/pattern/animated-about-pattern";

import { SERVICES } from "@/data/services";

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
      {/* <AnimatedBeamDemo /> */}
      <section className="relative py-12">
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
            <div className="relative flex aspect-3/4 items-end justify-end rounded-xl bg-card p-4">
              <Badge className="z-10" variant="secondary">
                Saji THomas
              </Badge>
              <Image alt="Portrait of Mr.Saji Thomas" className="object-cover" fill src="/images/saji-thomas.webp" />
            </div>
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
        <AnimatedAboutPattern className="absolute top-12" />
      </section>
      <section className="py-9">
        <div className="container">
          <Badge>
            <BadgeDot /> Expert Videos
          </Badge>
          <div className="mt-6 flex items-end justify-between">
            <div className="space-y-3">
              <h2 className="text-balance font-semibold text-5xl text-primary">Learn, Grow, Transform</h2>
              <p className="max-w-xl text-lg text-muted-foreground">
                Watch expert insights and practical strategies to grow your business.
              </p>
            </div>
            <div>
              <Button className="gap-3 pr-1.5" size="lg">
                Explore all video
                <div className="flex size-7 items-center justify-center rounded bg-primary-300 text-primary">
                  <IconArrowUpRight />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-primary-950 py-12 text-card">
        <Decorative className="relative z-10" color="bg-background" roundClassName="bg-primary-950" />
        <div className="-translate-x-1/2 -top-1/2 absolute left-1/2 size-[46rem] rounded-full bg-radial from-accent/50 to-70% to-primary-background/0" />
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
                <Separator />
                <div className="grid grid-cols-12 gap-4">
                  <span className="font-mono">{id}</span>
                  <div className="col-span-10 space-y-4">
                    <span className="font-mono text-muted-foreground text-xs">{tags}</span>
                    <div className="grid grid-cols-5 gap-4">
                      <div className="col-span-2">
                        <h3 className="text-3xl">{title}</h3>
                        <p className="text-sm">{location}</p>
                      </div>
                      <div className="col-span-3">
                        <h4>{service}</h4>
                        <ul>
                          {items.map((item, index) => (
                            <li key={`${item}-${index}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Button size="icon">
                    <IconArrowUpRight />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Decorative className="relative z-10 mt-0" color="bg-background" roundClassName="bg-primary-950">
          <Button>Talk to an expert</Button>
        </Decorative>
      </section>
      <FrameworkAgnostic />
    </main>
  );
}
