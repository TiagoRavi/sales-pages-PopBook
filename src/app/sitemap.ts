import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.popbook.com.br";

  const pages = [
    "",
    "/economia-inteligente",
    "/do-zero-aos-10k-em-um-ano",
    "/reserva-de-emergencia",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}