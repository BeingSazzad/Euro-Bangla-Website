import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.eurobanglatravels.com";
  const routes = [
    "",
    "/flights",
    "/hajj-umrah",
    "/tours",
    "/hotels",
    "/bus",
    "/visa",
    "/inquiry",
    "/about",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
    "/faq",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
