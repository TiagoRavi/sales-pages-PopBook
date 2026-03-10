import Link from "next/link";
import { Container } from "@/src/components/ui/Container/Container";
import { Section } from "@/src/components/ui/Section/Section";
import { Badge } from "@/src/components/ui/Badge/Badge";
import { siteConfig } from "@/src/config/site";

const products = [
  {
    name: "Economia Inteligente",
    href: "/economia-inteligente",
    description:
      "Aprenda a organizar seu dinheiro e construir uma vida financeira mais segura.",
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
            <article key={product.href} className="benefit-card premium-card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>

              <Link className="btn" href={product.href}>
                Ver página
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}