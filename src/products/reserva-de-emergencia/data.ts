import type { ProductData } from "@/src/types/product";

export const reservaDeEmergenciaData: ProductData = {
  id: "reserva-de-emergencia",
  slug: "reserva-de-emergencia",
  name: "Do Zero à Segurança Financeira",
  theme: "premium",

  checkoutPlatform: "hotmart",

  checkoutLinks: {
    hotmart: "https://pay.hotmart.com/T104874277D?off=e9ar2ely",
    kiwify: "https://pay.kiwify.com.br/12q4Zzn",
  },

  hero: {
    id: "inicio",
    eyebrow: "E-book prático",
    headline:
      "Como Construir Sua Reserva de Emergência Mesmo Ganhando Entre R$2.000 e R$3.500 por Mês",
    subheadline:
      "Aprenda um método simples para organizar seu dinheiro, evitar dívidas e construir segurança financeira passo a passo.",
    mediaType: "image",
    image: {
      src: "/images/reserva-de-emergencia/mockup.png",
      alt: "Mockup do ebook Do Zero à Segurança Financeira",
    },
    primaryCta: {
      label: "Quero construir minha reserva",
      href: "#oferta",
    },
    secondaryCta: {
      label: "Ver a oferta",
      href: "#oferta",
    },
  },

  problem: {
    id: "problema",
    title: "O salário chega... e poucos dias depois já acabou?",
    subtitle:
      "Sem reserva financeira, qualquer imprevisto pode virar um problema.",
    items: [
      {
        title: "O dinheiro desaparece",
        description:
          "O salário chega, as contas são pagas e poucos dias depois o dinheiro já acabou.",
      },
      {
        title: "Imprevistos viram dívidas",
        description:
          "Problemas de saúde, consertos ou emergências acabam levando ao uso de cartão de crédito ou empréstimos.",
      },
      {
        title: "Dependência de crédito",
        description:
          "Sem dinheiro guardado, muitas pessoas acabam entrando em um ciclo de dívidas.",
      },
      {
        title: "Falta de organização",
        description:
          "A maioria das pessoas não sabe exatamente para onde seu dinheiro está indo todos os meses.",
      },
    ],
  },

  solution: {
    id: "solucao",
    title: "Existe uma solução simples: a reserva de emergência",
    subtitle:
      "Um sistema simples que protege sua vida financeira contra imprevistos.",
    description:
      "A reserva de emergência funciona como um colchão financeiro que protege você quando surgem despesas inesperadas. Mesmo com renda limitada, é possível começar a construir segurança financeira com organização e estratégia.",
    points: [
      "Entender exatamente para onde seu dinheiro está indo",
      "Eliminar gastos desnecessários",
      "Criar espaço no orçamento para economizar",
      "Guardar dinheiro mesmo com salário baixo",
      "Construir uma reserva financeira passo a passo",
    ],
    image: {
      src: "/images/reserva-de-emergencia/mockup1.png",
      alt: "Visual do conteúdo do ebook sobre reserva de emergência",
    },
  },

  benefits: {
    id: "beneficios",
    title: "O que você vai aprender neste ebook",
    subtitle:
      "Conteúdo simples, direto e aplicável no seu dia a dia financeiro.",
    items: [
      {
        title: "Controle financeiro real",
        description:
          "Aprenda a entender exatamente para onde seu dinheiro está indo todos os meses.",
      },
      {
        title: "Eliminar gastos desnecessários",
        description:
          "Descubra quais gastos estão consumindo sua renda sem você perceber.",
      },
      {
        title: "Guardar dinheiro mesmo ganhando pouco",
        description:
          "Estratégias práticas para começar a economizar mesmo com renda limitada.",
      },
      {
        title: "Definir sua meta de reserva",
        description:
          "Saiba exatamente quanto você precisa guardar para ter segurança financeira.",
      },
      {
        title: "Onde guardar sua reserva",
        description: "Descubra opções seguras para armazenar seu dinheiro.",
      },
      {
        title: "Plano de construção da reserva",
        description:
          "Um passo a passo para construir sua reserva ao longo dos próximos meses.",
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
              value: "27 páginas",
            },
          ],
        },

  authority: {
    id: "autoridade",
    title: "Um guia simples para quem quer organizar a vida financeira",
    subtitle: "Sem complicação, sem fórmulas mágicas.",
    description:
      "Este material foi criado para ajudar pessoas comuns a organizar suas finanças e começar a construir segurança financeira mesmo com salários mais modestos.",
    highlights: [
      "Linguagem simples e fácil de entender",
      "Estratégias aplicáveis na vida real",
      "Exemplos práticos de organização financeira",
      "Método progressivo de construção da reserva",
    ],
    image: {
      src: "/images/products/reserva-de-emergencia/mockup1.png",
      alt: "Apresentação do material Do Zero à Segurança Financeira",
    },
  },

  testimonials: {
    id: "depoimentos",
    title: "Para quem este ebook é ideal",
    subtitle: "Especialmente para quem quer sair do aperto financeiro.",
    items: [
      {
        name: "Quem vive apertado no fim do mês",
        role: "Perfil ideal",
        content:
          "Ideal para quem sente que o dinheiro acaba rápido e quer aprender a organizar melhor suas finanças.",
        rating: 5,
      },
      {
        name: "Quem não consegue guardar dinheiro",
        role: "Perfil ideal",
        content:
          "Perfeito para quem quer começar a economizar, mas nunca conseguiu criar esse hábito.",
        rating: 5,
      },
      {
        name: "Quem quer segurança financeira",
        role: "Perfil ideal",
        content:
          "Indicado para quem quer parar de depender de crédito e construir uma reserva para imprevistos.",
        rating: 5,
      },
    ],
  },

  offer: {
    id: "oferta",
    eyebrow: "Oferta especial",
    title: "Comece hoje a construir sua segurança financeira",
    description:
      "Tenha acesso imediato ao ebook digital e comece a organizar suas finanças agora.",
    originalPrice: "R$69,99",
    currentPrice: "R$19,99",
    bonusTitle: "O que você recebe",
    bonuses: [
      {
        title: "Ebook completo",
        description:
          "Guia passo a passo para criar sua reserva de emergência.",
      },
      {
        title: "Exemplos de orçamento",
        description:
          "Modelos simples para organizar suas finanças mensais.",
      },
      {
        title: "Planejamento da reserva",
        description:
          "Estrutura prática para construir sua reserva mês a mês.",
      },
    ],
    cta: {
      label: "Quero começar agora",
      href: "SEU_LINK_CHECKOUT",
    },
    notes: ["Acesso imediato", "Conteúdo digital", "Compra segura"],
  },

  guarantee: {
    id: "garantia",
    title: "Garantia de 7 dias",
    description:
      "Você pode acessar o material e avaliar com calma. Caso não fique satisfeito, poderá solicitar o reembolso dentro do prazo de garantia.",
    sealText: "RISCO ZERO",
  },

  scarcity: {
    id: "escassez",
    title: "Comece agora a construir sua segurança financeira",
    description:
      "Quanto antes você começar, mais rápido poderá construir sua reserva e ter tranquilidade financeira.",
    warning: "A decisão de mudar sua situação financeira começa agora.",
  },

  faq: {
    id: "faq",
    title: "Perguntas frequentes",
    subtitle: "Tire suas dúvidas antes de comprar.",
    items: [
      {
        question: "Como recebo o ebook?",
        answer:
          "Após a confirmação do pagamento, você receberá acesso imediato ao conteúdo digital.",
      },
      {
        question: "O conteúdo é para iniciantes?",
        answer:
          "Sim. O ebook foi feito especialmente para quem está começando a organizar suas finanças.",
      },
      {
        question: "Preciso ganhar muito para aplicar?",
        answer:
          "Não. O material foi desenvolvido exatamente para quem ganha entre R$2.000 e R$3.500.",
      },
      {
        question: "Em quanto tempo posso criar minha reserva?",
        answer:
          "Depende da sua renda e disciplina, mas o ebook apresenta um plano de construção progressiva.",
      },
    ],
  },

  finalCta: {
    id: "final",
    title: "Comece hoje a construir sua reserva de emergência",
    description:
      "Você não precisa esperar ganhar mais dinheiro para começar a organizar sua vida financeira.",
    button: {
      label: "Quero começar agora",
      href: "#",
    },
    notes: ["Acesso imediato", "Conteúdo digital", "Garantia de 7 dias"],
  },
};