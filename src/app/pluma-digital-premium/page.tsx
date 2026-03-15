import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pluma Digital Premium | Download do APK",
  description:
    "Baixe o aplicativo Pluma Digital Premium para Android e transforme seu celular em uma estante digital de ebooks.",
  alternates: {
    canonical: "/pluma-digital-premium",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlumaDigitalPremiumPage() {
  return (
    <main className="section">
      <div className="container apk-page">
        <div className="apk-card premium-card">
          <span className="apk-eyebrow">Acesso liberado</span>

          <h1 className="apk-title">Baixe agora o app Pluma Digital Premium</h1>

          <p className="apk-description">
            Seu acesso foi liberado. Clique no botão abaixo para baixar o APK e
            instalar o aplicativo no seu celular Android.
          </p>

          <div className="apk-notes">
            <span>Compatível apenas com Android</span>
            <span>Leitor e organizador de ebooks em PDF</span>
            <span>Manual de instalação incluso</span>
          </div>

          <div className="apk-actions">
            <a
              href="https://drive.google.com/drive/folders/1z6m9U8u4YvV4pZNOncjQMmVCfZkoxrPr?usp=sharing"
              className="btn"
              download
            >
              Baixar APK agora
            </a>
          </div>

          <div className="apk-instructions premium-card">
            <h2>Como instalar</h2>

            <ol className="apk-steps">
              <li>Toque no botão de download para baixar o arquivo APK.</li>
              <li>Abra o arquivo baixado no seu celular Android.</li>
              <li>
                Se necessário, permita a instalação de aplicativos de fontes
                externas.
              </li>
              <li>Conclua a instalação e abra o app normalmente.</li>
            </ol>
          </div>

          <div className="apk-warning">
            <strong>Atenção:</strong> este aplicativo está disponível somente
            para dispositivos Android.
          </div>
        </div>
      </div>
    </main>
  );
}