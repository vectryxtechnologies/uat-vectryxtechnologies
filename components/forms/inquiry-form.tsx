"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  inquirySchema,
  InquiryFormData,
  customerTypes,
  projectCategories,
  budgetRanges,
  timelineOptions,
  contactMethods,
} from "@/lib/validation/inquiry";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

interface InquiryFormProps {
  initialCategory?: string;
  initialCustomerType?: string;
}

export function InquiryForm({ initialCategory, initialCustomerType }: InquiryFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{ message: string; id?: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      customerType: (initialCustomerType as any) || "Startup",
      projectCategory: (initialCategory as any) || "Software Development",
      companyOrInstitution: "",
      phone: "",
      whatsapp: "",
      budget: "Not Decided",
      timeline: "Flexible",
      preferredContactMethod: "Email",
      projectLink: "",
      projectDescription: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(result.error || "Failed to submit inquiry. Please try again.");
        return;
      }

      setSuccessInfo({
        message: result.message,
        id: result.inquiryId,
      });
      reset();
    } catch {
      setServerError("Network error encountered. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successInfo) {
    return (
      <div className="rounded-xl border border-silver-metallic/40 bg-surface-charcoal/90 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-chrome-glow">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-silver-chrome mb-3">
          Inquiry Successfully Dispatched
        </h3>
        <p className="text-sm text-silver-muted leading-relaxed mb-6 font-sans">
          {successInfo.message}
        </p>

        {successInfo.id && (
          <div className="mb-8 p-3 rounded-md bg-surface-deep border border-border inline-block">
            <span className="font-mono text-xs text-silver-muted block">Reference Identifier</span>
            <span className="font-mono text-xs font-semibold text-silver-platinum">{successInfo.id}</span>
          </div>
        )}

        <div>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setSuccessInfo(null)}
          >
            Submit Another Project Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl border border-border bg-surface-graphite/70 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-chrome-subtle space-y-8"
    >
      {serverError && (
        <div
          role="alert"
          className="rounded-md border border-red-500/50 bg-red-950/30 p-4 text-xs sm:text-sm text-red-200 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">{serverError}</div>
        </div>
      )}

      {/* Section 1: Who You Are */}
      <div>
        <div className="flex items-center gap-2 pb-3 mb-5 border-b border-border/60">
          <span className="font-mono text-xs text-silver-platinum font-semibold">01</span>
          <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-silver-chrome">
            Contact &amp; Identification
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

          <Select
            label="Customer Segment"
            required
            options={customerTypes}
            error={errors.customerType?.message}
            {...register("customerType")}
          />

          <Input
            label="Company or Academic Institution (Optional)"
            placeholder="e.g. Acme Corp / Tech University"
            error={errors.companyOrInstitution?.message}
            {...register("companyOrInstitution")}
          />
        </div>
      </div>

      {/* Section 2: Project Scope & Category */}
      <div>
        <div className="flex items-center gap-2 pb-3 mb-5 border-b border-border/60">
          <span className="font-mono text-xs text-silver-platinum font-semibold">02</span>
          <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-silver-chrome">
            Project Scope &amp; Target Budget
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Select
            label="Project Category"
            required
            options={projectCategories}
            error={errors.projectCategory?.message}
            {...register("projectCategory")}
          />

          <Select
            label="Estimated Budget"
            options={budgetRanges}
            error={errors.budget?.message}
            {...register("budget")}
          />

          <Select
            label="Expected Timeline"
            options={timelineOptions}
            error={errors.timeline?.message}
            {...register("timeline")}
          />
        </div>
      </div>

      {/* Section 3: Communication Preferences */}
      <div>
        <div className="flex items-center gap-2 pb-3 mb-5 border-b border-border/60">
          <span className="font-mono text-xs text-silver-platinum font-semibold">03</span>
          <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-silver-chrome">
            Communication &amp; Materials
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Input
            label="Phone Number (Optional)"
            placeholder="+91 98765 43210"
            error={errors.phone?.message}
            {...register("phone")}
          />

          <Input
            label="WhatsApp Number (Optional)"
            placeholder="+91 98765 43210"
            error={errors.whatsapp?.message}
            {...register("whatsapp")}
          />

          <Select
            label="Preferred Contact Method"
            options={contactMethods}
            error={errors.preferredContactMethod?.message}
            {...register("preferredContactMethod")}
          />
        </div>

        <div className="mt-5">
          <Input
            label="Project Specification Link or GitHub Repo (Optional)"
            placeholder="https://github.com/... or Google Drive / Figma URL"
            error={errors.projectLink?.message}
            {...register("projectLink")}
          />
        </div>
      </div>

      {/* Section 4: Project Requirements */}
      <div>
        <div className="flex items-center gap-2 pb-3 mb-5 border-b border-border/60">
          <span className="font-mono text-xs text-silver-platinum font-semibold">04</span>
          <h3 className="font-heading text-sm uppercase tracking-wider font-semibold text-silver-chrome">
            Project Description &amp; Objectives
          </h3>
        </div>

        <Textarea
          label="Detailed Requirements"
          required
          rows={6}
          placeholder="Describe your vision, target audience, core features, existing systems, or specific technical challenges..."
          helperText="Minimum 20 characters. The more specific your requirements, the more precise our initial consultation proposal will be."
          error={errors.projectDescription?.message}
          {...register("projectDescription")}
        />
      </div>

      {/* Consent & Submission */}
      <div className="pt-4 border-t border-border/80 space-y-4">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-border bg-surface-charcoal text-silver-chrome focus:ring-silver-platinum focus:ring-offset-surface-deep"
            {...register("privacyConsent")}
          />
          <span className="text-xs text-silver-muted leading-relaxed font-sans">
            I consent to Vectryx Technologies securely processing my project details in accordance with the{" "}
            <Link href="/privacy-policy" className="text-silver-platinum underline hover:text-white">
              Privacy Policy
            </Link>
            . We never sell or share your data with third parties.
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="text-xs text-red-400 font-medium">
            {errors.privacyConsent.message}
          </p>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            variant="chrome"
            isLoading={isSubmitting}
            className="w-full sm:w-auto min-w-[220px]"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Submit Project Inquiry
          </Button>
        </div>
      </div>
    </form>
  );
}
