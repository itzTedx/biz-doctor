import Link from "next/link";

import { Logo } from "@/assets/logo";

import { NAVLINK } from "@/data/links";

import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="container sticky top-3 flex max-w-fit items-center gap-12 bg-card py-4">
      <Logo />
      <ul className="flex items-center gap-2">
        {NAVLINK.map((nav) => (
          <li key={nav.href}>
            <Link className="px-3 py-1" href={nav.href}>
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button>Get Consultation</Button>
    </nav>
  );
}
