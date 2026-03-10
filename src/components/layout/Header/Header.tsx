import Link from "next/link";
import { Container } from "@/src/components/ui/Container/Container";
import { siteConfig } from "@/src/config/site";

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header-inner">
        <Link href="/" className="site-logo">
          {siteConfig.name}
        </Link>

        <nav className="site-nav" aria-label="Navegação principal">
          <Link href="#benefits">Benefícios</Link>
          <Link href="#offer">Oferta</Link>
          <Link href="#faq">FAQ</Link>
        </nav>
      </Container>
    </header>
  );
}