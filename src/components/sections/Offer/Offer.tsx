import { OfferSection } from "@/src/types/section";
import { Section } from "@/src/components/ui/Section/Section";
import { Container } from "@/src/components/ui/Container/Container";
import { TrackedButton } from "@/src/components/ui/Button/TrackedButton";

type Props = {
  data: OfferSection;
  productId?: string;
  productName?: string;
};

export function Offer({ data, productId, productName }: Props) {
  return (
    <Section id={data.id} className="offer-section">
      <Container>
        <div className="offer-box premium-card">
          <div className="offer-header">
            {data.eyebrow ? <span className="offer-eyebrow">{data.eyebrow}</span> : null}

            <h2 className="offer-title">{data.title}</h2>

            {data.description ? <p className="offer-description">{data.description}</p> : null}
          </div>

          <div className="offer-content">
            <div className="offer-bonuses premium-card">
              <h3 className="offer-bonuses-title">{data.bonusTitle ?? "O que você recebe"}</h3>

              {data.bonuses?.length ? (
                <div className="offer-bonus-list">
                  {data.bonuses.map((bonus) => (
                    <div key={bonus.title} className="offer-bonus-item">
                      <strong>{bonus.title}</strong>
                      <p>{bonus.description}</p>
                      {bonus.value ? (
                        <span className="offer-bonus-value">Valor: {bonus.value}</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="offer-bonus-item">
                  <strong>Oferta principal</strong>
                  <p>Seu acesso completo ao conteúdo com entrega imediata após a compra.</p>
                </div>
              )}
            </div>

            <div className="offer-pricing premium-card">
              <span className="offer-pricing-label">Investimento de hoje</span>

              {data.originalPrice ? <div className="offer-anchor">{data.originalPrice}</div> : null}

              <div className="offer-price">{data.currentPrice}</div>

              <div className="offer-installments">
                Pagamento simples e acesso liberado após a confirmação.
              </div>

              {data.cta?.href && (
                <div className="offer-button-wrap">
                  <TrackedButton
                    href={data.cta.href}
                    productId={productId}
                    productName={productName}
                    section="offer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.cta.label}
                  </TrackedButton>
                </div>
              )}

              {data.notes?.length ? (
                <div className="offer-notes">
                  {data.notes.map((note) => (
                    <span key={note}>{note}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}