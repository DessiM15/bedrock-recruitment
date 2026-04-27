import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Careers | Bedrock",
  description:
    "Your dream life starts here. Join Bedrock and help families build brighter futures. Training, mentorship, leads, and unlimited growth potential — no experience necessary.",
  keywords: [
    "career opportunities",
    "Bedrock careers",
    "Bedrock Financial Planning",
    "remote careers Texas",
    "mentorship careers",
    "help families",
  ],
  openGraph: {
    title: "Your Dream Life Starts Here | Bedrock",
    description:
      "Join Bedrock. Training, mentorship, leads, and unlimited growth potential. Change lives — starting with your own.",
    type: "website",
    locale: "en_US",
    siteName: "Bedrock Financial Planning",
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
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
