import { FinalCTASection } from "@/src/types/section";
import { Section } from "@/src/components/ui/Section/Section";
import { Container } from "@/src/components/ui/Container/Container";
import { TrackedButton } from "@/src/components/ui/Button/TrackedButton";

type Props = {
  data: FinalCTASection;
  productId?: string;
  productName?: string;
};

export function FinalCTA({ data, productId, productName }: Props) {
  return (
    <Section id={data.id} className="premium-cta-section">
      <Container>
        <div className="premium-cta-box">
          <h2>{data.title}</h2>

          {data.description ? <p>{data.description}</p> : null}

          <TrackedButton
            href={data.button.href}
            productId={productId}
            productName={productName}
            section="final_cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.button.label}
          </TrackedButton>

          {data.notes ? (
            <div className="cta-safe">
              {data.notes.map((note) => (
                <span key={note}>{note}</span>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}