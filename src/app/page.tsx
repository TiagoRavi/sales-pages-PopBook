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
  {
    name: "Do Zero aos 10K em Um Ano",
    description:
      "Um guia prático para sair da estagnação, organizar sua vida financeira e construir um plano real de crescimento em 12 meses.",
    links: {
      hotmart: "/do-zero-aos-10k-em-um-ano/h",
      kiwify: "/do-zero-aos-10k-em-um-ano/k",
    },
  },

  {
  name: "7 Passos para Sair das Dívidas",
  description:
    "Um guia prático para organizar suas finanças, criar um plano de pagamento estratégico e recuperar sua paz financeira.",
  links: {
    hotmart: "/7-passos-para-sair-das-dividas/h",
    kiwify: "/7-passos-para-sair-das-dividas/k",
  },
},

  {
    name: "Renda Extra com IA para Iniciantes",
    description:
      "Aprenda a usar inteligência artificial no dia a dia para economizar tempo, melhorar sua produtividade e criar oportunidades reais de renda extra.",
    links: {
      hotmart: "/renda-extra-com-ia-para-iniciantes/h",
      kiwify: "/renda-extra-com-ia-para-iniciantes/k",
    },
  }
];

export default function HomePage() {
  return (
    <Section className="home-page">
      <Container>
        <div className="home-hero">
          <Badge>Produtos disponíveis</Badge>

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

              <div style={{ display: "flex", gap: "10px", marginTop: "16px", flexWrap: "wrap" }}>
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