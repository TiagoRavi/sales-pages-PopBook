import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";

const posts = [
  {
    slug: "reserva-de-emergencia",
    title: "Como criar uma reserva de emergência",
    description:
      "Aprenda como começar a guardar dinheiro mesmo ganhando pouco e construa segurança financeira aos poucos.",
  },
  {
    slug: "economizar-dinheiro",
    title: "Como economizar dinheiro no dia a dia",
    description:
      "Veja hábitos simples que ajudam a reduzir gastos e abrir espaço no orçamento.",
  },
  {
    slug: "sair-das-dividas",
    title: "7 passos para sair das dívidas",
    description:
      "Entenda como reorganizar sua vida financeira e começar a sair do aperto com estratégia.",
  },
  
  {
    slug: "detox-das-bets",
    title: "Como parar de perder dinheiro com apostas",
    description:
      "Entenda o ciclo das apostas, como ele afeta seu dinheiro e como começar a recuperar o controle financeiro com um plano simples.",
  },
];

export default function BlogPage() {
  return (
    <Section className="blog-page">
      <Container>
        <div className="blog-hero">
          <p className="blog-eyebrow">Conteúdo gratuito</p>
          <h1 className="blog-title">Blog PopBook</h1>
          <p className="blog-description">
            Conteúdos sobre finanças, economia, renda extra e organização financeira
            para ajudar você a tomar decisões melhores com seu dinheiro.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="premium-card blog-card">
              <h2>{post.title}</h2>
              <p>{post.description}</p>

              <Link href={`/blog/${post.slug}`} className="btn">
                Ler artigo
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}