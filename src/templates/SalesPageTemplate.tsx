import { PageWrapper } from "@/src/components/layout/PageWrapper/PageWrapper";
import { Hero } from "@/src/components/sections/Hero";
import { Problem } from "@/src/components/sections/Problem";
import { Solution } from "@/src/components/sections/Solution";
import { Benefits } from "@/src/components/sections/Benefits";
import { Authority } from "@/src/components/sections/Authority";
import { Bonus } from "@/src/components/sections/Bonus";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { Offer } from "@/src/components/sections/Offer";
import { Guarantee } from "@/src/components/sections/Guarantee";
import { Scarcity } from "@/src/components/sections/Scarcity";
import { FAQ } from "@/src/components/sections/FAQ";
import { FinalCTA } from "@/src/components/sections/FinalCTA";
import type { ProductData } from "@/src/types/product";
import Image from "next/image";

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

      {product.previewImages?.length ? (
        <section className="ebook-preview-section">
          <div className="ebook-preview-container">
            <div className="ebook-preview-header">
              <span className="ebook-preview-badge">Prévia real</span>

              <h2 className="ebook-preview-title">Veja o e-book por dentro</h2>

              <p className="ebook-preview-subtitle">
                Algumas páginas reais do material que você vai receber.
              </p>
            </div>

            <div className="ebook-preview-grid">
              {product.previewImages.map((image, index) => (
                <div key={`${image.src}-${index}`} className="ebook-preview-card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={1200}
                    className="ebook-preview-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <p className="ebook-preview-note">
              ✔ Conteúdo real • ✔ Sem enrolação • ✔ Aplicação prática
            </p>
          </div>
        </section>
      ) : null}

      {product.benefits ? <Benefits data={product.benefits} /> : null}
      {product.bonus ? <Bonus data={product.bonus} /> : null}
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