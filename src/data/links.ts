import { Route } from "next";

export type NavLink = {
  label: string;
  href: Route;
};

export const NAVLINK: NavLink[] = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "How we works",
    href: "/#how-we-works",
  },
  {
    label: "Blogs",
    href: "/#blogs",
  },
  {
    label: "Testimonials",
    href: "/#testimonials",
  },
];
