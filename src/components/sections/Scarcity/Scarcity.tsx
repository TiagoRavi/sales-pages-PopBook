import { ScarcitySection } from "@/src/types/section";
import { Section } from "@/src/components/ui/Section/Section";
import { Container } from "@/src/components/ui/Container/Container";

type Props = {
  data: ScarcitySection;
};

export function Scarcity({ data }: Props) {
  return (
    <Section id={data.id} className="scarcity-section">
      <Container>
        <div className="scarcity-box premium-card">

          <h2 className="scarcity-title">
            {data.title}
          </h2>

          <p className="scarcity-description">
            {data.description}
          </p>

          {data.warning ? (
            <span className="scarcity-warning">
              {data.warning}
            </span>
          ) : null}

        </div>
      </Container>
    </Section>
  );
}