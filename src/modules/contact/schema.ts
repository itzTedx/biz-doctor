import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.email().max(50),
  phone: z.string().optional(),
  subject: z.string().min(2).max(256),
  message: z.string().min(2).max(1200),
});

export type ContactFormType = z.infer<typeof contactSchema>;
