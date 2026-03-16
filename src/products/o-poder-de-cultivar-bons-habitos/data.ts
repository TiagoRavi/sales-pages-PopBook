// src/products/o-poder-de-cultivar-bons-habitos/data.ts
import type { ProductData } from "@/src/types/product";

export const oPoderDeCultivarBonsHabitosData: ProductData = {
  id: "o-poder-de-cultivar-bons-habitos",
  slug: "o-poder-de-cultivar-bons-habitos",
  name: "O Poder de Cultivar Bons Hábitos",
  theme: "premium",
  checkoutPlatform: "hotmart",
  checkoutLinks: {
    hotmart: "https://pay.hotmart.com/K104915334V?off=6v82z0hx",
    kiwify: "https://pay.kiwify.com.br/zMq95u6",
  },

  hero: {
    id: "inicio",
    eyebrow: "E-book prático",
    headline: "Aprenda como construir bons hábitos e transformar pequenas ações em mudanças duradouras",
    subheadline:
      "Um guia direto ao ponto para entender como hábitos funcionam, substituir comportamentos ruins, ajustar gatilhos, organizar o ambiente e criar uma rotina mais consistente sem depender só de motivação.",

    mediaType: "image",
    image: {
      src: "/images/o-poder-de-cultivar-bons-habitos/mockup.png",
      alt: "E-book O Poder de Cultivar Bons Hábitos",
    },

    primaryCta: {
      label: "Quero criar bons hábitos",
      href: "#oferta",
    },
    secondaryCta: {
      label: "Ver a oferta",
      href: "#oferta",
    },
  },

  problem: {
    id: "problema",
    title: "Você tenta mudar, mas sempre acaba voltando aos mesmos padrões?",
    subtitle:
      "Na maioria das vezes, o problema não é falta de vontade. É falta de um processo claro, viável e repetível.",
    items: [
      {
        title: "Começos intensos e curta duração",
        description:
          "Muita gente tenta mudar tudo de uma vez, exige demais de si e perde consistência logo nos primeiros dias.",
      },
      {
        title: "Hábitos ruins muito automáticos",
        description:
          "Certos comportamentos parecem fortes porque envolvem repetição frequente, recompensa imediata e gatilhos constantes.",
      },
      {
        title: "Dependência de motivação",
        description:
          "Quando a mudança depende só de ânimo ou disciplina momentânea, qualquer dia difícil já compromete a rotina.",
      },
      {
        title: "Frustração e identidade enfraquecida",
        description:
          "Repetir padrões negativos afeta a autoestima, a confiança e a forma como a pessoa se enxerga.",
      },
    ],
  },

  solution: {
    id: "solucao",
    title: "Este e-book mostra como construir hábitos de forma progressiva e sustentável",
    subtitle: "Sem fórmulas mágicas. Sem exigir perfeição.",
    description:
      "Você vai entender o mecanismo dos hábitos, aprender a identificar gatilhos, substituir comportamentos improdutivos, facilitar a ação correta por meio do ambiente e aplicar estratégias práticas para transformar intenção em rotina.",

    points: [
      "Entenda como hábitos se formam e por que certos padrões se repetem.",
      "Identifique gatilhos, respostas e recompensas do comportamento.",
      "Substitua hábitos ruins por alternativas mais viáveis.",
      "Use pequenos comportamentos para reduzir resistência inicial.",
      "Ajuste o ambiente para facilitar a repetição do hábito certo.",
      "Aprenda técnicas práticas para instalar hábitos no dia a dia.",
      "Siga um plano progressivo de 8 semanas para consolidar a mudança.",
    ],

    image: {
      src: "/images/o-poder-de-cultivar-bons-habitos/mockup.png",
      alt: "Conteúdo do e-book O Poder de Cultivar Bons Hábitos",
    },
  },

  benefits: {
    id: "beneficios",
    title: "O que você vai aprender no conteúdo",
    subtitle:
      "Uma estrutura prática para trocar intenção vaga por comportamento consistente.",
    items: [
      {
        title: "Como hábitos realmente funcionam",
        description:
          "Entenda a lógica por trás da repetição de comportamentos e por que mudar não depende apenas de força de vontade.",
      },
      {
        title: "Como identificar gatilhos do comportamento",
        description:
          "Aprenda a observar situações, emoções e contextos que disparam hábitos bons ou ruins.",
      },
      {
        title: "Como substituir hábitos ruins",
        description:
          "Descubra como criar respostas alternativas mais simples e sustentáveis para ocupar o lugar do padrão antigo.",
      },
      {
        title: "Como começar pequeno e manter constância",
        description:
          "Veja por que ações menores têm mais chance de sobreviver aos dias difíceis e se tornar rotina.",
      },
      {
        title: "Como usar o ambiente a seu favor",
        description:
          "Organize estímulos, contexto e estrutura para facilitar a prática do hábito certo com menos atrito.",
      },
      {
        title: "Como lidar com recaídas sem desistir",
        description:
          "Aprenda a tratar interrupções como ajuste de processo, não como fracasso definitivo.",
      },
      {
        title: "Como fortalecer identidade e autoestima",
        description:
          "Entenda como hábitos positivos ajudam a construir uma imagem interna mais coerente com a vida que você quer viver.",
      },
      {
        title: "Como aplicar um plano de 8 semanas",
        description:
          "Tenha um caminho simples e progressivo para instalar, repetir e consolidar um novo hábito.",
      },
    ],
  },

  bonus: {
    id: "bonus",
    eyebrow: "Bônus exclusivo",
    title: "Receba também o app Pluma Digital Premium",
    subtitle:
      "Transforme seu celular Android em uma estante digital para organizar e ler seus ebooks com mais praticidade.",
    image: {
      src: "/images/7-passos-para-sair-das-dividas/mockup-pluma-digital.png",
      alt: "Mockup do app Pluma Digital Premium",
    },
    items: [
      {
        title: "App Pluma Digital Premium (APK)",
        description:
          "Baixe e instale no seu Android para acessar seus ebooks em um só lugar.",
        value: "Exclusivo para Android",
      },
      {
        title: "Leitor e organizador de PDFs",
        description:
          "Importe seus arquivos, organize sua biblioteca e retome a leitura de onde parou.",
        value: "Mais praticidade",
      },
      {
        title: "Manual de instalação incluso",
        description:
          "Receba o passo a passo para instalar e usar o aplicativo sem complicação.",
        value: "Guia prático",
      },
    ],
  },

  authority: {
    id: "autoridade",
    title: "Um guia para quem quer mudar a rotina com mais clareza e menos pressão",
    subtitle: "Conteúdo simples, aplicável e pensado para a vida real.",
    description:
      "O material foi estruturado para ajudar quem deseja construir hábitos melhores sem depender de radicalismo, sobrecarga ou motivação instável. A proposta é transformar mudança em processo: claro, gradual e sustentável.",
    highlights: [
      "Linguagem simples e direta.",
      "Aplicação prática no dia a dia.",
      "Foco em consistência e repetição.",
      "Estratégias para hábitos duradouros.",
    ],
  },

  testimonials: {
    id: "depoimentos",
    title: "Para quem este material é ideal",
    subtitle:
      "Este e-book foi pensado para pessoas que querem criar uma rotina melhor de forma realista.",
    items: [
      {
        name: "Quem começa e para no meio",
        role: "Perfil ideal",
        content:
          "Ideal para quem vive tentando mudar, mas perde ritmo por excesso de cobrança ou falta de método.",
        rating: 5,
      },
      {
        name: "Quem quer mais disciplina sem radicalismo",
        role: "Perfil ideal",
        content:
          "Perfeito para quem deseja desenvolver constância com passos pequenos, claros e possíveis de repetir.",
        rating: 5,
      },
      {
        name: "Quem quer trocar intenção por ação",
        role: "Perfil ideal",
        content:
          "Excelente para quem quer entender o mecanismo dos hábitos e aplicar técnicas práticas no dia a dia.",
        rating: 5,
      },
    ],
  },

  offer: {
    id: "oferta",
    eyebrow: "Oferta especial",
    title: "Tenha acesso ao e-book agora",
    description:
      "Receba o conteúdo completo em formato digital e comece hoje a construir hábitos mais fortes, consistentes e alinhados com a vida que você quer viver.",
    originalPrice: "De R$ 69,99",
    currentPrice: "Por R$ 32,99",
    bonusTitle: "O que você recebe",
    bonuses: [
      {
        title: "E-book O Poder de Cultivar Bons Hábitos",
        description:
          "O conteúdo principal com explicações práticas sobre formação, substituição e consolidação de hábitos.",
      },
      {
        title: "Estratégias para instalar novos comportamentos",
        description:
          "Técnicas aplicáveis para reduzir resistência, ajustar o ambiente e repetir o hábito certo com mais facilidade.",
      },
      {
        title: "Plano de 8 semanas",
        description:
          "Um caminho progressivo para transformar intenção em rotina de forma sustentável.",
      },
    ],
    cta: {
      label: "Quero meu acesso agora",
      href: "#",
    },
    notes: [
      "Acesso digital",
      "Liberação após confirmação do pagamento",
      "Compra segura",
    ],
  },

  guarantee: {
    id: "garantia",
    title: "Garantia de 7 dias",
    description:
      "Você pode acessar o material, avaliar com calma e, se entender que ele não faz sentido para o seu momento, solicitar o reembolso dentro do prazo de garantia.",
    sealText: "RISCO ZERO",
  },

  scarcity: {
    id: "escassez",
    title: "Quanto mais você adia, mais forte o padrão antigo pode ficar",
    description:
      "O maior custo não é o valor do e-book. É continuar preso a comportamentos que desgastam sua energia, sua disciplina e sua confiança.",
    warning:
      "Mudanças duradouras começam quando você troca intenção solta por ação repetida.",
  },

  faq: {
    id: "faq",
    title: "Perguntas frequentes",
    subtitle: "Tire suas dúvidas antes de finalizar sua compra.",
    items: [
      {
        question: "Como recebo o e-book?",
        answer:
          "Após a confirmação do pagamento, o acesso é liberado pela plataforma de checkout escolhida.",
      },
      {
        question: "Esse conteúdo é para iniciantes?",
        answer:
          "Sim. O material foi pensado para pessoas que querem entender e aplicar hábitos de forma simples, prática e progressiva.",
      },
      {
        question: "O e-book fala sobre hábitos ruins também?",
        answer:
          "Sim. O conteúdo mostra como identificar gatilhos, recompensas e respostas alternativas para substituir padrões negativos.",
      },
      {
        question: "Preciso mudar minha rotina inteira de uma vez?",
        answer:
          "Não. A proposta do material é justamente mostrar que mudanças sustentáveis costumam começar com ações pequenas e repetidas.",
      },
      {
        question: "O conteúdo traz um plano prático?",
        answer:
          "Sim. O e-book inclui uma estrutura progressiva para ajudar na construção de hábitos ao longo de 8 semanas.",
      },
    ],
  },

  finalCta: {
    id: "final",
    title: "Comece hoje a construir hábitos que trabalham a seu favor",
    description:
      "Você não precisa mudar tudo de uma vez. Precisa começar de um jeito que consiga repetir.",
    button: {
      label: "Quero criar bons hábitos",
      href: "#",
    },
    notes: [
      "Acesso imediato",
      "Garantia de 7 dias",
      "Conteúdo digital",
    ],
  },
};