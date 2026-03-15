import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.popbook.com.br";

  const pages = [
    "",
    "/economia-inteligente",
    "/do-zero-aos-10k-em-um-ano",
    "/reserva-de-emergencia",
  ];

  const blogPosts = [
    "/blog/reserva-de-emergencia",
    "/blog/como-economizar-dinheiro",
    "/blog/sair-das-dividas",
  ];

  const allPages = [...pages, ...blogPosts];

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}