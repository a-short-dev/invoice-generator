import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { geistSans, geistMono } from "@/styles/fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  alternates: {
    canonical: "/",
    languages: {
      "en-NG": "/en-NG",
      "en-US": "/en-US",
    },
  },
  title: "Invoice Generator: Create Invoice for Free",
  description:
    "Create and send professional invoices for free with Invoice Generator. Streamline your billing process and focus on what matters most - growing your business.",
  keywords: [
    "invoice generator",
    "free invoice template",
    "create invoice",
    "invoice app",
    "invoice software",
    "invoice creator",
    "invoice maker",
    "invoice creator",
    "invoice maker",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Invoice Generator: Create Invoice for Free",
    description:
      "Create and send professional invoices for free with Invoice Generator. Streamline your billing process and focus on what matters most - growing your business.",
    url: "https://invoice-generator.vercel.app",
    siteName: "Invoice Generator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Invoice Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@short_dev",
    creator: "@short_dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
