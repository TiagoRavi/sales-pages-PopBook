import { notFound } from "next/navigation";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { doZeroAos10kEmUmAnoData } from "@/src/products/do-zero-aos-10k-em-um-ano/data";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform, ProductData } from "@/src/types/product";

type PageProps = {
  params: Promise<{
    platform: string;
  }>;
};

export default async function DoZeroAos10kEmUmAnoPlatformPage({ params }: PageProps) {
  const { platform } = await params;

  let selectedPlatform: CheckoutPlatform;

  if (platform === "h") {
    selectedPlatform = "hotmart";
  } else if (platform === "k") {
    selectedPlatform = "kiwify";
  } else {
    notFound();
  }

  const checkoutUrl = getCheckoutUrl(doZeroAos10kEmUmAnoData, selectedPlatform);

  const product: ProductData = {
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