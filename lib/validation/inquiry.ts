import { z } from "zod";

export const customerTypes = [
  "Student / Individual",
  "Startup",
  "Small Business",
  "Enterprise",
  "Other",
] as const;

export const projectCategories = [
  "Website Development",
  "Software Development",
  "AI / Machine Learning",
  "Mobile Application",
  "Data Science",
  "Technical Project Guidance",
  "Cloud / DevOps",
  "Other",
] as const;

export const budgetRanges = [
  "Not Decided",
  "Under ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "Above ₹1,00,000",
] as const;

export const timelineOptions = [
  "ASAP",
  "Within 2 Weeks",
  "Within 1 Month",
  "Within 2–3 Months",
  "Flexible",
] as const;

export const contactMethods = ["Email", "WhatsApp", "Phone Call"] as const;

export const inquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name must not exceed 80 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(120, "Email must not exceed 120 characters"),
  customerType: z.enum(customerTypes, {
    errorMap: () => ({ message: "Please select a valid customer type" }),
  }),
  projectCategory: z.enum(projectCategories, {
    errorMap: () => ({ message: "Please select a project category" }),
  }),
  projectDescription: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters describing your project")
    .max(3000, "Project description must not exceed 3,000 characters"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy to proceed",
  }),

  // Optional fields
  companyOrInstitution: z
    .string()
    .trim()
    .max(120, "Company or institution name must not exceed 120 characters")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?[0-9\s\-()]{7,20})?$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  whatsapp: z
    .string()
    .trim()
    .regex(/^(\+?[0-9\s\-()]{7,20})?$/, "Please enter a valid WhatsApp number")
    .optional()
    .or(z.literal("")),
  budget: z.enum(budgetRanges).optional().or(z.literal("")),
  timeline: z.enum(timelineOptions).optional().or(z.literal("")),
  preferredContactMethod: z.enum(contactMethods).optional().or(z.literal("")),
  projectLink: z
    .string()
    .trim()
    .url("Please provide a valid URL (e.g. GitHub repo, Figma link, Google Doc)")
    .optional()
    .or(z.literal("")),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;

export const simpleContactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name must not exceed 80 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(120, "Email must not exceed 120 characters"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject must not exceed 150 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must not exceed 2000 characters"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy terms",
  }),
});

export type SimpleContactFormData = z.infer<typeof simpleContactSchema>;
