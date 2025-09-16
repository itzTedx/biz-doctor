import Script from "next/script";

import { About, Blogs, Contact, Faq, Hero, Services, Testimonials, Videos, WhyChoose } from "@/modules/home";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      <Videos />

      <Services />

      <WhyChoose />

      <Blogs />

      <Testimonials />

      <Faq />

      <Contact />

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
