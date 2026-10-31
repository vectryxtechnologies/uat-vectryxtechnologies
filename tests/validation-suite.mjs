import { z } from "zod";

console.log("=== RUNNING VECTRYX SYSTEM VALIDATION SUITE ===\n");

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName}`);
    failed++;
  }
}

// In-memory rate limiter logic
const rateLimitStore = new Map();

function rateLimit(identifier, limit = 5, windowMs = 60000) {
  const now = Date.now();
  const windowStart = now - windowMs;
  const record = rateLimitStore.get(identifier) || { timestamps: [] };
  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (record.timestamps.length >= limit) {
    const oldestTimestamp = record.timestamps[0];
    const resetTime = Math.ceil((oldestTimestamp + windowMs - now) / 1000);
    return { success: false, remaining: 0, reset: Math.max(resetTime, 1) };
  }

  record.timestamps.push(now);
  rateLimitStore.set(identifier, record);
  return { success: true, remaining: limit - record.timestamps.length, reset: Math.ceil(windowMs / 1000) };
}

const customerTypes = [
  "Student / Individual",
  "Startup",
  "Small Business",
  "Enterprise",
  "Other",
];

const projectCategories = [
  "Website Development",
  "Software Development",
  "AI / Machine Learning",
  "Mobile Application",
  "Data Science",
  "Technical Project Guidance",
  "Cloud / DevOps",
  "Other",
];

const inquirySchema = z.object({
  fullName: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  customerType: z.enum(customerTypes),
  projectCategory: z.enum(projectCategories),
  projectDescription: z.string().trim().min(20).max(3000),
  privacyConsent: z.boolean().refine((val) => val === true),
});

// 1. Zod Validation Tests - Valid Lead
const validLead = {
  fullName: "Dr. Alexander Vance",
  email: "alexander@vance-labs.org",
  customerType: "Enterprise",
  projectCategory: "AI / Machine Learning",
  projectDescription: "We require an on-premise document extraction system for clinical trial research notes.",
  privacyConsent: true,
};

const leadResult = inquirySchema.safeParse(validLead);
assert(leadResult.success, "Valid lead submission passes Zod schema");

// 2. Missing Required Field (Privacy Consent)
const missingConsentLead = { ...validLead, privacyConsent: false };
const consentResult = inquirySchema.safeParse(missingConsentLead);
assert(!consentResult.success, "Submission without privacy consent is rejected");

// 3. Invalid Email Format
const invalidEmailLead = { ...validLead, email: "not-an-email" };
const emailResult = inquirySchema.safeParse(invalidEmailLead);
assert(!emailResult.success, "Invalid email format is rejected");

// 4. Short Description Rejection (< 20 chars)
const shortDescLead = { ...validLead, projectDescription: "Too short" };
const shortDescResult = inquirySchema.safeParse(shortDescLead);
assert(!shortDescResult.success, "Short description (<20 chars) is rejected");

// 5. Sliding Window Rate Limiting Test
const testIp = `test-client-${Date.now()}`;
let rateLimitPassed = true;
for (let i = 0; i < 5; i++) {
  const check = rateLimit(testIp, 5, 60000);
  if (!check.success) rateLimitPassed = false;
}
assert(rateLimitPassed, "Rate limiter permits 5 requests in 60-second window");

// 6th call must be blocked
const blockedCheck = rateLimit(testIp, 5, 60000);
assert(!blockedCheck.success && blockedCheck.remaining === 0, "6th request triggers rate limit block (HTTP 429)");

console.log(`\nTests Completed: ${passed} Passed, ${failed} Failed.`);
if (failed > 0) process.exit(1);
