import Link from "next/link";

import { IconCap } from "@/assets/icons/cap";
import { IconData } from "@/assets/icons/data";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedIn2,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@/assets/icons/socials";
import { IconTrophy } from "@/assets/icons/trophy";
import { LogoMono } from "@/assets/logo";
import { FooterLeft, FooterRight, FooterUpLeft, FooterUpRight } from "@/assets/pattern/footer-pattern";
import { LogoZironMedia } from "@/assets/zironmedia-logo";

import { GetConsultation } from "@/modules/contact/get-consultation-button";

import { FlickeringGrid } from "../ui/flicker-grid";
import { Decorative } from "./decorative";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary-950 text-background">
      <Decorative className="relative z-10" color="bg-background" roundClassName="bg-primary-950" />
      {/* <CardPattern aria-hidden={true} className="-translate-x-1/2 absolute top-12 left-1/2 size-[40rem]" /> */}
      <div className="container relative z-10 max-w-7xl px-0">
        <section className="flex flex-col items-center gap-4 py-16 md:py-28 lg:py-40">
          <h4 className="font-bold text-3xl sm:text-4xl md:text-5xl">Begin Your Growth Journey</h4>
          <ul className="flex flex-wrap items-center justify-center gap-3 rounded bg-card/10 px-2.5 py-1.5 sm:gap-4">
            <li className="flex items-center gap-2">
              <IconCap />
              <p>Expert-Led</p>
            </li>
            <li className="flex items-center gap-2">
              <IconData />
              <p>Data-Driven</p>
            </li>
            <li className="flex items-center gap-2">
              <IconTrophy />
              <p>Results-Focused</p>
            </li>
          </ul>
          <p className="max-w-xl text-balance text-center text-base text-muted-500 sm:text-lg md:text-xl">
            Work with consultants who combine decades of experience with modern innovation.
          </p>
          <GetConsultation text="Talk to Our Experts Today" />
        </section>
        <section className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <LogoMono />
            <ul className="flex items-center gap-1 rounded-md bg-muted/10 p-1">
              <li>
                <Link
                  className="group flex size-8 items-center justify-center rounded-md transition-colors hover:bg-card"
                  href="/"
                >
                  <IconBrandFacebook className="size-4 text-muted group-hover:text-muted-foreground sm:size-5" />
                </Link>
              </li>
              <li>
                <Link
                  className="group flex size-8 items-center justify-center rounded-md transition-colors hover:bg-card"
                  href="/"
                >
                  <IconBrandWhatsapp className="size-4 text-muted group-hover:text-muted-foreground sm:size-5" />
                </Link>
              </li>
              <li>
                <Link
                  className="group flex size-8 items-center justify-center rounded-md transition-colors hover:bg-card"
                  href="/"
                >
                  <IconBrandInstagram className="size-4 text-muted group-hover:text-muted-foreground sm:size-5" />
                </Link>
              </li>
              <li>
                <Link
                  className="group flex size-8 items-center justify-center rounded-md transition-colors hover:bg-card"
                  href="/"
                >
                  <IconBrandLinkedin className="size-4 text-muted group-hover:text-muted-foreground sm:size-5" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:gap-20">
            <div className="space-y-6">
              <h5 className="font-mono font-semibold text-background/80 text-xs tracking-wide">COMPANY</h5>
              <ul className="space-y-3">
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Services</Link>
                </li>
              </ul>
            </div>
            <div className="shrink-0 space-y-6">
              <h5 className="font-mono font-semibold text-background/80 text-xs tracking-wide">NAVIGATION</h5>
              <ul className="space-y-3">
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">How We Works</Link>
                </li>
                <li>
                  <Link href="/">Testimonials</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-mono font-semibold text-background/80 text-xs tracking-wide">REACH US</h5>
              <div className="space-y-1 font-semibold text-lg">
                <h3>Ready to shape the future of your business?</h3>
                <Link className="text-muted-foreground" href="/">
                  Connect with our experts today
                </Link>
              </div>
              <Link className="flex items-center gap-2 text-lg transition-colors hover:text-primary-500" href="/">
                <IconBrandLinkedIn2 />
                Linkedin
              </Link>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-3 py-7 text-muted-foreground sm:flex-row sm:justify-between">
          <p className="text-xs">© {new Date().getFullYear()} Biz Doctor. All Rights Reserved.</p>

          <Link className="group flex items-center gap-1.5" href="https://www.zironmedia.com/">
            <p>Made by</p>
            <LogoZironMedia className="mt-1.5 transition-colors group-hover:text-card" />
          </Link>
        </section>
      </div>
      <FooterLeft aria-hidden={true} className="absolute bottom-0 left-0" />
      <FooterRight aria-hidden={true} className="absolute right-0 bottom-0" />
      <FooterUpRight aria-hidden={true} className="-top-24 absolute right-0" />
      <FooterUpLeft aria-hidden={true} className="-top-14 absolute left-0" />
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
      <div className="-translate-x-1/2 absolute bottom-0 left-1/2 z-0 size-[28rem] translate-y-1/2 rounded-full bg-radial from-card/15 to-80% to-primary-background/0 blur-3xl md:size-[42rem]" />
    </footer>
  );
};
