import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[\d\s\-\(\)\+]+$/, "Please enter a valid phone number"),
  message: z
    .string()
    .min(10, "Please tell us a bit more about yourself (at least 10 characters)")
    .max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
