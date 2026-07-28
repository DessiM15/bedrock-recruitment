"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validation";
import { trackFbEvent } from "@/lib/fbq";

// Web3Forms rejects server-side calls on the free plan, so this submits
// straight from the browser. Their access keys are public by design.
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "220998f7-021b-4e70-8108-ad330cf20c39";

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const botcheckRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormSchema) {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Inquiry from ${data.name}`,
          from_name: "Get Paid Nation",
          botcheck: botcheckRef.current?.checked ? "true" : "",
          ...data,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong");
      }

      // Backup notification via Resend, if configured. Never blocks the user.
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => {});

      setSubmitStatus("success");
      trackFbEvent("Lead");
      reset();
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }

  return (
    <SectionWrapper id="contact" className="flex items-center">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* CTA Side */}
        <div className="flex flex-col justify-center">
          <AnimatedText
            as="span"
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-tan"
          >
            Get Started
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="mb-6 font-serif text-3xl font-light leading-tight md:text-4xl lg:text-5xl"
            delay={0.1}
          >
            Your Future Self
            <br />
            Will Thank You
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mb-8 text-lg leading-relaxed text-dark-green/80"
            delay={0.2}
          >
            Every day you wait is money left on the table. Fill out the form and
            we&apos;ll be in touch — your dream lifestyle is one conversation
            away.
          </AnimatedText>
        </div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-xl bg-white p-8 shadow-sm lg:p-10"
        >
          {submitStatus === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle className="mb-4 h-16 w-16 text-tan" />
              <h3 className="mb-2 font-serif text-2xl font-semibold">
                Thank You!
              </h3>
              <p className="text-dark-green/70">
                We&apos;ve received your inquiry and will be in touch within 1-2
                business days.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setSubmitStatus("idle")}
              >
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <h3 className="mb-6 font-serif text-2xl font-semibold">
                Tell Us About Yourself
              </h3>

              {/* Honeypot — hidden from users, bots that tick it are rejected */}
              <input
                ref={botcheckRef}
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-dark-green"
                  >
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-dark-green/10 bg-cream px-4 py-3 text-dark-green placeholder:text-dark-green/30 transition-colors focus:border-tan"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-dark-green"
                  >
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-dark-green/10 bg-cream px-4 py-3 text-dark-green placeholder:text-dark-green/30 transition-colors focus:border-tan"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-dark-green"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full rounded-lg border border-dark-green/10 bg-cream px-4 py-3 text-dark-green placeholder:text-dark-green/30 transition-colors focus:border-tan"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-dark-green"
                  >
                    Tell Us About Yourself
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    placeholder="Share your background, experience, and what excites you about this opportunity..."
                    className="w-full resize-none rounded-lg border border-dark-green/10 bg-cream px-4 py-3 text-dark-green placeholder:text-dark-green/30 transition-colors focus:border-tan"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              {submitStatus === "error" && (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                className="mt-6 w-full"
                size="lg"
                disabled={submitStatus === "loading"}
              >
                {submitStatus === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Submit Inquiry
                  </span>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
