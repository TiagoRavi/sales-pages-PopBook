import "@/src/styles/globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.defaultDescription,

  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.companyName }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "e3uJXVUTNqrbOh4IA1TfTgt_zgm4DHlu3_CtLlfkRog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}