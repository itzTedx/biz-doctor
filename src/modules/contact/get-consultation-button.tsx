import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/animate-ui/components/radix/dialog";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flicker-grid";

import { ContactForm } from "@/modules/contact/contact-form";

interface Props {
  text?: string;
}

export const GetConsultation = ({ text = "Get Consultation" }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="shrink-0">
          {text}
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
      </DialogTrigger>
      <DialogContent className="@container sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get in touch</DialogTitle>
          <DialogDescription className="sr-only">Contact our expert</DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};
