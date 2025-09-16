"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Logo } from "@/assets/logo";

import { NAVLINK } from "@/data/links";

import { Button } from "../ui/button";
import { FlickeringGrid } from "../ui/flicker-grid";

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileOpen((prev) => !prev);
  }

  function closeMobileMenu() {
    setIsMobileOpen(false);
  }

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

        <Button className="hidden shrink-0 grow md:block">
          Get Consultation
          <FlickeringGrid
            className="absolute inset-0 z-1 [mask-image:radial-gradient(120px_24px_at_top,white,transparent)]"
            color="#8c86f9"
            flickerChance={0.1}
            gridGap={3}
            height={600}
            maxOpacity={0.3}
            squareSize={2}
            width={400}
          />
        </Button>

        <Button
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
          onClick={toggleMobileMenu}
          size="icon"
          variant="ghost"
        >
          {isMobileOpen ? <X /> : <Menu />}
        </Button>
        {isMobileOpen ? (
          <div className="absolute top-14 left-0 mt-2 w-full rounded-lg bg-card p-2 shadow-sm md:hidden">
            <ul className="grid gap-1">
              {NAVLINK.map((nav) => (
                <li key={nav.href}>
                  <Link
                    className="block rounded-md px-3 py-2 font-medium text-sm hover:bg-accent hover:text-accent-foreground"
                    href={nav.href}
                    onClick={closeMobileMenu}
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="mt-2 w-full" onClick={closeMobileMenu}>
              Get Consultation
            </Button>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
