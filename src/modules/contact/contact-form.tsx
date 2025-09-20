"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flicker-grid";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { IconArrowUpRight } from "@/assets/icons/arrow";

import { ContactFormType, contactSchema } from "./schema";

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: ContactFormType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        aria-label="Contact form"
        className="relative z-10 @max-md:space-y-4 space-y-8"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="@max-md:space-y-4 space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name" required>
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...field}
                    aria-describedby="name-error"
                    autoComplete="name"
                  />
                </FormControl>
                <FormMessage id="name-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email" required>
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="We'll reply here"
                    type="email"
                    {...field}
                    aria-describedby="email-error"
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage id="email-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    id="phone"
                    placeholder="+971 58 765 4321"
                    type="tel"
                    {...field}
                    aria-describedby="phone-error"
                    autoComplete="tel"
                  />
                </FormControl>
                <FormMessage id="phone-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="subject" required>
                  Subject
                </FormLabel>
                <FormControl>
                  <Input id="subject" placeholder="What's this about?" {...field} aria-describedby="subject-error" />
                </FormControl>
                <FormMessage id="subject-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message" required>
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[12ch]"
                    id="message"
                    placeholder="Share your goals or questions with our experts…"
                    {...field}
                    aria-describedby="message-error message-help"
                  />
                </FormControl>
                <FormMessage id="message-error" />
              </FormItem>
            )}
          />

          <p className="font-light text-muted-500 text-sm" id="message-help" role="note">
            We respect your privacy and will never share your information.
          </p>
        </div>

        <Button aria-describedby="submit-help" className="@max-md:h-10 h-12 gap-3 pr-2" size="lg" type="submit">
          Send Message
          <div className="flex size-8 items-center justify-center rounded bg-primary-300 text-primary-950">
            <IconArrowUpRight />
          </div>
          <FlickeringGrid
            className="absolute inset-0 z-1 [mask-image:radial-gradient(120px_24px_at_top,white,transparent)]"
            color="#8c86f9"
            flickerChance={0.1}
            gridGap={3}
            height={600}
            maxOpacity={0.5}
            squareSize={2}
            width={400}
          />
        </Button>

        <div className="sr-only" id="submit-help">
          Click to send your message. We'll respond within 24 hours.
        </div>
      </form>
    </Form>
  );
}
