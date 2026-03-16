// app/renda-extra-realista/[platform]/page.tsx
import { notFound } from "next/navigation";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { rendaExtraRealistaData } from "@/src/products/renda-extra-realista/data";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform, ProductData } from "@/src/types/product";

type PageProps = {
  params: Promise<{
    platform: string;
  }>;
};

export default async function RendaExtraRealistaPlatformPage({
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
    rendaExtraRealistaData,
    selectedPlatform
  );

  const product: ProductData = {
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