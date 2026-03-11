import { notFound } from "next/navigation";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { setePassosParaSairDasDividasData } from "@/src/products/7-passos-para-sair-das-dividas/data";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform, ProductData } from "@/src/types/product";

type PageProps = {
  params: Promise<{
    platform: string;
  }>;
};

export default async function SetePassosParaSairDasDividasPlatformPage({
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
    setePassosParaSairDasDividasData,
    selectedPlatform
  );

  const product: ProductData = {
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