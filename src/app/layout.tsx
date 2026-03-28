import type { Metadata } from "next";
import "@/app/globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteMeta } from "@/data/site";
import { Manrope, Space_Grotesk } from "next/font/google";
import { MobileCta } from "@/components/layout/mobile-cta";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixerntechnology.com"),
  title: {
    default: `${siteMeta.name} | Modern Digital Solutions`,
    template: `%s | ${siteMeta.name}`
  },
  description: siteMeta.description,
  keywords: [
    "web development company",
    "software development services",
    "website design",
    "custom software",
    "Pixern Technology"
  ],
  openGraph: {
    title: `${siteMeta.name} | Modern Digital Solutions`,
    description: siteMeta.description,
    url: "https://pixerntechnology.com",
    siteName: siteMeta.name,
    images: [{ url: "/pixern-logo.png", width: 1536, height: 1024, alt: siteMeta.name }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} | Modern Digital Solutions`,
    description: siteMeta.description,
    images: ["/pixern-logo.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMeta.name,
    url: "https://pixerntechnology.com",
    logo: "https://pixerntechnology.com/pixern-logo.png",
    email: siteMeta.email,
    telephone: siteMeta.phone,
    sameAs: []
  };

  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <Navbar />
        <main className="mobile-safe-pad md:pb-0">{children}</main>
        <MobileCta />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
