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
  title: "Get Paid Nation | Your Next Big Opportunity",
  description:
    "You missed Bitcoin. You missed Amazon. Don\u2019t miss THIS. Join Get Paid Nation and start building real wealth from home. Training, mentorship, leads, and unlimited earning potential.",
  keywords: [
    "make money from home",
    "Get Paid Nation",
    "wealth building opportunity",
    "work from home business",
    "financial freedom",
    "residual income",
  ],
  openGraph: {
    title: "Don\u2019t Miss the Next Big Opportunity | Get Paid Nation",
    description:
      "Join Get Paid Nation. Training, mentorship, leads provided, and unlimited earning potential. Upgrade your life and bank account.",
    type: "website",
    locale: "en_US",
    siteName: "Get Paid Nation",
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
