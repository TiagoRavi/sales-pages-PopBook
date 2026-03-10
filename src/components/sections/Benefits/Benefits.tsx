import { BenefitsSection } from "@/src/types/section";
import { Container } from "@/src/components/ui/Container/Container";
import { Section } from "@/src/components/ui/Section/Section";
import { Heading } from "@/src/components/ui/Heading/Heading";

type Props = {
  data: BenefitsSection;
};

export function Benefits({ data }: Props) {
  return (
    <Section id={data.id || "benefits"} className="benefits-section">
      <Container>
        <Heading title={data.title} subtitle={data.subtitle} align="center" />

        <div className="benefits-grid premium-benefits-grid">
          {data.items.map((item, index) => (
            <article key={item.title} className="benefit-card premium-card">
              <div className="benefit-number">0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}