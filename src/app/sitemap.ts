import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vitaeterna.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...["about", "contact", "privacy", "terms", "editorial-policy"].map((path) => ({
      url: `${baseUrl}/${path}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
