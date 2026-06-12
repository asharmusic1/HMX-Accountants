import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HMX Accounting | Professional UK Tax Services",
    template: "%s | HMX Accounting",
  },
  description:
    "Simple, affordable, professional accounting support for self-employed people in the UK. HMRC recognised. AAT licensed.",
  openGraph: {
    siteName: "HMX Accounting",
    type: "website",
    title: "HMX Accounting | Professional UK Tax Services",
    description: "Professional accounting and tax services for self-employed people across the UK.",
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
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&family=Playfair+Display:wght@400..900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-primary-container selection:text-on-primary-container">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
