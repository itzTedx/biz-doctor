import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { Decorative } from "@/components/layout/decorative";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flicker-grid";
import { Separator } from "@/components/ui/separator";
import {
  Stories,
  StoriesContent,
  Story,
  StoryAuthor,
  StoryAuthorImage,
  StoryAuthorName,
  StoryOverlay,
  StoryVideo,
} from "@/components/ui/stories";

import { IconArrowUpRight } from "@/assets/icons/arrow";
import { IconExperience } from "@/assets/icons/experience";
import { IconPhone } from "@/assets/icons/phone";
import { IconEmail } from "@/assets/icons/socials";
import { IconStar } from "@/assets/icons/star";
import { AboutRive } from "@/assets/pattern/about-rive";
import { AnimatedAboutPattern } from "@/assets/pattern/animated-about-pattern";
import { CardPattern } from "@/assets/pattern/card-pattern";
import { ContactPattern } from "@/assets/pattern/contact-pattern";

import { FAQS } from "@/data/faqs";
import { HOW_WORKS } from "@/data/how-works";
import { SERVICES } from "@/data/services";
import { stories } from "@/data/stories";
import { ContactForm } from "@/modules/contact/contact-form";

const ROUTES = {
  contact: "/contact" as Route,
  services: "/services" as Route,
  videos: "/videos" as Route,
  insights: "/insights" as Route,
} as const;

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
              <Button asChild>
                <Link aria-label="Book a free consultation with BizDoctor" href={ROUTES.contact}>
                  Book a Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link aria-label="Browse BizDoctor services" href={ROUTES.services}>
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
                Saji Thomas
              </Badge>
              <Image alt="Portrait of Mr.Saji Thomas" className="object-cover" fill src="/images/saji-thomas.webp" />
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
          <div className="mt-6 mb-12 flex items-end justify-between">
            <div className="space-y-3">
              <h2 className="text-balance font-semibold text-5xl text-primary">Learn, Grow, Transform</h2>
              <p className="max-w-xl text-lg text-muted-foreground">
                Watch expert insights and practical strategies to grow your business.
              </p>
            </div>
            <div>
              <Button asChild className="gap-3 pr-1.5" size="lg">
                <Link aria-label="Explore all BizDoctor videos" href={ROUTES.videos}>
                  Explore all video
                  <div className="flex size-7 items-center justify-center rounded bg-primary-300 text-primary">
                    <IconArrowUpRight />
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          <Stories className="w-full">
            <StoriesContent className="w-full gap-48">
              {stories.map((story) => (
                <Story className="aspect-3/4 w-48" key={story.id}>
                  <StoryVideo src={story.video} />
                  <StoryOverlay />
                  <StoryAuthor>
                    <StoryAuthorImage fallback={story.fallback} name={story.author} src={story.avatar} />
                    <StoryAuthorName>{story.author}</StoryAuthorName>
                  </StoryAuthor>
                </Story>
              ))}
            </StoriesContent>
          </Stories>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-950 pt-12 text-card">
        <Decorative className="relative z-10" color="bg-background" roundClassName="bg-primary-950" />
        <div className="-translate-x-1/2 -top-1/2 absolute left-1/2 size-[46rem] rounded-full bg-radial from-accent/50 to-70% to-primary-background/0" />
        <CardPattern aria-hidden={true} className="-translate-x-1/2 absolute top-16 left-1/2 size-[40rem]" />
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
                <Separator className="opacity-10" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                  <span className="font-mono">{id}</span>
                  <div className="space-y-4 md:col-span-10">
                    <span className="block font-mono text-muted-foreground text-xs">{tags}</span>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
                      <div className="sm:col-span-2">
                        <h3 className="font-semibold text-3xl">{title}</h3>
                        <p className="text-sm">{location}</p>
                      </div>
                      <div className="space-y-3 sm:col-span-3">
                        <h4 className="font-semibold">{service}</h4>
                        <ul className="list-inside list-disc space-y-3">
                          {items.map((item, index) => (
                            <li key={`${item}-${index}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Button asChild size="icon">
                    <Link aria-label={`Learn more about ${title}`} href={ROUTES.services}>
                      <IconArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <Separator className="opacity-10" />
        </div>
        <Decorative
          className="relative z-10 mt-0"
          color="bg-background"
          position="down"
          roundClassName="bg-primary-950"
        >
          <Button asChild>
            <Link aria-label="Talk to a BizDoctor expert" href={ROUTES.contact}>
              Talk to an expert
            </Link>
          </Button>
        </Decorative>
      </section>
      {/* <FrameworkAgnostic /> */}
      <section className="relative space-y-28 py-12">
        <div className="container relative z-10 grid grid-cols-1 gap-3 md:grid-cols-4">
          <Badge>
            <BadgeDot />
            Why Choose BizDoctor?
          </Badge>
          <div className="md:col-span-3">
            <div className="flex items-center gap-1">
              <Badge variant="secondary">Future-Ready Solutions</Badge>
              <p>- Built by trust, Driven by Results</p>
            </div>
            <p className="text-4xl">
              At BizDoctor, we go beyond consultancy - we become your partner in growth. Our team brings decades of
              expertise, innovative thinking, and proven results to help businesses thrive in today’s competitive
              landscape.{" "}
              <span className="text-muted-foreground">
                Here’s why organizations across India, UAE, and the GCC trust us:
              </span>
            </p>
          </div>
        </div>
        <div className="container relative z-10 grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          <ul className="space-y-3">
            <li className="flex items-center justify-between rounded-3xl bg-linear-140 from-40% from-background to-110% to-primary-600 p-8">
              <div>
                <p className="font-medium font-mono text-5xl text-primary leading-none">30+</p>
                <h3 className="font-light text-muted-foreground">Years of Experience in business</h3>
              </div>
              <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-radial-[at_50%_0%] from-background to-background/0 text-primary shadow-[0_-2.5px_4px_0_oklch(1_0_0_/_15%)_inset]">
                <IconExperience />
              </div>
            </li>
            <li className="-bg-linear-140 flex items-center justify-between rounded-3xl from-40% from-background to-110% to-primary-600 p-8">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-radial-[at_50%_0%] from-background to-background/0 text-primary shadow-[0_-2.5px_4px_0_oklch(1_0_0_/_15%)_inset]">
                <IconExperience />
              </div>
              <div>
                <p className="text-end font-medium font-mono text-5xl text-primary leading-none">2,500+</p>
                <h3 className="font-light text-muted-foreground">Businesses Served across global</h3>
              </div>
            </li>
            <li className="flex items-center justify-between rounded-3xl bg-linear-140 from-40% from-background to-110% to-primary-600 p-8">
              <div>
                <p className="font-medium font-mono text-5xl text-primary leading-none">150+</p>
                <h3 className="font-light text-muted-foreground">Corporate Training Programs Delivered</h3>
              </div>
              <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-radial-[at_50%_0%] from-background to-background/0 text-primary shadow-[0_-2.5px_4px_0_oklch(1_0_0_/_15%)_inset]">
                <IconExperience />
              </div>
            </li>
          </ul>
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              <Badge variant="secondary">we’re more than just consultants</Badge>
              <p>- we’re your growth partners.</p>
            </div>
            <h3 className="font-semibold text-3xl text-primary">
              Trusted by 2,500+ Professionals and Businesses across India, UAE, and the GCC.
            </h3>
            <p className="text-lg">
              We deliver strategies that drive measurable success. From finance and HR to marketing and supply chain,
              our all-in-one consulting approach helps you streamline operations, optimize performance, and unlock new
              opportunities seamlessly.
            </p>
          </div>
        </div>
        <div className="container relative z-10 grid gap-20 md:grid-cols-3">
          <Badge>
            <BadgeDot /> Your business doctor
          </Badge>
          <div className="col-span-2 space-y-4">
            <h2 className="text-balance font-semibold text-5xl text-primary">
              We make business consulting{" "}
              <span className="font-normal tracking-tight">simple, structured, and effective</span>
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              We believe business consulting should be simple, structured, and results-driven. Our approach ensures that
              every solution we provide is practical, measurable, and aligned with your vision.
            </p>
          </div>
          <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOW_WORKS.map(({ title, description, Illustration }) => (
              <div
                className="relative flex flex-col items-center gap-9 overflow-hidden rounded-2xl bg-primary-950 p-9"
                key={title}
              >
                <div className="relative z-10 space-y-3 text-center">
                  <h3 className="font-medium font-mono text-card text-xl uppercase">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
                <Illustration />
                <CardPattern aria-hidden={true} className="absolute top-0" />
              </div>
            ))}
          </div>
        </div>

        <AboutRive />
      </section>
      <section className="relative overflow-hidden bg-primary-950 pt-12 text-card">
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
        <Decorative
          className="relative z-10 mt-0"
          color="bg-background"
          position="down"
          roundClassName="bg-primary-950"
        >
          <Button asChild>
            <Link aria-label="Explore more BizDoctor insights" href={ROUTES.insights}>
              Explore more
            </Link>
          </Button>
        </Decorative>
      </section>
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
                What sets BizDoctor apart is their personalized approach. They don’t just consult—they partner with you
                to make ideas actionable.
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
      <section className="py-20">
        <div className="container grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <Badge>
              <BadgeDot />
              Frequently Asked Questions
            </Badge>
            <div>
              <h2 className="font-semibold text-5xl text-primary">Questions & Answer</h2>
              <p className="text-lg text-muted-foreground">Can't find what you're looking for?</p>
            </div>
            <Button asChild>
              <Link aria-label="Contact BizDoctor support" href={ROUTES.contact}>
                Contact us
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-7">
            <Accordion className="w-full" collapsible defaultValue="item-1" type="single">
              {FAQS.map((faq) => (
                <AccordionItem className="[data-state=open]:bg-card" key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>{faq.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-between py-6">
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
          <div className="relative space-y-8 overflow-hidden rounded-2xl bg-primary-950 p-6 text-background sm:p-12 lg:p-20">
            <ContactPattern className="pointer-events-none absolute top-0 right-0 z-0 select-none" />
            <h3 className="relative z-10 font-semibold text-3xl sm:text-4xl lg:text-5xl">Get in Touch</h3>
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
      <Script id="org-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BizDoctor",
          url: "https://www.bizdoctor.com/",
          logo: "https://www.bizdoctor.com/images/logo.png",
          sameAs: ["https://www.linkedin.com/company/bizdoctor", "https://x.com/bizdoctor"],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+971541234567",
              contactType: "customer support",
              areaServed: ["IN", "AE", "SA", "OM", "QA", "KW", "BH"],
              availableLanguage: ["en"],
            },
          ],
        })}
      </Script>
    </main>
  );
}
