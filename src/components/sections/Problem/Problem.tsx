import { ProblemSection } from "@/src/types/section";
import { Section } from "@/src/components/ui/Section/Section";
import { Container } from "@/src/components/ui/Container/Container";

type Props = {
  data: ProblemSection;
};

export function Problem({ data }: Props) {
  return (
    <Section id={data.id} className="problem-section">
      <Container>
        <div className="heading heading-center">
          <h2 className="heading-title">{data.title}</h2>
          {data.subtitle ? (
            <p className="heading-subtitle">{data.subtitle}</p>
          ) : null}
        </div>

        <div className="problem-grid">
          {data.items.map((item, index) => (
            <article key={item.title} className="problem-card premium-card">
              <div className="problem-icon">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}