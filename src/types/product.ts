import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  BenefitsSection,
  TestimonialsSection,
  AuthoritySection,
  OfferSection,
  GuaranteeSection,
  ScarcitySection,
  FAQSection,
  FinalCTASection,
} from "@/src/types/section";

export type CheckoutPlatform = "hotmart" | "kiwify";

export type ProductData = {
  id: string;
  name: string;
  slug: string;
  checkoutLinks: {
    hotmart?: string;
    kiwify?: string;
  };
  checkoutPlatform?: CheckoutPlatform;
  theme?: "default" | "premium";

  hero?: HeroSection;
  problem?: ProblemSection;
  solution?: SolutionSection;
  benefits?: BenefitsSection;
  testimonials?: TestimonialsSection;
  authority?: AuthoritySection;
  offer?: OfferSection;
  guarantee?: GuaranteeSection;
  scarcity?: ScarcitySection;
  faq?: FAQSection;
  finalCta?: FinalCTASection;
};