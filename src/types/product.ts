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

export type ProductData = {
  id: string;
  name: string;
  slug: string;
  checkoutUrl: string;
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