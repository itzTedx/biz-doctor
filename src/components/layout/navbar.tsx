"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import { Logo } from "@/assets/logo";

import { NAVLINK } from "@/data/links";

import { Button } from "../ui/button";

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
      <div className="container relative flex items-center justify-between gap-7 rounded-lg bg-card p-3 md:max-w-fit">
        <Logo />
        <ul className="hidden items-center gap-2 md:flex">
          {NAVLINK.map((nav) => (
            <li className="shrink-0 grow" key={nav.href}>
              <Link className="px-3 py-1 font-medium text-sm" href={nav.href}>
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button>Get Consultation</Button>
        </div>
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
