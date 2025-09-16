import Link from "next/link";

import { Decorative } from "@/components/layout/decorative";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { CardPattern } from "@/assets/pattern/card-pattern";

export const Blogs = () => {
  return (
    <section className="relative overflow-hidden bg-primary-950 text-card">
      <Decorative className="relative z-10" color="bg-background" roundClassName="bg-primary-950" />
      <div className="-translate-x-1/2 -top-1/2 absolute left-1/2 size-[46rem] rounded-full bg-radial from-accent/50 to-70% to-primary-background/0" />
      <CardPattern aria-hidden={true} className="-translate-x-1/2 absolute top-16 left-1/2 size-[40rem]" />
      <div className="container space-y-6 py-12">
        <div className="relative z-10 grid gap-20 md:grid-cols-3">
          <Badge>
            <BadgeDot /> On our minds
          </Badge>
          <div className="col-span-2 space-y-3">
            <h2 className="text-balance font-semibold text-5xl">Insights & Strategies</h2>
            <p className="text-lg text-muted-foreground">
              Stay ahead with expert insights, practical tips, and actionable strategies
            </p>
          </div>
        </div>
        <div>5 Strategies to Optimize Your Business Cash Flow</div>
      </div>
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
