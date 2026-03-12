import { notFound } from "next/navigation";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { rendaExtraComIaParaIniciantesData } from "@/src/products/renda-extra-com-ia-para-iniciantes/data";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform, ProductData } from "@/src/types/product";

type PageProps = {
  params: Promise<{
    platform: string;
  }>;
};

export default async function RendaExtraComIaParaIniciantesPlatformPage({
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
    rendaExtraComIaParaIniciantesData,
    selectedPlatform
  );

  const product: ProductData = {
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