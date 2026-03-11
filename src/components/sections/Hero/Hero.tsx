import { TrackedButton } from "@/src/components/ui/Button";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";
import { HeroSection } from "@/src/types/section";

type Props = {
  data: HeroSection;
  productId: string;
  productName: string;
};

export function Hero({ data, productId, productName }: Props) {
  const isExternalPrimaryCta = data.primaryCta?.href?.startsWith("http") ?? false;

  return (
    <Section id={data.id} className="hero hero-premium">
      <Container>
        <div>
          {data.eyebrow && <p>{data.eyebrow}</p>}
          <h1>{data.headline}</h1>
          <p>{data.subheadline}</p>

          <div>
            {data.primaryCta?.href &&
              (isExternalPrimaryCta ? (
                <TrackedButton
                  href={data.primaryCta.href}
                  productId={productId}
                  productName={productName}
                  section="hero"
                >
                  {data.primaryCta.label}
                </TrackedButton>
              ) : (
                <Button href={data.primaryCta.href}>{data.primaryCta.label}</Button>
              ))}

            {data.secondaryCta?.href && (
              <Button href={data.secondaryCta.href}>{data.secondaryCta.label}</Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}