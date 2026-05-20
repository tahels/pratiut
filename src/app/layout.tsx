import type { Metadata, Viewport } from "next";
import { heebo, frankRuhl, jetbrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pratiut.co.il"),
  title: {
    default: "פרטיות | ייעוץ DPO והגנת פרטיות",
    template: "%s | פרטיות",
  },
  description:
    "שירותי ייעוץ מקצועיים בתחום הגנת הפרטיות, GDPR ותיקון 13 לחוק הגנת הפרטיות בישראל. ליווי ארגונים, DPO as a Service, סקרי ציות והדרכות.",
  keywords: [
    "DPO",
    "הגנת פרטיות",
    "תיקון 13",
    "GDPR ישראל",
    "סקר פרטיות",
    "ציות פרטיות",
    "ממונה הגנת פרטיות",
    "אבטחת מידע",
  ],
  authors: [{ name: "תהל", url: "https://pratiut.co.il" }],
  creator: "Webcommerce",
  publisher: "Webcommerce",

  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://pratiut.co.il",
    siteName: "פרטיות",
    title: "פרטיות | ייעוץ DPO והגנת פרטיות",
    description:
      "שירותי ייעוץ מקצועיים בתחום הגנת הפרטיות וציות לרגולציה",
  },

  twitter: {
    card: "summary_large_image",
    title: "פרטיות | ייעוץ DPO",
    description: "שירותי ייעוץ מקצועיים בתחום הגנת הפרטיות",
  },

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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf6" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1419" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      suppressHydrationWarning
      className={cn(
        heebo.variable,
        frankRuhl.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
