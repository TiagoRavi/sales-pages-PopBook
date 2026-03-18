import type { Metadata } from "next";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { detoxDasBetsData } from "@/src/products/detox-das-bets/data";
import { siteConfig } from "@/src/config/site";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform } from "@/src/types/product";

export const metadata: Metadata = {
  title: detoxDasBetsData.name,
  description:
    detoxDasBetsData.hero?.subheadline ||
    "Recupere o controle do seu dinheiro e saia do ciclo das apostas.",
  alternates: {
    canonical: "/detox-das-bets",
  },
  openGraph: {
    title: detoxDasBetsData.name,
    description:
      detoxDasBetsData.hero?.subheadline ||
      "Recupere o controle do seu dinheiro e saia do ciclo das apostas.",
    url: `${siteConfig.url}/detox-das-bets`,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: detoxDasBetsData.hero?.image
      ? [
          {
            url: detoxDasBetsData.hero.image.src,
            alt: detoxDasBetsData.hero.image.alt,
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: detoxDasBetsData.name,
    description:
      detoxDasBetsData.hero?.subheadline ||
      "Recupere o controle do seu dinheiro e saia do ciclo das apostas.",
  },
};

type PageProps = {
  searchParams?: Promise<{
    platform?: string;
  }>;
};

export default async function DetoxDasBetsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const platformParam = params?.platform;

  const platform: CheckoutPlatform | undefined =
    platformParam === "hotmart" || platformParam === "kiwify"
      ? platformParam
      : undefined;

  const checkoutUrl = getCheckoutUrl(detoxDasBetsData, platform);

  const product = {
    ...detoxDasBetsData,
    offer: detoxDasBetsData.offer
      ? {
          ...detoxDasBetsData.offer,
          cta: {
            ...detoxDasBetsData.offer.cta,
            href: checkoutUrl,
          },
        }
      : undefined,
    finalCta: detoxDasBetsData.finalCta
      ? {
          ...detoxDasBetsData.finalCta,
          button: {
            ...detoxDasBetsData.finalCta.button,
            href: checkoutUrl,
          },
        }
      : undefined,
  };

  return <SalesPageTemplate product={product} />;
}