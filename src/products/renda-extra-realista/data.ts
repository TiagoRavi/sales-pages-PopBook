// products/renda-extra-realista/data.ts
import type { ProductData } from "@/src/types/product";

export const rendaExtraRealistaData: ProductData = {
  id: "renda-extra-realista",
  slug: "renda-extra-realista",
  name: "Renda Extra Realista",
  theme: "premium",
  checkoutPlatform: "hotmart",
  checkoutLinks: {
    hotmart: "https://pay.hotmart.com/D104897464P?off=9w6ki85t",
    kiwify: "https://pay.kiwify.com.br/1brZLaR",
  },

  hero: {
    id: "inicio",
    eyebrow: "E-book prático",
    headline: "Aprenda como criar uma renda extra realista mesmo com pouco tempo, pouco dinheiro e uma rotina cheia",
    subheadline:
      "Um guia direto ao ponto para escolher a melhor renda extra para o seu perfil, começar sem depender de promessas fáceis e construir uma nova fonte de renda com consistência.",

    mediaType: "image",
    image: {
      src: "/images/renda-extra-realista/mockup1.png",
      alt: "E-book Renda Extra Realista",
    },

    primaryCta: {
      label: "Quero minha renda extra",
      href: "#oferta",
    },
    secondaryCta: {
      label: "Ver a oferta",
      href: "#oferta",
    },
  },

  problem: {
    id: "problema",
    title: "Você quer ganhar mais, mas parece que toda ideia de renda extra é complicada, cara ou irreal?",
    subtitle:
      "Muita gente não precisa de promessa milagrosa. Precisa de um caminho possível dentro da vida real.",
    items: [
      {
        title: "Promessas exageradas demais",
        description:
          "A internet está cheia de promessas de dinheiro rápido que não combinam com a realidade de quem já vive com tempo curto e orçamento apertado.",
      },
      {
        title: "Pouco tempo disponível",
        description:
          "Quem trabalha o dia inteiro geralmente só consegue testar algo à noite ou nos fins de semana, o que exige uma escolha mais inteligente.",
      },
      {
        title: "Medo de começar sem capital",
        description:
          "Muitas pessoas travam porque acreditam que precisam investir bastante para criar uma renda extra.",
      },
      {
        title: "Falta de direção prática",
        description:
          "Sem clareza sobre o que combina com sua rotina, suas habilidades e seu perfil, qualquer tentativa fica mais cansativa e mais fácil de abandonar.",
      },
    ],
  },

  solution: {
    id: "solucao",
    title: "Este e-book mostra como construir uma renda extra possível, simples e sustentável",
    subtitle: "Sem promessas de enriquecimento rápido. Sem atalhos irreais.",
    description:
      "Você vai entender o que é renda extra realista, como escolher a melhor opção para sua rotina, quanto é possível ganhar de forma prática, como começar com pouco dinheiro e como transformar pequenos ganhos em estabilidade ao longo do tempo.",

    points: [
      "Entenda a diferença entre renda extra real e promessa de dinheiro fácil.",
      "Escolha uma atividade compatível com sua rotina e seu perfil.",
      "Veja quanto dá para ganhar com números e simulações realistas.",
      "Aprenda como começar com pouco dinheiro ou até sem capital.",
      "Siga um plano prático de 90 dias para sair da ideia e chegar à primeira renda recorrente.",
      "Evite os riscos mais comuns, prejuízos, golpes e desgaste.",
      "Transforme renda extra em mais margem e estabilidade financeira.",
    ],

    image: {
      src: "/images/renda-extra-realista/mockup2.png",
      alt: "Conteúdo do e-book Renda Extra Realista",
    },
  },

  benefits: {
    id: "beneficios",
    title: "O que você vai aprender no conteúdo",
    subtitle:
      "Um material pensado para quem precisa de clareza, estratégia e execução possível.",
    items: [
      {
        title: "O que é renda extra realista",
        description:
          "Entenda por que renda extra não é dinheiro fácil, e sim trabalho adicional bem direcionado para criar uma nova fonte de renda.",
      },
      {
        title: "Como escolher a melhor opção para você",
        description:
          "Aprenda a considerar rotina, tempo disponível, habilidades e oportunidades antes de decidir por onde começar.",
      },
      {
        title: "Quanto dá para ganhar de verdade",
        description:
          "Veja simulações práticas e números mais próximos da realidade de quem está começando.",
      },
      {
        title: "Como começar sem depender de muito dinheiro",
        description:
          "Descubra formas de usar habilidades, tempo livre e recursos simples para dar os primeiros passos.",
      },
      {
        title: "Plano prático de 90 dias",
        description:
          "Tenha uma estrutura clara para sair da teoria, testar uma ideia, ajustar o processo e buscar renda recorrente.",
      },
      {
        title: "Como evitar os erros mais comuns",
        description:
          "Saiba como reduzir risco de frustração, desperdício de tempo, prejuízo e escolhas ruins.",
      },
      {
        title: "Como criar mais margem financeira",
        description:
          "Entenda como uma renda extra pode aliviar o orçamento, acelerar metas e aumentar sua tranquilidade.",
      },
      {
        title: "Como pensar no longo prazo",
        description:
          "Aprenda a enxergar pequenos ganhos consistentes como parte de uma estrutura financeira mais forte.",
      },
    ],
  },

  bonus: {
    id: "bonus",
    eyebrow: "Bônus exclusivo",
    title: "Receba também dois bônus para começar sua renda extra",
    subtitle:
        "Além do ebook principal, você recebe materiais práticos para sair da teoria e começar a aplicar imediatamente.",
    image: {
        src: "/images/7-passos-para-sair-das-dividas/mockup-pluma-digital.png",
        alt: "Bônus Renda Extra Realista",
    },
    items: [
        {
        title: "E-book 15 Ideias de Renda Extra para Começar Ainda Esta Semana",
        description:
            "Descubra 15 formas simples e acessíveis de gerar dinheiro extra mesmo com pouco tempo e pouco investimento.",
        value: "Guia prático",
        },
        {
        title: "App Pluma Digital Premium (APK)",
        description:
            "Transforme seu celular Android em uma estante digital para organizar e ler seus ebooks com mais praticidade.",
        value: "Exclusivo para Android",
        },
        {
        title: "Manual de instalação do aplicativo",
        description:
            "Receba um guia simples mostrando como instalar o app e organizar seus ebooks no celular.",
        value: "Passo a passo",
        },
    ],
    },

  authority: {
    id: "autoridade",
    title: "Um guia para quem quer ganhar mais sem cair em promessas fáceis",
    subtitle: "Conteúdo simples, aplicável e alinhado com a vida real.",
    description:
      "O material foi estruturado para ajudar pessoas comuns que precisam complementar a renda sem desmontar a própria rotina. A proposta é trocar excesso de promessa por clareza, planejamento simples e execução prática.",
    highlights: [
      "Linguagem simples e direta.",
      "Foco em expectativas realistas.",
      "Estratégias aplicáveis à rotina comum.",
      "Visão prática de renda extra e estabilidade.",
    ],
  },

  testimonials: {
    id: "depoimentos",
    title: "Para quem este material é ideal",
    subtitle:
      "Este e-book foi pensado para quem precisa aumentar a renda com os pés no chão.",
    items: [
      {
        name: "Quem quer começar, mas está travado",
        role: "Perfil ideal",
        content:
          "Ideal para quem quer gerar renda extra, mas sente que não sabe por onde começar nem em qual opção confiar.",
        rating: 5,
      },
      {
        name: "Quem tem pouco tempo e pouca margem para errar",
        role: "Perfil ideal",
        content:
          "Perfeito para quem trabalha muito, tem rotina apertada e precisa de algo possível de executar de forma progressiva.",
        rating: 5,
      },
      {
        name: "Quem quer construir uma nova fonte de renda de verdade",
        role: "Perfil ideal",
        content:
          "Excelente para quem quer parar de depender de promessas irreais e começar com uma estratégia mais concreta e sustentável.",
        rating: 5,
      },
    ],
  },

  offer: {
    id: "oferta",
    eyebrow: "Oferta especial",
    title: "Tenha acesso ao conteúdo agora",
    description:
      "Receba o e-book principal e o bônus prático para começar a construir sua renda extra com mais clareza, direção e ação.",
    originalPrice: "De R$ 69,99",
    currentPrice: "Por R$ 33,99",
    bonusTitle: "O que você recebe",
    bonuses: [
      {
        title: "E-book Renda Extra Realista",
        description:
          "O conteúdo principal com estratégia, escolha de atividade, simulações de ganho, início sem capital e plano de 90 dias.",
      },
      {
        title: "Bônus: 15 Ideias de Renda Extra para Começar Ainda Esta Semana",
        description:
          "Um guia complementar com ideias simples e práticas para sair da teoria e testar uma fonte de renda rapidamente.",
      },
      {
        title: "Estrutura para buscar renda recorrente",
        description:
          "Uma visão prática para transformar pequenos ganhos em consistência e mais estabilidade financeira.",
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
    title: "Quanto mais você adia, mais pressão financeira continua acumulando",
    description:
      "O maior custo não é o valor do e-book. É continuar dependendo só da renda principal enquanto contas, imprevistos e aperto seguem consumindo sua tranquilidade.",
    warning:
      "Uma renda extra realista começa pequena, mas pode mudar muito quando você começa com constância.",
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
          "Sim. O material foi pensado para pessoas que querem entender e começar uma renda extra de forma simples, prática e realista.",
      },
      {
        question: "Preciso ter dinheiro para começar?",
        answer:
          "Não necessariamente. O conteúdo mostra formas de começar com poucos recursos e até usando habilidades e recursos que você já possui.",
      },
      {
        question: "O ebook promete ganhos rápidos?",
        answer:
          "Não. A proposta do material é justamente mostrar uma visão realista, sem promessas de enriquecimento imediato.",
      },
      {
        question: "O bônus serve para quê?",
        answer:
          "O bônus foi criado para te ajudar a sair da teoria com ideias práticas que podem ser testadas ainda esta semana.",
      },
    ],
  },

  finalCta: {
    id: "final",
    title: "Comece agora a construir uma renda extra possível para a sua realidade",
    description:
      "Você não precisa de promessa milagrosa. Precisa de clareza, direção e o primeiro passo certo.",
    button: {
      label: "Quero minha renda extra",
      href: "#",
    },
    notes: [
      "Acesso imediato",
      "Garantia de 7 dias",
      "Conteúdo digital",
    ],
  },
};