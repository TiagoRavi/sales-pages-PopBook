import Image from "next/image";
import { HeroSection } from "@/src/types/section";
import { Container } from "@/src/components/ui/Container/Container";
import { Section } from "@/src/components/ui/Section/Section";
import { Button } from "@/src/components/ui/Button/Button";
import { TrackedButton } from "@/src/components/ui/Button/TrackedButton";
import { Badge } from "@/src/components/ui/Badge/Badge";

type Props = {
  data: HeroSection;
  productId?: string;
  productName?: string;
};

export function Hero({ data, productId, productName }: Props) {
  const isExternalPrimaryCta = data.primaryCta?.href.startsWith("http");

  return (
    <Section id={data.id} className="hero hero-premium">
      <Container className="hero-grid">
        <div className="hero-content">
          {data.eyebrow ? <Badge>{data.eyebrow}</Badge> : null}

          <h1 className="hero-title">{data.headline}</h1>

          <p className="hero-description">{data.subheadline}</p>

          <div className="hero-actions">
            {data.primaryCta ? (
              isExternalPrimaryCta ? (
                <TrackedButton
                  href={data.primaryCta.href}
                  productId={productId}
                  productName={productName}
                  section="hero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.primaryCta.label}
                </TrackedButton>
              ) : (
                <Button href={data.primaryCta.href}>{data.primaryCta.label}</Button>
              )
            ) : null}

            {data.secondaryCta ? (
              <Button href={data.secondaryCta.href} variant="secondary">
                {data.secondaryCta.label}
              </Button>
            ) : null}
          </div>

          <div className="hero-trust">
            <span>✔ Leitura simples e prática</span>
            <span>✔ Acesso imediato</span>
            <span>✔ Ideal para iniciantes</span>
          </div>
        </div>

        {data.mediaType === "video" && data.videoUrl ? (
          <div className="hero-media premium-frame">
            <div className="hero-media-glow" />
            <div className="hero-video-wrapper">
              <iframe
                src={data.videoUrl}
                title={data.headline}
                className="hero-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : data.image ? (
          <div className="hero-media premium-frame">
            <div className="hero-media-glow" />

            <Image
              src={data.image.src}
              alt={data.image.alt}
              className="hero-image hero-image-premium"
              width={640}
              height={640}
              priority
            />

            <div className="trustbar-card">
              <div className="trustbar-card-logos">
                <span>HOTMART</span>
                <span>PIX</span>
                <span>VISA</span>
                <span>MASTERCARD</span>
                <span>AMEX</span>
                <span>BOLETO</span>
              </div>

              <div className="trustbar-card-items">
                <span>✔ Garantia de 7 dias</span>
                <span>⚡ Acesso imediato</span>
                <span>🔒 Compra segura</span>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}