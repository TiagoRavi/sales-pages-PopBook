import Image from "next/image";
import { SolutionSection } from "@/src/types/section";
import { Section } from "@/src/components/ui/Section/Section";
import { Container } from "@/src/components/ui/Container/Container";

type Props = {
  data: SolutionSection;
};

export function Solution({ data }: Props) {
  return (
    <Section id={data.id} className="solution-section">
      <Container>
        <div className="solution-grid">
          <div className="solution-content">
            <div className="heading">
              <h2 className="heading-title">{data.title}</h2>
              {data.subtitle ? <p className="heading-subtitle">{data.subtitle}</p> : null}
            </div>

            <p className="solution-description">{data.description}</p>

            <div className="solution-points">
              {data.points.map((point) => (
                <div key={point} className="solution-point">
                  <span className="solution-point-icon">✔</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {data.image ? (
            <div className="solution-media premium-card">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                className="solution-image"
                width={640}
                height={640}
              />
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}