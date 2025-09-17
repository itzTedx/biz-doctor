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
      <form className="relative z-10 @max-md:space-y-4 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="@max-md:space-y-4 space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="We’ll reply here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+971 58 765 4321" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="+971 58 765 4321" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[12ch]"
                    placeholder="Share your goals or questions with our experts…"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="font-light text-muted-500 text-sm">
            We respect your privacy and will never share your information.
          </p>
        </div>
        <Button className="@max-md:h-10 h-12 gap-3 pr-2" size="lg" type="submit">
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
      </form>
    </Form>
  );
}
