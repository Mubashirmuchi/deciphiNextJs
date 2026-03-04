import { getBlogPosts } from "@/data/loaders";
import { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await getBlogPosts(1, "", "");

  const postEntries: MetadataRoute.Sitemap = data.map((post: { slug: string; updatedAt: string }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    // changeFrequency: "weekly",
    // priority: 0.8,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: "https://www.deciphi.com/services",
      lastModified: new Date(),
    },...postEntries
  ];
}
