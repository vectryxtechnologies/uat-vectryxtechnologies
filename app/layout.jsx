import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppFab from "@/components/whatsapp-fab";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "800"], variable: "--font-jakarta" });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Software, AI & Cloud`, template: `%s | ${SITE.name}` },
  description: "Custom software, web and mobile apps, AI, data science and cloud engineering.",
};
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} dark`}>
      <body className="min-h-screen font-sans text-slate-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
