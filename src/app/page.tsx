import Image from "next/image";

import { Decorative } from "@/components/layout/decorative";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { AboutPattern } from "@/assets/pattern/about-pattern";

export default function Home() {
  return (
    <main>
      <div>
        <header className="bg-card">
          <div className="container max-w-6xl space-y-4 py-12 text-center">
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
          </div>
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
          <div className="grid gap-4 md:grid-cols-3">
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
          </div>
        </div>
        <AboutPattern className="absolute top-12" />
      </section>
    </main>
  );
}
