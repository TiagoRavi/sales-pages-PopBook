export type CTAButton = {
  label: string;
  href: string;
};

export type ImageData = {
  src: string;
  alt: string;
};

export type HeroSection = {
  id: string;
  eyebrow?: string;
  headline: string;
  subheadline: string;
  mediaType?: "image" | "video";
  image?: ImageData;
  videoUrl?: string;
  primaryCta?: CTAButton;
  secondaryCta?: CTAButton;
};

export type ProblemSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: {
    title: string;
    description: string;
  }[];
};

export type SolutionSection = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  points: string[];
  image?: ImageData;
};

export type BenefitsSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: {
    title: string;
    description: string;
  }[];
};

export type TestimonialsSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: {
    name: string;
    role?: string;
    content: string;
    avatar?: string;
    rating?: number;
  }[];
};

export type AuthoritySection = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  image?: ImageData;
};

export type OfferBonus = {
  title: string;
  description: string;
  value?: string;
};

export type OfferSection = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  originalPrice?: string;
  currentPrice: string;
  bonusTitle?: string;
  bonuses?: OfferBonus[];
  cta: CTAButton;
  notes?: string[];
};

export type GuaranteeSection = {
  id: string;
  title: string;
  description: string;
  sealText?: string;
};

export type ScarcitySection = {
  id: string;
  title: string;
  description: string;
  warning?: string;
};

export type FAQSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type FinalCTASection = {
  id: string;
  title: string;
  description?: string;
  button: CTAButton;
  notes?: string[];
};