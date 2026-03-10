import { FAQSection } from "@/src/types/section";
import { Container } from "@/src/components/ui/Container/Container";
import { Section } from "@/src/components/ui/Section/Section";
import { Heading } from "@/src/components/ui/Heading/Heading";

type Props = {
  data: FAQSection;
};

export function FAQ({ data }: Props) {
  return (
    <Section id={data.id || "faq"} className="faq-section">
      <Container>
        <Heading title={data.title} subtitle={data.subtitle} align="center" />

        <div className="faq-list premium-faq-list">
          {data.items.map((item) => (
            <details key={item.question} className="faq-item premium-card">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}