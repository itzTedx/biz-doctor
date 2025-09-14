import { IconCap } from "@/assets/icons/cap";
import { IconData } from "@/assets/icons/data";
import { IconTrophy } from "@/assets/icons/trophy";
import { Logo } from "@/assets/logo";
import { CardPattern } from "@/assets/pattern/card-pattern";

import { Decorative } from "./decorative";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary-950 text-background">
      <Decorative className="relative z-10" color="bg-background" roundClassName="bg-primary-950" />
      <CardPattern aria-hidden={true} className="-translate-x-1/2 absolute top-12 left-1/2 size-[40rem]" />
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-4 py-20">
          <h4 className="font-bold text-5xl">Begin Your Growth Journey</h4>
          <ul className="flex items-center gap-5 rounded bg-card/10 px-2.5 py-1.5">
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
          <p className="max-w-xl text-balance text-center text-muted-500 text-xl">
            Work with consultants who combine decades of experience with modern innovation.
          </p>
        </div>
        <Logo />
      </div>
    </footer>
  );
};
