import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vectryx.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vectryx Technologies | Software Development & Technical Solutions",
    template: "%s | Vectryx Technologies",
  },
  description:
    "Vectryx Technologies delivers custom software development, professional websites, AI and machine learning solutions, mobile applications and technical project guidance for individuals, startups and businesses.",
  keywords: [
    "Vectryx Technologies",
    "software engineering company",
    "custom software development",
    "web development",
    "AI solutions",
    "machine learning development",
    "mobile app development",
    "Next.js developers",
    "technical project guidance",
    "startup MVP development",
  ],
  authors: [{ name: "Vectryx Technologies", url: siteUrl }],
  creator: "Vectryx Technologies",
  publisher: "Vectryx Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vectryx Technologies",
    title: "Vectryx Technologies | Software Development & Technical Solutions",
    description:
      "We transform ideas into powerful digital products through innovative software development, modern technologies and reliable project delivery.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Vectryx Technologies - Engineering Digital Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vectryx Technologies | Engineering Digital Excellence",
    description:
      "Custom software engineering, AI systems, and technical project development.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vectryx Technologies",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      "Vectryx Technologies delivers custom software development, professional websites, AI and machine learning solutions, mobile applications and technical project guidance.",
    email: "inquiries@vectryx.com",
    sameAs: [
      "https://github.com/subhamoy05/Vectryx",
      "https://linkedin.com/company/vectryx-technologies",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-background text-silver-chrome antialiased selection:bg-silver-platinum selection:text-background flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
