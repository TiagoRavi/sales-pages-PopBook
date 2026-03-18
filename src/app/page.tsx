import Link from "next/link";
import { Container } from "@/src/components/ui/Container/Container";
import { Section } from "@/src/components/ui/Section/Section";
import { Badge } from "@/src/components/ui/Badge/Badge";
import { siteConfig } from "@/src/config/site";

const productGroups = [
  {
    title: "Finanças",
    description: "Produtos para organizar sua vida financeira, reduzir pressão e construir mais segurança.",
    products: [
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
        name: "7 Passos para Sair das Dívidas",
        description:
          "Um guia prático para organizar suas finanças, criar um plano de pagamento estratégico e recuperar sua paz financeira.",
        links: {
          hotmart: "/7-passos-para-sair-das-dividas/h",
          kiwify: "/7-passos-para-sair-das-dividas/k",
        },
      },
      {
        name: "Reserva de Emergência",
        description:
          "Aprenda a construir sua reserva financeira mesmo ganhando entre R$2.000 e R$3.500.",
        links: {
          hotmart: "/reserva-de-emergencia/h",
          kiwify: "/reserva-de-emergencia/k",
        },
      },
      {
        name: "Detox das Bets",
        description:
          "Um plano prático de 21 dias para interromper o ciclo das apostas, reorganizar o orçamento e retomar o controle financeiro.",
        links: {
          hotmart: "/detox-das-bets/h",
          kiwify: "/detox-das-bets/k",
        },
      },
    ],
  },
  {
    title: "Renda Extra",
    description: "Produtos voltados para geração de renda, crescimento financeiro e novas oportunidades.",
    products: [
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
        name: "Renda Extra com IA para Iniciantes",
        description:
          "Aprenda a usar inteligência artificial no dia a dia para economizar tempo, melhorar sua produtividade e criar oportunidades reais de renda extra.",
        links: {
          hotmart: "/renda-extra-com-ia-para-iniciantes/h",
          kiwify: "/renda-extra-com-ia-para-iniciantes/k",
        },
      },
      {
        name: "Renda Extra Realista",
        description:
          "Aprenda como criar uma renda extra possível mesmo com pouco tempo, pouco dinheiro e uma rotina cheia.",
        links: {
          hotmart: "/renda-extra-realista/h",
          kiwify: "/renda-extra-realista/k",
        },
      },
    ],
  },
  {
    title: "Desenvolvimento Pessoal",
    description: "Produtos para fortalecer disciplina, rotina e evolução pessoal.",
    products: [
      {
        name: "O Poder de Cultivar Bons Hábitos",
        description:
          "Aprenda como construir hábitos positivos, substituir padrões negativos e criar uma rotina mais consistente com pequenas ações diárias.",
        links: {
          hotmart: "/o-poder-de-cultivar-bons-habitos/h",
          kiwify: "/o-poder-de-cultivar-bons-habitos/k",
        },
      },
    ],
  },
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

        <div className="home-groups">
          {productGroups.map((group) => (
            <section key={group.title} className="home-group">
              <div className="home-group-header">
                <h2 className="home-group-title">{group.title}</h2>
                <p className="home-group-description">{group.description}</p>
              </div>

              <div className="product-list-grid">
                {group.products.map((product) => (
                  <article key={product.name} className="benefit-card premium-card home-product-card">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>

                    <div className="home-product-actions">
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
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}