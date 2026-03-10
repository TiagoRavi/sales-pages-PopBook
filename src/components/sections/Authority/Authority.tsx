import { AuthoritySection } from "@/src/types/section";
import { Section } from "@/src/components/ui/Section/Section";
import { Container } from "@/src/components/ui/Container/Container";

type Props = {
  data: AuthoritySection;
};

export function Authority({ data }: Props) {
  return (
    <Section id={data.id} className="authority-section">
      <Container>
        <div className="heading heading-center">
          <h2 className="heading-title">{data.title}</h2>
          {data.subtitle ? <p className="heading-subtitle">{data.subtitle}</p> : null}
        </div>

        <p className="section-copy section-copy-center">{data.description}</p>

        <div className="premium-benefits-grid">
          {data.highlights.map((item) => (
            <div key={item} className="premium-card benefit-card">
              <span className="authority-highlight-icon">✔</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}