import { notFound } from "next/navigation";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { economiaInteligenteData } from "@/src/products/economia-inteligente/data";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform, ProductData } from "@/src/types/product";

type PageProps = {
  params: Promise<{
    platform: string;
  }>;
};

export default async function EconomiaInteligentePlatformPage({ params }: PageProps) {
  const { platform } = await params;

  let selectedPlatform: CheckoutPlatform;

  if (platform === "h") {
    selectedPlatform = "hotmart";
  } else if (platform === "k") {
    selectedPlatform = "kiwify";
  } else {
    notFound();
  }

  const checkoutUrl = getCheckoutUrl(economiaInteligenteData, selectedPlatform);

  const product: ProductData = {
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