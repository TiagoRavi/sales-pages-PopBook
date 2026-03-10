import { TestimonialsSection } from "@/src/types/section";
import { Section } from "@/src/components/ui/Section/Section";
import { Container } from "@/src/components/ui/Container/Container";

type Props = {
  data: TestimonialsSection;
};

export function Testimonials({ data }: Props) {
  return (
    <Section id={data.id} className="testimonials-section">
      <Container>
        <div className="heading heading-center">
          <h2 className="heading-title">{data.title}</h2>

          {data.subtitle && (
            <p className="heading-subtitle">{data.subtitle}</p>
          )}
        </div>

        <div className="testimonials-grid">
          {data.items.map((item, index) => (
            <div key={index} className="testimonial-card premium-card">

              {item.rating && (
                <div className="testimonial-rating">
                  {"★".repeat(item.rating)}
                </div>
              )}

              <p className="testimonial-content">
                {item.content}
              </p>

              <div className="testimonial-author">
                <strong>{item.name}</strong>

                {item.role && (
                  <span>{item.role}</span>
                )}
              </div>

            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}