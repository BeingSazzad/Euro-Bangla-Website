import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/checkout", "/wishlist", "/shop"],
    },
    sitemap: "https://www.eurobanglatravels.com/sitemap.xml",
  };
}
