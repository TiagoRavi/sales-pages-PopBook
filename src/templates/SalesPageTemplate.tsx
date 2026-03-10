import { PageWrapper } from "@/src/components/layout/PageWrapper/PageWrapper";
import { Hero } from "@/src/components/sections/Hero";
import { Problem } from "@/src/components/sections/Problem";
import { Solution } from "@/src/components/sections/Solution";
import { Benefits } from "@/src/components/sections/Benefits";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { Authority } from "@/src/components/sections/Authority";
import { Offer } from "@/src/components/sections/Offer";
import { Guarantee } from "@/src/components/sections/Guarantee";
import { Scarcity } from "@/src/components/sections/Scarcity";
import { FAQ } from "@/src/components/sections/FAQ";
import { FinalCTA } from "@/src/components/sections/FinalCTA";
import type { ProductData } from "@/src/types/product";

type Props = {
  product: ProductData;
};

export function SalesPageTemplate({ product }: Props) {
  return (
    <PageWrapper>
      {product.hero ? (
        <Hero
          data={product.hero}
          productId={product.id}
          productName={product.name}
        />
      ) : null}

      {product.problem ? <Problem data={product.problem} /> : null}
      {product.solution ? <Solution data={product.solution} /> : null}
      {product.benefits ? <Benefits data={product.benefits} /> : null}
      {product.testimonials ? <Testimonials data={product.testimonials} /> : null}
      {product.authority ? <Authority data={product.authority} /> : null}

      {product.offer ? (
        <Offer
          data={product.offer}
          productId={product.id}
          productName={product.name}
        />
      ) : null}

      {product.guarantee ? <Guarantee data={product.guarantee} /> : null}
      {product.scarcity ? <Scarcity data={product.scarcity} /> : null}
      {product.faq ? <FAQ data={product.faq} /> : null}

      {product.finalCta ? (
        <FinalCTA
          data={product.finalCta}
          productId={product.id}
          productName={product.name}
        />
      ) : null}
    </PageWrapper>
  );
}