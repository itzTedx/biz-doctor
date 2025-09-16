import { Badge, BadgeDot } from "@/components/ui/badge";

import { IconStar } from "@/assets/icons/star";

export const Testimonials = () => {
  return (
    <section className="container">
      <div className="space-y-4 text-center">
        <Badge>
          <BadgeDot />
          Success Stories
        </Badge>
        <h2 className="font-semibold text-5xl text-primary">
          Real Success,
          <br />
          <span>Authentic Voices</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 py-20 md:grid-cols-3">
        <div className="space-y-8 rounded-xl bg-gradient-to-b from-card/20 to-card p-8">
          <div className="size-12 rounded-full bg-accent" />
          <div className="space-y-4">
            <p className="text-xl">
              “BizDoctor completely transformed our financial strategy. Their team simplified complex processes and
              helped us achieve consistent growth.”
            </p>
            <p className="text-muted-foreground text-sm">Ramesh K., CFO, Manufacturing Company</p>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar className="text-secondary" key={i} />
            ))}
          </div>
        </div>
        <div className="space-y-8 rounded-xl bg-gradient-to-t from-card/20 to-card p-8">
          <div className="size-12 rounded-full bg-accent" />
          <div className="space-y-4">
            <p className="text-xl">
              “We were struggling with supply chain inefficiencies until BizDoctor stepped in. Their roadmap improved
              efficiency and reduced costs by 20%”
            </p>
            <p className="text-muted-foreground text-sm">Fatima A., Operations Head, Retail Group</p>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar className="text-secondary" key={i} />
            ))}
          </div>
        </div>
        <div className="space-y-8 rounded-xl bg-gradient-to-b from-card/20 to-card p-8">
          <div className="size-12 rounded-full bg-accent" />
          <div className="space-y-4">
            <p className="text-xl">
              What sets BizDoctor apart is their personalized approach. They don’t just consult—they partner with you to
              make ideas actionable.
            </p>
            <p className="text-muted-foreground text-sm">Sanjay P., Founder, Tech Startup</p>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar className="text-secondary" key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
