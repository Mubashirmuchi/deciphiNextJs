import { strapiFetch } from "@/lib/strapi";
import qs from "qs";

export async function getBlogPosts(
  page: number = 1,
  queryString?: string,
  category?: string,
  slug?: string
) {
  const filters: Record<string, unknown> = {};

  // 🔎 Search
  if (queryString) {
    filters.$or = [
      { title: { $containsi: queryString } },
      { description: { $containsi: queryString } },
    ];
  }

  // 🏷 Category filter
  if (category) {
    filters.category = {
      name: { $eqi: category },
    };
  }

  // ❌ Exclude current post (for related)
  if (slug) {
    filters.slug = { $ne: slug };
  }

  const query = qs.stringify(
    {
      filters,
      pagination: slug
        ? { page: 1, pageSize: 2 }
        : { page, pageSize: 8 },
      fields: ["title", "description", "slug", "publishedAt"],
      populate: {
        image: {
          fields: ["url", "alternativeText"],
        },
        category: {
          fields: ["name"],
        },
      },
      sort: ["createdAt:desc"],
    },
    { encodeValuesOnly: true }
  );

  const res = await strapiFetch(`/api/posts?${query}`);

  // ✅ If related mode and no data → fallback
  if (slug && (!res?.data || res.data.length === 0)) {
    const fallbackQuery = qs.stringify(
      {
        pagination: { page: 1, pageSize: 2 },
        fields: ["title", "description", "slug", "publishedAt"],
        populate: {
          image: { fields: ["url", "alternativeText"] },
          category: { fields: ["name"] },
        },
        sort: ["createdAt:desc"],
      },
      { encodeValuesOnly: true }
    );

    const fallbackRes = await strapiFetch(`/api/posts?${fallbackQuery}`);
    return fallbackRes?.data || [];
  }

  return slug ? res?.data || [] : res;
}

export async function getCategories() {
  const query = qs.stringify(
    {
      fields: ["name", "description"],
      sort: ["name:asc"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await strapiFetch(`/api/categories?${query}`);

  return res?.data || [];
}

export async function getBlogPostBySlug(
  slug: string,
  status: "draft" | "published" = "published"
) {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },

      populate: {
        image: {
          fields: ["url", "alternativeText", "name"],
        },
        category: {
          fields: ["name"],
        },
     
      },

      publicationState: status === "draft" ? "preview" : "live",
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await strapiFetch(`/api/posts?${query}`);

  return res?.data?.[0] || null;
}


export async function getService(locale: string) {
  const query = qs.stringify(
    {
      locale,
      populate: {
        hero: {
          populate: {
            cardImage: true,
          },
        },
        ProvideSection: {
          populate: {
            accordian: true,
            cardImage: true,
          },
        },

        WhyChooseUs: {
          populate: {
            BulletPointsInsideImage: {
              populate: true,
            },
            Cta: true,
            cardImage: true,
          },
        },
      },
    },
    {
      encodeValuesOnly: true, // important
    },
  );

  const res = await strapiFetch(`/api/service-page?${query}`);

  if (!res?.data && locale !== "en") {
    return getService("en"); // fallback
  }

  return res?.data || null;
}

export async function getHome(locale: string) {
  const query = qs.stringify(
    {
      locale,
      populate: {
       seo: {
        populate: {
          metaImage: true,
          openGraph: {
            populate: {
              ogImage: true,
            },
          },
          
        },
      },
        hero: {
          populate: {
            backgroundImage: true,
            backgroundVideo: true,
            Cta: true,
          },
        },
        AboutUs: {
          populate: {
            BulletPointsInsideImage: {
              populate: true,
            },
            Cta: true,
            cardImage: true,
            BulletPoints2: {
              populate: true,
            },
          },
        },
        WhyChooseUs: {
          populate: {
            BulletPointsInsideImage: {
              populate: true,
            },
            Cta: true,
            cardImage: true,
          },
        },

        ServiceSection: {
          populate: {
            card: {
              populate: {
                images: true,
              },
            },
          },
        },

        SolutionsSection: {
          populate: {
            BulletPointsInsideImage: {
              populate: true,
            },
            cardImage: true,
            accordian:true,
            
          },
        },
      },
    },
    {
      encodeValuesOnly: true, // important
    },
  );

  const res = await strapiFetch(`/api/home-page?${query}`);

  if (!res?.data && locale !== "en") {
    return getHome("en"); // fallback
  }

  return res?.data || null;
}