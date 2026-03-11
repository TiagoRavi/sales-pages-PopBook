import type { Metadata } from "next";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { setePassosParaSairDasDividasData } from "@/src/products/7-passos-para-sair-das-dividas/data";
import { siteConfig } from "@/src/config/site";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform } from "@/src/types/product";

export const metadata: Metadata = {
  title: setePassosParaSairDasDividasData.name,
  description:
    setePassosParaSairDasDividasData.hero?.subheadline ||
    "Aprenda um plano prático para organizar suas finanças, sair das dívidas e recuperar sua paz financeira.",
  alternates: {
    canonical: "/7-passos-para-sair-das-dividas",
  },
  openGraph: {
    title: setePassosParaSairDasDividasData.name,
    description:
      setePassosParaSairDasDividasData.hero?.subheadline ||
      "Aprenda um plano prático para organizar suas finanças, sair das dívidas e recuperar sua paz financeira.",
    url: `${siteConfig.url}/7-passos-para-sair-das-dividas`,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: setePassosParaSairDasDividasData.hero?.image
      ? [
          {
            url: setePassosParaSairDasDividasData.hero.image.src,
            alt: setePassosParaSairDasDividasData.hero.image.alt,
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: setePassosParaSairDasDividasData.name,
    description:
      setePassosParaSairDasDividasData.hero?.subheadline ||
      "Aprenda um plano prático para organizar suas finanças, sair das dívidas e recuperar sua paz financeira.",
  },
};

type PageProps = {
  searchParams?: Promise<{
    platform?: string;
  }>;
};

export default async function SetePassosParaSairDasDividasPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const platformParam = params?.platform;

  const platform: CheckoutPlatform | undefined =
    platformParam === "hotmart" || platformParam === "kiwify"
      ? platformParam
      : undefined;

  const checkoutUrl = getCheckoutUrl(setePassosParaSairDasDividasData, platform);

  const product = {
    ...setePassosParaSairDasDividasData,
    offer: setePassosParaSairDasDividasData.offer
      ? {
          ...setePassosParaSairDasDividasData.offer,
          cta: {
            ...setePassosParaSairDasDividasData.offer.cta,
            href: checkoutUrl,
          },
        }
      : undefined,
    finalCta: setePassosParaSairDasDividasData.finalCta
      ? {
          ...setePassosParaSairDasDividasData.finalCta,
          button: {
            ...setePassosParaSairDasDividasData.finalCta.button,
            href: checkoutUrl,
          },
        }
      : undefined,
  };

  return <SalesPageTemplate product={product} />;
}