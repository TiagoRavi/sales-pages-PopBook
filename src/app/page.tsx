import Link from "next/link";
import { Container } from "@/src/components/ui/Container/Container";
import { Section } from "@/src/components/ui/Section/Section";
import { Badge } from "@/src/components/ui/Badge/Badge";
import { siteConfig } from "@/src/config/site";

const products = [
  {
    name: "Economia Inteligente",
    description:
      "Aprenda a organizar seu dinheiro e construir uma vida financeira mais segura.",
    links: {
      hotmart: "/economia-inteligente/h",
      kiwify: "/economia-inteligente/k",
    },
  },
];

export default function HomePage() {
  return (
    <Section className="home-page">
      <Container>
        <div className="home-hero">
          <Badge>Produto disponível</Badge>

          <h1 className="hero-title">{siteConfig.name}</h1>

          <p className="hero-description">
            Produtos digitais práticos, acessíveis e construídos para transformar
            conhecimento em ação.
          </p>
        </div>

        <div className="product-list-grid">
          {products.map((product) => (
            <article key={product.name} className="benefit-card premium-card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>

              <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                <Link className="btn" href={product.links.hotmart}>
                  Ver página (Hotmart)
                </Link>

                <Link className="btn btn-secondary" href={product.links.kiwify}>
                  Ver página (Kiwify)
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}