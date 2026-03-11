import type { Metadata } from "next";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { economiaInteligenteData } from "@/src/products/economia-inteligente/data";
import { siteConfig } from "@/src/config/site";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform } from "@/src/types/product";

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

type PageProps = {
  searchParams?: Promise<{
    platform?: string;
  }>;
};

export default async function EconomiaInteligentePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const platformParam = params?.platform;

  const platform: CheckoutPlatform | undefined =
    platformParam === "hotmart" || platformParam === "kiwify"
      ? platformParam
      : undefined;

  const checkoutUrl = getCheckoutUrl(economiaInteligenteData, platform);

  const product = {
    ...economiaInteligenteData,
    offer: economiaInteligenteData.offer
      ? {
          ...economiaInteligenteData.offer,
          cta: {
            ...economiaInteligenteData.offer.cta,
            href: checkoutUrl,
          },
        }
      : undefined,
    finalCta: economiaInteligenteData.finalCta
      ? {
          ...economiaInteligenteData.finalCta,
          button: {
            ...economiaInteligenteData.finalCta.button,
            href: checkoutUrl,
          },
        }
      : undefined,
  };

  return <SalesPageTemplate product={product} />;
}