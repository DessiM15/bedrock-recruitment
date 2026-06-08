import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
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
      <body>
        {children}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1556770884632555');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1556770884632555&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
