import type { Metadata } from "next";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { rendaExtraComIaParaIniciantesData } from "@/src/products/renda-extra-com-ia-para-iniciantes/data";
import { siteConfig } from "@/src/config/site";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform } from "@/src/types/product";

export const metadata: Metadata = {
  title: rendaExtraComIaParaIniciantesData.name,
  description:
    rendaExtraComIaParaIniciantesData.hero?.subheadline ||
    "Aprenda a usar inteligência artificial no dia a dia para economizar tempo e criar oportunidades de renda extra.",
  alternates: {
    canonical: "/renda-extra-com-ia-para-iniciantes",
  },
  openGraph: {
    title: rendaExtraComIaParaIniciantesData.name,
    description:
      rendaExtraComIaParaIniciantesData.hero?.subheadline ||
      "Aprenda a usar inteligência artificial no dia a dia para economizar tempo e criar oportunidades de renda extra.",
    url: `${siteConfig.url}/renda-extra-com-ia-para-iniciantes`,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: rendaExtraComIaParaIniciantesData.hero?.image
      ? [
          {
            url: rendaExtraComIaParaIniciantesData.hero.image.src,
            alt: rendaExtraComIaParaIniciantesData.hero.image.alt,
          },
        ]
      : [],
  },
  twitter: {
    card: "summary_large_image",
    title: rendaExtraComIaParaIniciantesData.name,
    description:
      rendaExtraComIaParaIniciantesData.hero?.subheadline ||
      "Aprenda a usar inteligência artificial no dia a dia para economizar tempo e criar oportunidades de renda extra.",
  },
};

type PageProps = {
  searchParams?: Promise<{
    platform?: string;
  }>;
};

export default async function RendaExtraComIaParaIniciantesPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const platformParam = params?.platform;

  const platform: CheckoutPlatform | undefined =
    platformParam === "hotmart" || platformParam === "kiwify"
      ? platformParam
      : undefined;

  const checkoutUrl = getCheckoutUrl(
    rendaExtraComIaParaIniciantesData,
    platform
  );

  const product = {
    ...rendaExtraComIaParaIniciantesData,
    offer: rendaExtraComIaParaIniciantesData.offer
      ? {
          ...rendaExtraComIaParaIniciantesData.offer,
          cta: {
            ...rendaExtraComIaParaIniciantesData.offer.cta,
            href: checkoutUrl,
          },
        }
      : undefined,
    finalCta: rendaExtraComIaParaIniciantesData.finalCta
      ? {
          ...rendaExtraComIaParaIniciantesData.finalCta,
          button: {
            ...rendaExtraComIaParaIniciantesData.finalCta.button,
            href: checkoutUrl,
          },
        }
      : undefined,
  };

  return <SalesPageTemplate product={product} />;
}