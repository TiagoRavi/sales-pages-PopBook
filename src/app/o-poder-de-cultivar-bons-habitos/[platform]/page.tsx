// src/app/o-poder-de-cultivar-bons-habitos/[platform]/page.tsx
import { notFound } from "next/navigation";
import { SalesPageTemplate } from "@/src/templates/SalesPageTemplate";
import { oPoderDeCultivarBonsHabitosData } from "@/src/products/o-poder-de-cultivar-bons-habitos/data";
import { getCheckoutUrl } from "@/src/utils/helpers";
import type { CheckoutPlatform, ProductData } from "@/src/types/product";

type PageProps = {
  params: Promise<{
    platform: string;
  }>;
};

export default async function OPoderDeCultivarBonsHabitosPlatformPage({
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
    oPoderDeCultivarBonsHabitosData,
    selectedPlatform
  );

  const product: ProductData = {
    ...oPoderDeCultivarBonsHabitosData,
    offer: oPoderDeCultivarBonsHabitosData.offer
      ? {
          ...oPoderDeCultivarBonsHabitosData.offer,
          cta: {
            ...oPoderDeCultivarBonsHabitosData.offer.cta,
            href: checkoutUrl,
          },
        }
      : undefined,
    finalCta: oPoderDeCultivarBonsHabitosData.finalCta
      ? {
          ...oPoderDeCultivarBonsHabitosData.finalCta,
          button: {
            ...oPoderDeCultivarBonsHabitosData.finalCta.button,
            href: checkoutUrl,
          },
        }
      : undefined,
  };

  return <SalesPageTemplate product={product} />;
}