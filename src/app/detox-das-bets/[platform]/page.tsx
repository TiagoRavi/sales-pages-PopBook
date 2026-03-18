import { notFound } from "next/navigation";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { detoxDasBetsData } from "@/src/products/detox-das-bets/data";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform, ProductData } from "@/src/types/product";

type PageProps = {
  params: Promise<{
    platform: string;
  }>;
};

export default async function DetoxDasBetsPlatformPage({ params }: PageProps) {
  const { platform } = await params;

  let selectedPlatform: CheckoutPlatform;

  if (platform === "h") {
    selectedPlatform = "hotmart";
  } else if (platform === "k") {
    selectedPlatform = "kiwify";
  } else {
    notFound();
  }

  const checkoutUrl = getCheckoutUrl(detoxDasBetsData, selectedPlatform);

  const product: ProductData = {
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