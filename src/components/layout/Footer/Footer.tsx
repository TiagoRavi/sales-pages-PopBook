import { Container } from "@/src/components/ui/Container/Container";
import { siteConfig } from "@/src/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer-content">
          <p>
            <strong>{siteConfig.companyName}</strong> © {new Date().getFullYear()}
          </p>
          <p>{siteConfig.supportEmail}</p>
        </div>
      </Container>
    </footer>
  );
}