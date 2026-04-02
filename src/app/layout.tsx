import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Juan Carlos Calvo — Full-Stack Engineer",
    template: "%s — Juan Carlos Calvo",
  },
  description:
    "Full-stack engineer building secure, production-minded web applications with Angular, Node.js, PostgreSQL, and AWS. Focused on automation, cloud operations, and practical security.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Angular",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Security",
    "Costa Rica",
    "Freelance Developer",
  ],
  authors: [{ name: "Juan Carlos Calvo González" }],
  creator: "Juan Carlos Calvo González",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Juan Carlos Calvo — Full-Stack Engineer",
    description:
      "Full-stack engineer building secure, production-minded web applications with Angular, Node.js, PostgreSQL, and AWS.",
    siteName: "juankDEV — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Carlos Calvo — Full-Stack Engineer",
    description:
      "Full-stack engineer building secure, production-minded web applications with Angular, Node.js, PostgreSQL, and AWS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
