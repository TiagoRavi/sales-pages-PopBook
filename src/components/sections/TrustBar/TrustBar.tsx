export function TrustBar() {
  return (
    <section className="trustbar">
      <div className="container trustbar-container">

        {/* Logos de pagamento */}
        <div className="trustbar-logos">

          <span className="logo">hotmart</span>
          <span className="logo">pix</span>
          <span className="logo">visa</span>
          <span className="logo">mastercard</span>
          <span className="logo">amex</span>
          <span className="logo">hipercard</span>
          <span className="logo">boleto</span>
          <span className="logo">paypal</span>

        </div>

        {/* Informações */}
        <div className="trustbar-items">

          <div className="trust-item">
            <span className="icon">✔</span>
            Garantia de 07 dias
          </div>

          <div className="trust-item">
            <span className="icon">🎧</span>
            Suporte 48 horas úteis
          </div>

          <div className="trust-item">
            <span className="icon">💳</span>
            Compra Segura
          </div>

        </div>

      </div>
    </section>
  );
}