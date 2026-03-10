import { ProductData } from "@/src/types/product";

export const economiaInteligenteData: ProductData = {
  id: "economia-inteligente",
  name: "Economia Inteligente",
  slug: "economia-inteligente",
  checkoutUrl: "https://pay.hotmart.com/H104814335H?checkoutMode=2&off=59soxnxj",
  theme: "premium",

  hero: {
    id: "hero",
    eyebrow: "E-book premium de finanças pessoais",
    headline: "Organize seu dinheiro com clareza e construa uma vida financeira mais segura",
    subheadline:
      "Aprenda um método simples para controlar gastos, sair das dívidas, montar sua reserva e começar a investir com mais confiança.",
    mediaType: "image",
    image: {
      src: "/images/economia-inteligente/mockup.png",
      alt: "Mockup do produto Economia Inteligente",
    },
    primaryCta: {
      label: "Quero começar agora",
      href: "#offer",
    },
    secondaryCta: {
      label: "Ver benefícios",
      href: "#benefits",
    },
  },

  problem: {
    id: "problem",
    title: "Você sente que o dinheiro some e nunca sobra no final do mês?",
    subtitle: "Isso acontece com mais gente do que parece.",
    items: [
      {
        title: "Falta de controle",
        description: "Você ganha, paga contas e no fim não sabe para onde o dinheiro foi.",
      },
      {
        title: "Dificuldade para sair das dívidas",
        description: "Mesmo tentando se organizar, os juros e imprevistos continuam pesando.",
      },
      {
        title: "Medo de investir errado",
        description: "Você quer começar, mas sente insegurança e não sabe por onde ir.",
      },
    ],
  },

  solution: {
    id: "solution",
    title: "A solução é criar uma base financeira simples, prática e sustentável",
    subtitle: "Sem complicação e sem fórmulas difíceis.",
    description:
      "O Economia Inteligente mostra um passo a passo claro para você organizar sua vida financeira, reduzir desperdícios e construir segurança com consistência.",
    points: [
      "Método fácil de aplicar",
      "Pensado para iniciantes",
      "Foco em clareza e ação prática",
      "Estrutura para curto, médio e longo prazo",
    ],
    image: {
      src: "/images/economia-inteligente/mockup.png",
      alt: "Método Economia Inteligente",
    },
  },

  benefits: {
    id: "benefits",
    title: "O que você vai aprender",
    subtitle: "Conteúdo direto ao ponto para aplicar na sua rotina.",
    items: [
      {
        title: "Controlar seus gastos",
        description: "Descubra para onde seu dinheiro está indo e elimine desperdícios.",
      },
      {
        title: "Criar um orçamento simples",
        description: "Monte uma organização financeira leve e funcional.",
      },
      {
        title: "Sair das dívidas",
        description: "Aprenda estratégias práticas para recuperar o controle.",
      },
      {
        title: "Montar sua reserva",
        description: "Crie proteção contra imprevistos sem depender de crédito.",
      },
      {
        title: "Começar a investir",
        description: "Entenda os primeiros passos com segurança e responsabilidade.",
      },
      {
        title: "Criar hábitos duradouros",
        description: "Construa disciplina financeira no longo prazo.",
      },
    ],
  },

  testimonials: {
    id: "testimonials",
    title: "Quem aplica, percebe a diferença",
    subtitle: "Depoimentos de quem já começou a organizar a vida financeira.",
    items: [
      {
        name: "Mariana S.",
        role: "Leitora",
        content: "Finalmente consegui entender meus gastos e parar de viver no sufoco.",
        rating: 5,
      },
      {
        name: "Carlos R.",
        role: "Leitor",
        content: "O material é simples, direto e me ajudou a montar minha reserva.",
        rating: 5,
      },
      {
        name: "Juliana M.",
        role: "Leitora",
        content: "Eu tinha medo de investir. Agora sei como dar os primeiros passos.",
        rating: 5,
      },
    ],
  },

  authority: {
    id: "authority",
    title: "Um material pensado para quem precisa de clareza, não de complicação",
    subtitle: "Conteúdo objetivo, aplicável e criado para gerar resultado real.",
    description:
      "O Economia Inteligente foi estruturado para transformar educação financeira em ação prática, com linguagem simples e foco no que realmente importa.",
    highlights: [
      "Didática acessível",
      "Aplicação imediata",
      "Ideal para iniciantes",
      "Foco em organização e segurança financeira",
    ],
  },

  offer: {
    id: "offer",
    eyebrow: "Oferta especial",
    title: "Comece hoje a transformar sua vida financeira",
    description:
      "Garanta agora seu acesso ao Economia Inteligente e receba um conteúdo prático para organizar sua rotina financeira com mais segurança.",
    originalPrice: "R$ 29,99",
    currentPrice: "R$ 19,99",
    bonusTitle: "Bônus inclusos na oferta",
    bonuses: [
      {
        title: "Checklist de organização financeira",
        description: "Um guia rápido para aplicar o método no dia a dia.",
        value: "R$ 9,90",
      },
      {
        title: "Plano inicial de metas financeiras",
        description: "Estrutura simples para acompanhar sua evolução.",
        value: "R$ 14,90",
      },
    ],
    cta: {
      label: "Comprar agora",
      href: "https://pay.hotmart.com/H104814335H?checkoutMode=2&off=59soxnxj",
    },
    notes: ["🔒 Compra segura", "⚡ Acesso imediato", "🛡️ Garantia de 7 dias"],
  },

  guarantee: {
    id: "guarantee",
    title: "Seu risco é zero",
    description:
      "Você tem 7 dias de garantia para conhecer o material. Se não fizer sentido para você, basta solicitar o reembolso dentro do prazo.",
    sealText: "Garantia incondicional de 7 dias",
  },

  scarcity: {
    id: "scarcity",
    title: "Condição promocional por tempo limitado",
    description:
      "O valor promocional e os bônus desta oferta podem sair do ar a qualquer momento.",
    warning: "Aproveite agora para garantir as melhores condições.",
  },

  faq: {
    id: "faq",
    title: "Perguntas frequentes",
    subtitle: "Tire suas dúvidas antes de garantir seu acesso.",
    items: [
      {
        question: "Como recebo o material?",
        answer: "O acesso é enviado por e-mail após a confirmação do pagamento.",
      },
      {
        question: "Posso acessar pelo celular?",
        answer: "Sim. Você pode acessar por celular, tablet ou computador.",
      },
      {
        question: "Esse conteúdo serve para iniciantes?",
        answer: "Sim. O material foi criado especialmente para quem está começando.",
      },
    ],
  },

  finalCta: {
    id: "final-cta",
    title: "Sua nova vida financeira pode começar hoje",
    description:
      "Garanta agora seu acesso e dê o primeiro passo para organizar seu dinheiro com mais clareza e tranquilidade.",
    button: {
      label: "Quero meu acesso agora",
      href: "https://pay.hotmart.com/H104814335H?checkoutMode=2&off=59soxnxj",
    },
    notes: ["Acesso imediato", "Compra segura", "Garantia de 7 dias"],
  },
};