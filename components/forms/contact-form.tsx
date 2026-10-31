"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { simpleContactSchema, SimpleContactFormData } from "@/lib/validation/inquiry";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SimpleContactFormData>({
    resolver: zodResolver(simpleContactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: SimpleContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      // Map simple contact to inquiry endpoint format
      const payload = {
        fullName: data.fullName,
        email: data.email,
        customerType: "Other",
        projectCategory: "Other",
        projectDescription: `[Subject: ${data.subject}]\n\n${data.message}`,
        privacyConsent: data.privacyConsent,
      };

      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(result.error || "Failed to send message. Please try again.");
        return;
      }

      setSuccess(true);
      reset();
    } catch {
      setServerError("Network error. Please verify your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-xl border border-silver-metallic/40 bg-surface-charcoal/90 p-8 text-center shadow-chrome-glow">
        <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto mb-4" />
        <h3 className="font-heading text-xl font-bold text-silver-chrome mb-2">
          Message Received
        </h3>
        <p className="text-sm text-silver-muted mb-6">
          Thank you for reaching out. An engineering lead will review your message and reply promptly.
        </p>
        <Button variant="secondary" onClick={() => setSuccess(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl border border-border bg-surface-graphite/70 backdrop-blur-md p-6 sm:p-8 space-y-5"
    >
      {serverError && (
        <div
          role="alert"
          className="rounded-md border border-red-500/50 bg-red-950/30 p-3 text-xs text-red-200 flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <Input
        label="Full Name"
        placeholder="e.g. Subhamoy Roy"
        required
        error={errors.fullName?.message}
        {...register("fullName")}
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="e.g. subhamoy@example.com"
        required
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Subject"
        placeholder="e.g. Inquiring about mobile application architecture"
        required
        error={errors.subject?.message}
        {...register("subject")}
      />

      <Textarea
        label="Your Message"
        rows={5}
        placeholder="How can our engineering team assist you?"
        required
        error={errors.message?.message}
        {...register("message")}
      />

      <div className="space-y-3 pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-border bg-surface-charcoal text-silver-chrome focus:ring-silver-platinum"
            {...register("privacyConsent")}
          />
          <span className="text-xs text-silver-muted">
            I agree to the{" "}
            <Link href="/privacy-policy" className="text-silver-platinum underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="text-xs text-red-400">{errors.privacyConsent.message}</p>
        )}

        <Button
          type="submit"
          size="md"
          variant="chrome"
          isLoading={isSubmitting}
          className="w-full justify-center"
          icon={<ArrowUpRight className="w-4 h-4" />}
        >
          Dispatch Message
        </Button>
      </div>
    </form>
  );
}
