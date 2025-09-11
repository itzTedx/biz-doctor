import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <header className="bg-card">
        <div className="container max-w-6xl space-y-4 py-12 text-center">
          <Badge variant="secondary">Your business doctor</Badge>
          <h1 className="text-balance font-bold font-sans text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
            Guiding Growth Through Finance, Marketing, Supply Chain & HR
          </h1>
          <p className="mx-auto max-w-3xl text-balance">
            Empowering organizations with 30+ years of strategic consulting, tailored solutions, and sustainable growth
            strategies across industries.
          </p>
          <div className="mx-auto mt-6 flex w-fit items-center gap-3">
            <Button>Book a Free Consultation</Button>
            <Button variant="outline">Our Services</Button>
          </div>
        </div>
        <div className="mx-auto flex items-center gap-3">
          <p className="font-light text-primary-background text-sm">
            Your growth starts here - Let’s shape your business future together
          </p>
        </div>
      </header>
    </main>
  );
}
