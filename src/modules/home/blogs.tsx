import Image from "next/image";
import Link from "next/link";

import { Decorative } from "@/components/layout/decorative";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flicker-grid";

export const Blogs = () => {
  return (
    <section className="relative overflow-hidden bg-primary-950 text-card">
      <Decorative className="relative z-10" color="bg-background" roundClassName="bg-primary-950" />
      <div className="-translate-x-1/2 -top-1/2 absolute left-1/2 size-[46rem] rounded-full bg-radial from-accent/50 to-70% to-primary-background/0" />

      <div className="container space-y-12 py-12 md:py-16 lg:py-20">
        <div className="relative z-10 grid gap-20 md:grid-cols-3">
          <Badge>
            <BadgeDot /> On our minds
          </Badge>
          <div className="col-span-2 space-y-3">
            <h2 className="text-balance font-semibold text-5xl">Insights & Strategies</h2>
            <p className="text-lg text-muted-500">
              Stay ahead with expert insights, practical tips, and actionable strategies
            </p>
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-3 gap-4">
          <div className="col-span-2 grid grid-cols-2 overflow-hidden rounded-xl">
            <div className="relative size-full bg-muted-foreground">
              <Image
                alt="5 Strategies to Optimize Your Business Cash Flow"
                className="object-cover"
                fill
                src="/images/blogs/cash-flow.webp"
              />
            </div>
            <div className="relative flex h-full flex-col items-center overflow-hidden bg-primary-950 px-9 py-12">
              <div className="absolute top-0 h-px w-full bg-gradient-to-l from-transparent via-accent to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-center gap-6">
                <Badge variant="secondary">Finance</Badge>
                <h3 className="font-semibold text-3xl">5 Strategies to Optimize Your Business Cash Flow</h3>
                <p className="text-muted-500 text-sm leading-relaxed">
                  Professional UX/UI design helps small businesses build trust, improve user experience, and boost
                  conversions. Investing in design ensures a strong first impression, sets you apart from competitors,
                  and creates a foundation for long-term growth.
                </p>
                <span className="text-muted-foreground text-xs">6 min read</span>
              </div>
              <div className="absolute bottom-0 h-px w-full bg-gradient-to-l from-transparent via-muted-500/50 to-transparent" />
              <div className="absolute top-0 left-0 h-[300px] w-full">
                <FlickeringGrid
                  className="inset-0 z-1 [mask-image:radial-gradient(80px_circle_at_top,white,transparent)] md:[mask-image:radial-gradient(120px_circle_at_top,white,transparent)]"
                  color="#8c86f9"
                  flickerChance={0.1}
                  gridGap={4}
                  height={600}
                  maxOpacity={0.5}
                  squareSize={2}
                  width={500}
                />
              </div>
              <div className="-translate-1/2 absolute inset-0 top-0 left-1/2 z-0 size-[20rem] rounded-full bg-radial from-accent/50 to-80% to-primary-background/60 opacity-80 blur-3xl" />
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <div className="relative aspect-5/3 bg-muted-foreground">
              <Image
                alt="Social Proof: Why Reviews and Testimonials Build Trust"
                className="object-cover"
                fill
                src="/images/blogs/website.webp"
              />
            </div>

            <div className="flex flex-col gap-3 bg-card px-6 py-5">
              <Badge className="bg-secondary text-card" variant="secondary">
                Marketing
              </Badge>
              <h3 className="font-semibold text-2xl text-foreground">
                Why Small Businesses Should Invest in Professional UX/UI Design
              </h3>
              <span className="text-muted-foreground text-xs">6 min read</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <div className="relative aspect-5/3 bg-muted-foreground">
              <Image
                alt="5 Common Mistakes Startups Make (and How to Avoid Them)"
                className="object-cover"
                fill
                src="/images/blogs/mistake-avoid.webp"
              />
            </div>
            <div className="flex flex-col gap-3 bg-card px-6 py-5">
              <Badge className="bg-secondary text-card" variant="secondary">
                Finance
              </Badge>
              <h3 className="font-semibold text-2xl text-foreground">
                5 Common Mistakes Startups Make (and How to Avoid Them)
              </h3>
              <span className="text-muted-foreground text-xs">5 min read</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <div className="relative aspect-5/3 bg-muted-foreground">
              <Image
                alt="5 Common Mistakes Startups Make (and How to Avoid Them)"
                className="object-cover"
                fill
                src="/images/blogs/brand.webp"
              />
            </div>
            <div className="flex flex-col gap-3 bg-card px-6 py-5">
              <Badge className="bg-secondary text-card" variant="secondary">
                Marketing
              </Badge>
              <h3 className="font-semibold text-2xl text-foreground">
                Why a Strong Brand Identity Matters More Than Ever in 2025
              </h3>
              <span className="text-muted-foreground text-xs">6 min read</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <div className="relative aspect-5/3 bg-muted-foreground">
              <Image
                alt="Supply Chain Management in 2025: Trends You Can’t Ignore"
                className="object-cover"
                fill
                src="/images/blogs/trend.webp"
              />
            </div>
            <div className="flex flex-col gap-3 bg-card px-6 py-5">
              <Badge className="bg-secondary text-card" variant="secondary">
                Supply Chain
              </Badge>
              <h3 className="font-semibold text-2xl text-foreground">
                Supply Chain Management in 2025: Trends You Can’t Ignore
              </h3>
              <span className="text-muted-foreground text-xs">6 min read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-[300px] w-full md:h-[600px]">
        <FlickeringGrid
          className="inset-0 z-1 [mask-image:radial-gradient(350px_circle_at_top,white,transparent)] md:[mask-image:radial-gradient(450px_circle_at_top,white,transparent)]"
          color="#8c86f9"
          flickerChance={0.1}
          gridGap={4}
          height={600}
          maxOpacity={0.5}
          squareSize={2}
          width={1920}
        />
      </div>
      <div className="-translate-1/2 absolute inset-0 top-0 left-1/2 z-0 size-[28rem] rounded-full bg-radial from-accent/50 to-80% to-primary-background/60 opacity-80 blur-3xl md:size-[42rem]" />
      <Decorative className="relative z-10 mt-0" color="bg-background" position="down" roundClassName="bg-primary-950">
        <Button asChild>
          <Link aria-label="Explore more BizDoctor insights" href="/blogs">
            Explore more
          </Link>
        </Button>
      </Decorative>
    </section>
  );
};
