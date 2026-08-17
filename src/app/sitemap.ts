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
    "/terms",
    "/faq",
    "/blog",
    "/blog/umrah-preparation",
    "/blog/visa-documents",
    "/blog/flight-inquiry-tips",
    "/blog/europe-family-tour",
    "/blog/dubai-hotel-quote",
    "/blog/bus-ticket-inquiry",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
