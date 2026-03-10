import { GuaranteeSection } from "@/src/types/section";
import { Section } from "@/src/components/ui/Section/Section";
import { Container } from "@/src/components/ui/Container/Container";

type Props = {
  data: GuaranteeSection;
};

export function Guarantee({ data }: Props) {
  return (
    <Section id={data.id} className="guarantee-section">
      <Container>
        <div className="guarantee-box premium-card">
          {data.sealText ? <span className="guarantee-seal">{data.sealText}</span> : null}

          <h2 className="guarantee-title">{data.title}</h2>

          <p className="guarantee-description">{data.description}</p>
        </div>
      </Container>
    </Section>
  );
}