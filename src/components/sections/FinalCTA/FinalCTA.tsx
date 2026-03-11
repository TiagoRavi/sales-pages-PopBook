import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { Section } from "@/src/components/ui/Section";
import { TrackedButton } from "@/src/components/ui/Button";
import { FinalCTASection } from "@/src/types/section";

type FinalCTAProps = {
  data: FinalCTASection;
  productId: string;
  productName: string;
};

export function FinalCTA({ data, productId, productName }: FinalCTAProps) {
  return (
    <Section id={data.id}>
      <Container>
        <Heading title={data.title} subtitle={data.description} align="center" />

        {data.button.href && (
          <TrackedButton
            href={data.button.href}
            productId={productId}
            productName={productName}
            section="final_cta"
          >
            {data.button.label}
          </TrackedButton>
        )}

        {data.notes?.length ? (
          <div>
            {data.notes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}