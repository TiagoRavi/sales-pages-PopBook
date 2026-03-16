// src/app/o-poder-de-cultivar-bons-habitos/page.tsx
import type { Metadata } from "next";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { oPoderDeCultivarBonsHabitosData } from "@/src/products/o-poder-de-cultivar-bons-habitos/data";
import { siteConfig } from "@/src/config/site";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform } from "@/src/types/product";

export const metadata: Metadata = {
  title: oPoderDeCultivarBonsHabitosData.name,
  description:
    oPoderDeCultivarBonsHabitosData.hero?.subheadline ||
    "Aprenda como construir bons hábitos, substituir padrões ruins e criar uma rotina mais consistente.",
  alternates: {
    canonical: "/o-poder-de-cultivar-bons-habitos",
  },
  openGraph: {
    title: oPoderDeCultivarBonsHabitosData.name,
    description:
      oPoderDeCultivarBonsHabitosData.hero?.subheadline ||
      "Aprenda como construir bons hábitos, substituir padrões ruins e criar uma rotina mais consistente.",
    url: `${siteConfig.url}/o-poder-de-cultivar-bons-habitos`,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: oPoderDeCultivarBonsHabitosData.hero?.image
      ? [
          {
            url: oPoderDeCultivarBonsHabitosData.hero.image.src,
            alt: oPoderDeCultivarBonsHabitosData.hero.image.alt,
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: oPoderDeCultivarBonsHabitosData.name,
    description:
      oPoderDeCultivarBonsHabitosData.hero?.subheadline ||
      "Aprenda como construir bons hábitos, substituir padrões ruins e criar uma rotina mais consistente.",
  },
};

type PageProps = {
  searchParams?: Promise<{
    platform?: string;
  }>;
};

export default async function OPoderDeCultivarBonsHabitosPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const platformParam = params?.platform;

  const platform: CheckoutPlatform | undefined =
    platformParam === "hotmart" || platformParam === "kiwify"
      ? platformParam
      : undefined;

  const checkoutUrl = getCheckoutUrl(oPoderDeCultivarBonsHabitosData, platform);

  const product = {
    ...oPoderDeCultivarBonsHabitosData,
    offer: oPoderDeCultivarBonsHabitosData.offer
      ? {
          ...oPoderDeCultivarBonsHabitosData.offer,
          cta: {
            ...oPoderDeCultivarBonsHabitosData.offer.cta,
            href: checkoutUrl,
          },
        }
      : undefined,
    finalCta: oPoderDeCultivarBonsHabitosData.finalCta
      ? {
          ...oPoderDeCultivarBonsHabitosData.finalCta,
          button: {
            ...oPoderDeCultivarBonsHabitosData.finalCta.button,
            href: checkoutUrl,
          },
        }
      : undefined,
  };

  return <SalesPageTemplate product={product} />;
}