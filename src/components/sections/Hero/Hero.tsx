import Image from "next/image";
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
        <div className="hero-grid">
          <div className="hero-content">
            {data.eyebrow && <p className="hero-eyebrow">{data.eyebrow}</p>}
            <h1 className="hero-title">{data.headline}</h1>
            <p className="hero-subheadline">{data.subheadline}</p>

            <div className="hero-actions">
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

          {data.mediaType === "image" && data.image && (
            <div className="hero-media">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={520}
                height={520}
                className="hero-image"
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}