import type { MetadataRoute } from "next";

const BASE_URL = "https://bizdoctor.me/";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  return staticRoutes;
}
