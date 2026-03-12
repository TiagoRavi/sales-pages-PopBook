import { notFound } from "next/navigation";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { reservaDeEmergenciaData } from "@/src/products/reserva-de-emergencia/data";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform, ProductData } from "@/src/types/product";

type PageProps = {
  params: Promise<{
    platform: string;
  }>;
};

export default async function ReservaDeEmergenciaPlatformPage({
  params,
}: PageProps) {
  const { platform } = await params;

  let selectedPlatform: CheckoutPlatform;

  if (platform === "h") {
    selectedPlatform = "hotmart";
  } else if (platform === "k") {
    selectedPlatform = "kiwify";
  } else {
    notFound();
  }

  const checkoutUrl = getCheckoutUrl(
    reservaDeEmergenciaData,
    selectedPlatform
  );

  const product: ProductData = {
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