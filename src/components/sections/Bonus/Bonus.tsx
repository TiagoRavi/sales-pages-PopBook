import Image from "next/image";
import type { BonusSection } from "@/src/types/section";
import { Section } from "@/src/components/ui/Section/Section";
import { Container } from "@/src/components/ui/Container/Container";

type Props = {
  data: BonusSection;
};

export function Bonus({ data }: Props) {
  return (
    <Section id={data.id} className="bonus-section">
      <Container>
        <div className="bonus-grid">
          <div className="bonus-content">
            {data.eyebrow ? (
              <span className="bonus-eyebrow">{data.eyebrow}</span>
            ) : null}

            <h2 className="bonus-title">{data.title}</h2>

            {data.subtitle ? (
              <p className="bonus-subtitle">{data.subtitle}</p>
            ) : null}

            {data.items?.length ? (
              <div className="bonus-items">
                {data.items.map((item) => (
                  <div key={item.title} className="bonus-item premium-card">
                    <div className="bonus-item-icon">✓</div>

                    <div className="bonus-item-content">
                      <h3 className="bonus-item-title">{item.title}</h3>
                      <p className="bonus-item-description">{item.description}</p>

                      {item.value ? (
                        <span className="bonus-item-value">{item.value}</span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {data.image ? (
            <div className="bonus-media premium-card">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={520}
                height={720}
                className="bonus-image"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}