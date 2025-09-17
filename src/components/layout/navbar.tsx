import Link from "next/link";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/animate-ui/components/radix/sheet";

import { Logo } from "@/assets/logo";

import { NAVLINK } from "@/data/links";
import { GetConsultation } from "@/modules/contact/get-consultation-button";

import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="-translate-x-1/2 fixed top-0 left-1/2 z-50 py-2.5 max-md:container">
      <div className="relative flex items-center justify-between rounded-lg bg-card p-3">
        <Logo className="shrink-0" />
        <ul className="hidden shrink-0 items-center gap-2 md:flex">
          {NAVLINK.map((nav) => (
            <li key={nav.href}>
              <Link className="px-3 py-1 font-medium text-sm" href={nav.href}>
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <GetConsultation />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <Logo />
                <SheetTitle className="sr-only">Biz Doctor</SheetTitle>
                <SheetDescription className="sr-only">
                  Guiding Growth Through Finance, Marketing, Supply Chain & HR
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <ul className="grid gap-1">
                  {NAVLINK.map((nav) => (
                    <li key={nav.href}>
                      <Link
                        className="block rounded-md px-3 py-2 font-medium text-sm hover:bg-muted hover:text-accent-foreground"
                        href={nav.href}
                      >
                        {nav.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <GetConsultation />
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
