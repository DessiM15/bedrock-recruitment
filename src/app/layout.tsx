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
  title: "Careers | Bedrock Financial Planning",
  description:
    "Build your career on solid ground. Join Bedrock Financial Planning and empower families to take control of their financial futures. Training, mentorship, leads, and unlimited growth potential.",
  keywords: [
    "financial planning careers",
    "financial advisor jobs",
    "Bedrock Financial Planning",
    "insurance agent careers",
    "financial services recruitment",
    "Conroe Texas financial careers",
  ],
  openGraph: {
    title: "Build Your Career on Solid Ground | Bedrock Financial Planning",
    description:
      "Join Bedrock Financial Planning. Training, mentorship, leads, and unlimited growth potential for financial agents.",
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
