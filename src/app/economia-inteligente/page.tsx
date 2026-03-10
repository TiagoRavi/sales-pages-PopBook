import type { Metadata } from "next";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { economiaInteligenteData } from "@/src/products/economia-inteligente/data";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: economiaInteligenteData.name,
  description:
    economiaInteligenteData.hero?.subheadline ||
    "Aprenda a organizar seu dinheiro com mais clareza e segurança.",
  alternates: {
    canonical: "/economia-inteligente",
  },
  openGraph: {
    title: economiaInteligenteData.name,
    description:
      economiaInteligenteData.hero?.subheadline ||
      "Aprenda a organizar seu dinheiro com mais clareza e segurança.",
    url: `${siteConfig.url}/economia-inteligente`,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: economiaInteligenteData.hero?.image
      ? [
          {
            url: economiaInteligenteData.hero.image.src,
            alt: economiaInteligenteData.hero.image.alt,
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: economiaInteligenteData.name,
    description:
      economiaInteligenteData.hero?.subheadline ||
      "Aprenda a organizar seu dinheiro com mais clareza e segurança.",
  },
};

export default function EconomiaInteligentePage() {
  return <SalesPageTemplate product={economiaInteligenteData} />;
}