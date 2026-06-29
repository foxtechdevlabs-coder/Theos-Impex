import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "THEOS IMPEX — Connecting Quality Products to Global Markets",
  description:
    "THEOS IMPEX is a trusted import and export company committed to delivering high-quality products from India to international markets. Specializing in fresh produce, seafood, spices, metal scrap, and recyclable materials.",
  keywords: [
    "import export company India",
    "THEOS IMPEX",
    "global trade",
    "fresh vegetables export",
    "spices export India",
    "seafood export",
    "metal scrap trade",
    "Kanyakumari Tamil Nadu",
  ],
  openGraph: {
    title: "THEOS IMPEX — Connecting Quality Products to Global Markets",
    description:
      "A trusted import and export company delivering premium products from India to global markets.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900 overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
