import type { Metadata } from "next";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { doZeroAos10kEmUmAnoData } from "@/src/products/do-zero-aos-10k-em-um-ano/data";
import { siteConfig } from "@/src/config/site";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform } from "@/src/types/product";

export const metadata: Metadata = {
  title: doZeroAos10kEmUmAnoData.name,
  description:
    doZeroAos10kEmUmAnoData.hero?.subheadline ||
    "Aprenda um plano prático para sair do zero e construir renda com mais clareza, consistência e direção.",
  alternates: {
    canonical: "/do-zero-aos-10k-em-um-ano",
  },
  openGraph: {
    title: doZeroAos10kEmUmAnoData.name,
    description:
      doZeroAos10kEmUmAnoData.hero?.subheadline ||
      "Aprenda um plano prático para sair do zero e construir renda com mais clareza, consistência e direção.",
    url: `${siteConfig.url}/do-zero-aos-10k-em-um-ano`,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: doZeroAos10kEmUmAnoData.hero?.image
      ? [
          {
            url: doZeroAos10kEmUmAnoData.hero.image.src,
            alt: doZeroAos10kEmUmAnoData.hero.image.alt,
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: doZeroAos10kEmUmAnoData.name,
    description:
      doZeroAos10kEmUmAnoData.hero?.subheadline ||
      "Aprenda um plano prático para sair do zero e construir renda com mais clareza, consistência e direção.",
  },
};

type PageProps = {
  searchParams?: Promise<{
    platform?: string;
  }>;
};

export default async function DoZeroAos10kEmUmAnoPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const platformParam = params?.platform;

  const platform: CheckoutPlatform | undefined =
    platformParam === "hotmart" || platformParam === "kiwify"
      ? platformParam
      : undefined;

  const checkoutUrl = getCheckoutUrl(doZeroAos10kEmUmAnoData, platform);

  const product = {
    ...doZeroAos10kEmUmAnoData,
    offer: doZeroAos10kEmUmAnoData.offer
      ? {
          ...doZeroAos10kEmUmAnoData.offer,
          cta: {
            ...doZeroAos10kEmUmAnoData.offer.cta,
            href: checkoutUrl,
          },
        }
      : undefined,
    finalCta: doZeroAos10kEmUmAnoData.finalCta
      ? {
          ...doZeroAos10kEmUmAnoData.finalCta,
          button: {
            ...doZeroAos10kEmUmAnoData.finalCta.button,
            href: checkoutUrl,
          },
        }
      : undefined,
  };

  return <SalesPageTemplate product={product} />;
}