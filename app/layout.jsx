import "./globals.css";
import { SITE } from "@/lib/site";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppFab from "@/components/whatsapp-fab";
import PageEffects from "@/components/page-effects";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Software, AI & Cloud`, template: `%s | ${SITE.name}` },
  description: "Custom software, web and mobile apps, AI, data science and cloud engineering.",
  icons: {
    icon: "/VECTRYX Technologies Logo.png",
    apple: "/VECTRYX Technologies Logo.png",
  },
};
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background font-sans text-foreground antialiased">
        <PageEffects />
        <Navbar />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
        <WhatsAppFab />
      </body>
    </html>
  );
}
