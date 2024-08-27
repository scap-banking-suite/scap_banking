import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import QueryProviders from "@/contexts/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BANK X",
  description: "BANKING SUITE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="BANKING SUITE"
        />
        <meta property="og:title" content="SCAP" />
        <meta
          property="og:description"
          content="BANKING SUITE"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://www.scap.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="banking suites bank microfinance"
        />
        <link rel="icon" href="/images/darklogo.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://www.scap.com" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <QueryProviders>
        <body className={inter.className}>
          <div className="">{children}</div>
          <Toaster position="top-center" />
        </body>
      </QueryProviders>
    </html>
  );
}
