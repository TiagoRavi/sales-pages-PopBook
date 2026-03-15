import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Pluma Digital Premium",
  description:
    "Política de Privacidade do site e do aplicativo Pluma Digital Premium.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="section">
      <div className="container legal-page">
        <div className="legal-card premium-card">
          <span className="legal-eyebrow">Documento legal</span>

          <h1 className="legal-title">Política de Privacidade</h1>

          <p className="legal-updated">Última atualização: 15 de março de 2026</p>

          <div className="legal-content">
            <p>
              Esta Política de Privacidade descreve como as informações são tratadas
              no uso do <strong>site</strong> e do <strong>aplicativo Pluma Digital Premium</strong>.
            </p>

            <h2>1. Abrangência</h2>
            <p>
              Esta política se aplica ao site, às páginas de vendas, aos conteúdos
              digitais relacionados à marca Pluma Digital Premium e ao aplicativo
              disponibilizado para dispositivos Android.
            </p>

            <h2>2. Informações coletadas</h2>
            <p>
              O site e o aplicativo podem tratar informações de formas diferentes,
              conforme o contexto de uso.
            </p>
            <p>
              No <strong>site</strong>, podem ser coletadas informações fornecidas
              diretamente pelo usuário, como dados enviados em formulários,
              navegação em páginas, cliques, interações e informações técnicas
              do dispositivo e navegador.
            </p>
            <p>
              No <strong>aplicativo Pluma Digital Premium</strong>, os arquivos
              importados pelo usuário, como ebooks e PDFs, permanecem armazenados
              no próprio dispositivo e são utilizados apenas para o funcionamento
              do aplicativo.
            </p>

            <h2>3. Dados pessoais</h2>
            <p>
              Não coletamos intencionalmente dados pessoais sensíveis, como CPF,
              dados bancários, documentos oficiais ou informações de saúde,
              salvo quando exigido por plataformas de pagamento ou por obrigação legal,
              caso aplicável.
            </p>
            <p>
              Quando houver compra de produtos ou serviços, parte do processamento
              pode ocorrer por meio de plataformas terceiras de pagamento, que possuem
              suas próprias políticas de privacidade e termos de uso.
            </p>

            <h2>4. Permissões do aplicativo</h2>
            <p>
              Para funcionar corretamente, o aplicativo pode solicitar permissões
              relacionadas ao acesso a arquivos do dispositivo, exclusivamente para
              permitir que o usuário selecione, importe, visualize e organize seus
              próprios documentos.
            </p>
            <p>
              O aplicativo não utiliza essas permissões para coleta indevida de dados
              pessoais nem para compartilhamento de arquivos com terceiros.
            </p>

            <h2>5. Uso das informações</h2>
            <p>As informações tratadas podem ser utilizadas para:</p>
            <p>
              melhorar a experiência de navegação no site, viabilizar o funcionamento
              do aplicativo, disponibilizar conteúdos e produtos digitais, processar
              acessos, analisar desempenho de páginas, oferecer suporte e cumprir
              obrigações legais e operacionais.
            </p>

            <h2>6. Compartilhamento de informações</h2>
            <p>
              Não vendemos dados pessoais dos usuários.
            </p>
            <p>
              Algumas informações podem ser processadas por serviços terceiros
              utilizados para hospedagem, análise de tráfego, marketing, pagamentos
              ou entrega de conteúdo, sempre dentro do necessário para a operação
              do site e dos produtos.
            </p>

            <h2>7. Cookies e tecnologias semelhantes</h2>
            <p>
              O site pode utilizar cookies e tecnologias semelhantes para melhorar
              a navegação, analisar métricas de acesso, lembrar preferências do usuário
              e apoiar campanhas de divulgação e performance.
            </p>

            <h2>8. Armazenamento e segurança</h2>
            <p>
              Adotamos medidas razoáveis de segurança para proteger as informações
              tratadas no site e nos serviços relacionados.
            </p>
            <p>
              No caso do aplicativo, os ebooks, PDFs e demais arquivos utilizados
              pelo usuário ficam armazenados localmente no dispositivo, de acordo
              com as permissões concedidas por ele.
            </p>
            <p>
              Ainda assim, nenhuma medida de segurança é absoluta, e o usuário também
              é responsável por proteger seu aparelho, suas credenciais e seus arquivos.
            </p>

            <h2>9. Links externos</h2>
            <p>
              O site e o aplicativo podem conter links para plataformas, páginas
              ou serviços de terceiros. Não somos responsáveis pelas práticas de
              privacidade, conteúdos ou políticas desses ambientes externos.
            </p>

            <h2>10. Público-alvo</h2>
            <p>
              O site e o aplicativo destinam-se ao público em geral e não são
              desenvolvidos especificamente para crianças.
            </p>

            <h2>11. Alterações nesta política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada a qualquer momento
              para refletir melhorias no site, no aplicativo, alterações legais
              ou ajustes operacionais. A versão mais atual estará sempre disponível
              nesta página.
            </p>

            <h2>12. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta Política de Privacidade, entre em contato
              pelo canal oficial informado no site ou junto ao produto.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}