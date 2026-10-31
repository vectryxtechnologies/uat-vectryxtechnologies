# Vectryx Technologies — Official Corporate Website

> **Engineering Digital Excellence.**  
> *Build Smarter. Automate Better. Scale Faster.*

A high-performance, luxury-minimalist software engineering company website built for **Vectryx Technologies**. Engineered with Next.js (App Router), TypeScript, Tailwind CSS, and GPU-accelerated liquid chrome visuals.

---

## 🏛️ Brand & Architectural Overview

Vectryx Technologies delivers custom software development, modern web applications, AI and machine learning solutions, mobile applications, and disciplined technical project guidance for students, startups, small businesses, and enterprises.

### Visual Design System
- **Obsidian Black & Deep Surfaces**: `#050505`, `#080808`, `#111111`, `#181818`
- **Liquid Chrome & Platinum Accents**: `#A7A7A7`, `#D9D9D9`, `#F5F5F5`
- **Typography Hierarchy**:
  - Headings: `Space Grotesk`
  - Body: `Inter`
  - Technical & Metadata Labels: `JetBrains Mono`
- **Design Ratio**: 80% corporate elegance and 20% futuristic interaction. Zero noisy aurora/purple gradients or generic template fluff.

---

## 🚀 Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router, Server Components) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS (Design Token Configuration) |
| **Icons** | Lucide React |
| **Validation** | Zod + React Hook Form |
| **Email Delivery** | Resend SDK (with dev fallback mode) |
| **Visual Effects** | HTML5 Canvas / SVG harmonic liquid chrome sculpture |
| **Security** | Sliding Window Rate Limiting, OWASP headers, CSP, HSTS |
| **Deployment** | Vercel & Global Edge CDN |

---

## 🗺️ Website Structure & Routes

Every route contains unique semantic content, responsive layouts, and structured SEO metadata:

### Homepage (`/`)
1. **Hero**: Liquid chrome centerpiece, headline reveal, rotating service specializations, dual CTAs (`Start Your Project`, `Explore Our Services`).
2. **Brand Introduction**: *"Technology Built Around Your Vision"* editorial split layout.
3. **Who We Serve**: 4 target segments (Students & Individuals, Startups & Entrepreneurs, Businesses & SMBs, Enterprises & Organizations).
4. **Our Services**: 7 service cards with monochrome iconography and metallic hover elevations.
5. **Our Solutions**: Interactive audience tabs with tailored deliverables and direct quote routes.
6. **Featured Projects**: Authentic production platforms and applied prototypes (CollabFlow, MyBazar, AI Resume Analyzer, AI Personal Assistant).
7. **Technology Stack**: Continuous marquee with 18 battle-tested production technologies.
8. **Development Process**: 7-stage connected timeline from Consultation to Ongoing Support.
9. **Why Choose Vectryx?**: 6 core engineering feature pillars.
10. **Capabilities Showcase**: Verified code quality and security standards.
11. **Project Engagement Models**: Guidance & Consultation, Custom Project Development, Business Solutions.
12. **FAQ Accordion**: 10 official questions with category filtering.
13. **Final CTA**: *"Have an Idea? Let's Build It."*
14. **Footer**: Navigation, legal links, verified channels, copyright.

### Inner Pages
- `/about`: Mission, vision, core values, and company philosophy.
- `/services`: Full capability overview and technical highlights.
  - `/services/web-development`: Corporate websites, SaaS, landing pages.
  - `/services/software-development`: Custom systems, high-throughput APIs, microservices.
  - `/services/ai-ml-development`: LLM integrations, NLP document intelligence, autonomous agents.
  - `/services/mobile-app-development`: iOS, Android, and React Native mobile architectures.
  - `/services/data-science`: ETL pipelines, executive dashboards, predictive modeling.
  - `/services/technical-project-guidance`: Concept-first mentorship, debugging, defense prep.
  - `/services/cloud-devops`: Docker containerization, CI/CD pipelines, uptime monitoring.
- `/solutions`: Deep-dive by customer category with pain-point breakdowns.
- `/projects`: Complete case study portfolio index.
- `/projects/[slug]`: In-depth architectural case studies with schematics and specs.
- `/technologies`: Categorized breakdown of engineering standards.
- `/how-we-work`: 7-stage development lifecycle and QA gates.
- `/contact`: Direct communication channels and quick message form.
- `/start-project`: Multi-section lead generation portal.
- `/privacy-policy`: Transparent data handling, retention, and user rights.
- `/terms-and-conditions`: Client code ownership, IP, and academic integrity policies.
- `/sitemap.xml`: Auto-generated dynamic sitemap for all 27 pages.
- `/robots.txt`: Production search engine crawlers configuration.

---

## 🔒 Security & Defensive Engineering

- **Strict Schema Validation**: Client and server-side Zod validation on all submitted forms.
- **Sliding-Window Rate Limiting**: Built-in in-memory rate limiter on `/api/inquiry` (5 requests / 60 seconds per IP with `Retry-After` headers).
- **Security Headers (`next.config.mjs`)**:
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Frame-Options: DENY` (Clickjacking prevention)
  - `X-Content-Type-Options: nosniff` (MIME sniffing prevention)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Email Injection Defense**: Sanitized and escaped HTML body generation.
- **Zero Secrets Exposure**: Resend API keys are isolated to server route handlers and never leaked to client bundles.

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Default / Example |
|---|---|---|
| `RESEND_API_KEY` | Resend API key for inquiry email delivery | `re_your_api_key_here` |
| `CONTACT_RECIPIENT_EMAIL` | Verified recipient inbox for website leads | `inquiries@vectryx.com` |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for sitemaps and OpenGraph | `https://vectryx.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Verified WhatsApp number (numbers only). If empty, floating button is hidden | `919876543210` |

*Note: If `RESEND_API_KEY` is omitted, the application runs in dev mode, simulating email delivery in server logs without throwing runtime errors.*

---

## 🛠️ Local Development Instructions

### 1. Prerequisites
- Node.js `v18.18+` or `v20+` (tested on Node v24)
- npm `v9+` or `v10+`

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run System Validation Suite
```bash
node tests/validation-suite.mjs
```

### 5. Production Build & Static Generation
```bash
npm run build
npm run start
```

---

## 🚀 Vercel Deployment Instructions

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Vectryx Technologies production website"
   git push origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Git Repository** and select `subhamoy05/Vectryx`.
3. Vercel automatically detects **Next.js**.
4. Under **Environment Variables**, configure:
   - `RESEND_API_KEY`: Your live key from resend.com
   - `CONTACT_RECIPIENT_EMAIL`: Verified company inbox
   - `NEXT_PUBLIC_SITE_URL`: `https://vectryx.com`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: (Optional) Company WhatsApp number
5. Click **Deploy**.

---

## 📋 Remaining Tasks Requiring Company Information

Before switching to live public production:
1. **Resend API Key**: Provide live `RESEND_API_KEY` and verify domain `vectryx.com` in Resend dashboard.
2. **Verified WhatsApp Phone Number**: When ready, set `NEXT_PUBLIC_WHATSAPP_NUMBER=91...` to enable the floating WhatsApp contact trigger.
3. **Domain DNS**: Point `vectryx.com` and `www.vectryx.com` CNAME/A records to Vercel DNS (`cname.vercel-dns.com` / `76.76.21.21`).
4. **Social Links**: Update LinkedIn URL in `lib/data/navigation.ts` if a custom handle is registered.

---

© 2026 Vectryx Technologies. Engineering Digital Excellence.
