import { ProductData, CheckoutPlatform } from "@/src/types/product";

export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(value: number, currency = "BRL") {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(value);
}

export function getCheckoutUrl(
  product: ProductData,
  platform?: CheckoutPlatform
): string {
  const selectedPlatform: CheckoutPlatform =
    platform ?? product.checkoutPlatform ?? "hotmart";

  return (
    product.checkoutLinks[selectedPlatform] ||
    product.checkoutLinks.hotmart ||
    product.checkoutLinks.kiwify ||
    "#"
  );
}