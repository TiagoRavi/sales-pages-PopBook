// app/renda-extra-realista/page.tsx
import type { Metadata } from "next";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { rendaExtraRealistaData } from "@/src/products/renda-extra-realista/data";
import { siteConfig } from "@/src/config/site";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform } from "@/src/types/product";

export const metadata: Metadata = {
  title: rendaExtraRealistaData.name,
  description:
    rendaExtraRealistaData.hero?.subheadline ||
    "Aprenda como criar uma renda extra realista mesmo com pouco tempo, pouco dinheiro e uma rotina cheia.",
  alternates: {
    canonical: "/renda-extra-realista",
  },
  openGraph: {
    title: rendaExtraRealistaData.name,
    description:
      rendaExtraRealistaData.hero?.subheadline ||
      "Aprenda como criar uma renda extra realista mesmo com pouco tempo, pouco dinheiro e uma rotina cheia.",
    url: `${siteConfig.url}/renda-extra-realista`,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: rendaExtraRealistaData.hero?.image
      ? [
          {
            url: rendaExtraRealistaData.hero.image.src,
            alt: rendaExtraRealistaData.hero.image.alt,
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: rendaExtraRealistaData.name,
    description:
      rendaExtraRealistaData.hero?.subheadline ||
      "Aprenda como criar uma renda extra realista mesmo com pouco tempo, pouco dinheiro e uma rotina cheia.",
  },
};

type PageProps = {
  searchParams?: Promise<{
    platform?: string;
  }>;
};

export default async function RendaExtraRealistaPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const platformParam = params?.platform;

  const platform: CheckoutPlatform | undefined =
    platformParam === "hotmart" || platformParam === "kiwify"
      ? platformParam
      : undefined;

  const checkoutUrl = getCheckoutUrl(rendaExtraRealistaData, platform);

  const product = {
    ...rendaExtraRealistaData,
    offer: rendaExtraRealistaData.offer
      ? {
          ...rendaExtraRealistaData.offer,
          cta: {
            ...rendaExtraRealistaData.offer.cta,
            href: checkoutUrl,
          },
        }
      : undefined,
    finalCta: rendaExtraRealistaData.finalCta
      ? {
          ...rendaExtraRealistaData.finalCta,
          button: {
            ...rendaExtraRealistaData.finalCta.button,
            href: checkoutUrl,
          },
        }
      : undefined,
  };

  return <SalesPageTemplate product={product} />;
}