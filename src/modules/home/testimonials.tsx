import Image from "next/image";

import { Badge, BadgeDot } from "@/components/ui/badge";

import { IconStar } from "@/assets/icons/star";

export const Testimonials = () => {
  const testimonials = [
    {
      id: "testimonial-1",
      name: "Ramesh K.",
      role: "CFO",
      company: "Manufacturing Company",
      content:
        "BizDoctor completely transformed our financial strategy. Their team simplified complex processes and helped us achieve consistent growth.",
      rating: 5,
      avatar: "/images/avatar/avatar-2.webp",
      alt: "Portrait of Ramesh K., CFO at Manufacturing Company",
    },
    {
      id: "testimonial-2",
      name: "Fatima A.",
      role: "Operations Head",
      company: "Retail Group",
      content:
        "We were struggling with supply chain inefficiencies until BizDoctor stepped in. Their roadmap improved efficiency and reduced costs by 20%",
      rating: 5,
      avatar: "/images/avatar/avatar-3.webp",
      alt: "Portrait of Fatima A., Operations Head at Retail Group",
    },
    {
      id: "testimonial-3",
      name: "Sanjay P.",
      role: "Founder",
      company: "Tech Startup",
      content:
        "What sets BizDoctor apart is their personalized approach. They don't just consult—they partner with you to make ideas actionable.",
      rating: 5,
      avatar: "/images/avatar/avatar-4.webp",
      alt: "Portrait of Sanjay P., Founder of Tech Startup",
    },
  ];

  return (
    <section aria-labelledby="testimonials-heading" className="container max-md:pt-12">
      <div className="space-y-4 text-center">
        <Badge>
          <BadgeDot />
          Success Stories
        </Badge>
        <h2 className="font-semibold text-5xl text-primary" id="testimonials-heading">
          Real Success,
          <br />
          <span>Authentic Voices</span>
        </h2>
      </div>

      <div
        aria-label="Customer testimonials"
        className="grid grid-cols-1 gap-8 py-9 sm:py-12 md:grid-cols-3 md:py-20"
        role="list"
      >
        {testimonials.map((testimonial) => (
          <article
            className="space-y-8 rounded-xl bg-gradient-to-b from-card/20 to-card p-8"
            itemScope
            itemType="https://schema.org/Review"
            key={testimonial.id}
            role="listitem"
          >
            <div className="relative size-12 overflow-hidden rounded-full bg-accent">
              <Image alt={testimonial.alt} className="object-cover" fill src={testimonial.avatar} />
            </div>

            <div className="space-y-4">
              <blockquote className="text-xl" itemProp="reviewBody">
                "{testimonial.content}"
              </blockquote>

              <div
                className="text-muted-foreground text-sm"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <span itemProp="name">{testimonial.name}</span>
                <span itemProp="jobTitle">, {testimonial.role}</span>
                <span>, {testimonial.company}</span>
              </div>
            </div>

            <div
              aria-label={`${testimonial.rating} out of 5 stars`}
              className="flex items-center gap-2"
              itemProp="reviewRating"
              itemScope
              itemType="https://schema.org/Rating"
              role="img"
            >
              <meta content={testimonial.rating.toString()} itemProp="ratingValue" />
              <meta content="5" itemProp="bestRating" />
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <IconStar aria-hidden="true" className="text-secondary" key={i} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
