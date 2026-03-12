import type { Metadata } from "next";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { reservaDeEmergenciaData } from "@/src/products/reserva-de-emergencia/data";
import { siteConfig } from "@/src/config/site";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform } from "@/src/types/product";

export const metadata: Metadata = {
  title: reservaDeEmergenciaData.name,
  description:
    reservaDeEmergenciaData.hero?.subheadline ||
    "Aprenda a construir sua reserva de emergência mesmo ganhando entre R$2.000 e R$3.500.",
  alternates: {
    canonical: "/reserva-de-emergencia",
  },
  openGraph: {
    title: reservaDeEmergenciaData.name,
    description:
      reservaDeEmergenciaData.hero?.subheadline ||
      "Aprenda a construir sua reserva de emergência.",
    url: `${siteConfig.url}/reserva-de-emergencia`,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

type PageProps = {
  searchParams?: Promise<{
    platform?: string;
  }>;
};

export default async function ReservaDeEmergenciaPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const platformParam = params?.platform;

  const platform: CheckoutPlatform | undefined =
    platformParam === "hotmart" || platformParam === "kiwify"
      ? platformParam
      : undefined;

  const checkoutUrl = getCheckoutUrl(reservaDeEmergenciaData, platform);

  const product = {
    ...reservaDeEmergenciaData,
    offer: reservaDeEmergenciaData.offer
      ? {
          ...reservaDeEmergenciaData.offer,
          cta: {
            ...reservaDeEmergenciaData.offer.cta,
            href: checkoutUrl,
          },
        }
      : undefined,
    finalCta: reservaDeEmergenciaData.finalCta
      ? {
          ...reservaDeEmergenciaData.finalCta,
          button: {
            ...reservaDeEmergenciaData.finalCta.button,
            href: checkoutUrl,
          },
        }
      : undefined,
  };

  return <SalesPageTemplate product={product} />;
}