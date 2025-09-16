import Image from "next/image";
import Link from "next/link";

import { Decorative } from "@/components/layout/decorative";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative">
      <header className="relative z-10 bg-card pt-12">
        <div className="container relative z-10 max-w-6xl space-y-4 pt-12 text-center">
          <Badge variant="secondary">Your business doctor</Badge>
          <h1 className="text-balance font-bold font-sans text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
            Guiding Growth Through Finance, Marketing, Supply Chain & HR
          </h1>
          <p className="mx-auto max-w-3xl text-balance">
            Empowering organizations with 30+ years of strategic consulting, tailored solutions, and sustainable growth
            strategies across industries.
          </p>
          <div className="mx-auto mt-6 flex w-fit items-center gap-3">
            <Button asChild>
              <Link aria-label="Book a free consultation with BizDoctor" href="#contact">
                Book a Free Consultation
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link aria-label="Browse BizDoctor services" href="#services">
                Our Services
              </Link>
            </Button>
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
  );
};
