import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { FAQS } from "@/data/faqs";

export const Faq = () => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="sticky top-16 h-fit space-y-6 lg:col-span-5">
          <Badge>
            <BadgeDot />
            Frequently Asked Questions
          </Badge>
          <div>
            <h2 className="font-semibold text-5xl text-primary">Questions & Answer</h2>
            <p className="text-lg text-muted-foreground">Can't find what you're looking for?</p>
          </div>
          <Button asChild>
            <Link aria-label="Contact BizDoctor support" href="#contact">
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
  );
};
