import Link from "next/link";
import Script from "next/script";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { FAQS } from "@/data/faqs";

export const Faq = () => {
  // Generate structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.content,
      },
    })),
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
        type="application/ld+json"
      />

      <section aria-labelledby="faq-heading" className="py-9 sm:py-12 md:py-20" role="region">
        <div className="container grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="h-fit space-y-6 md:sticky md:top-16 lg:col-span-5">
            <Badge>
              <BadgeDot />
              Frequently Asked Questions
            </Badge>
            <div>
              <h2 className="font-semibold text-5xl text-primary" id="faq-heading">
                Questions & Answers
              </h2>
              <p className="text-lg text-muted-foreground">Can't find what you're looking for?</p>
            </div>
            <Button asChild>
              <Link aria-label="Contact BizDoctor support for additional questions" href="#contact">
                Contact us
              </Link>
            </Button>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              aria-label="Frequently Asked Questions"
              className="w-full"
              collapsible
              defaultValue="item-01"
              type="single"
            >
              {FAQS.map((faq, index) => (
                <AccordionItem className="[data-state=open]:bg-card" key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger aria-level={3} className="text-left">
                    <span className="sr-only">
                      Question {index + 1} of {FAQS.length}:
                    </span>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      <span className="sr-only">Answer to question {index + 1}:</span>
                      {faq.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};
