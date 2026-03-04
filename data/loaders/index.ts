import { strapiFetch } from "@/lib/strapi";
import qs from "qs";

export async function getBlogPosts(
  page: number = 1,
  queryString?: string,
  category?: string,
  slug?: string
) {
  const filters: Record<string, unknown> = {};

  if (queryString) {
    filters.$or = [
      { title: { $containsi: queryString } },
      { description: { $containsi: queryString } },
    ];
  }

  if (category) {
    filters.category = {
      name: { $eqi: category },
    };
  }

  if (slug) {
    filters.slug = { $ne: slug };
  }

  const query = qs.stringify(
    {
      filters,
      pagination: slug
        ? { page: 1, pageSize: 2 }
        : { page, pageSize: 8 },
      fields: ["title", "description", "slug", "publishedAt","updatedAt"],
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

  const res = await strapiFetch(`/api/posts?${query}`, {
    next: { revalidate: 1800 }
  });

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

    const fallbackRes = await strapiFetch(`/api/posts?${fallbackQuery}`, {
      next: { revalidate: 1800 }
    });
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
  const res = await strapiFetch(`/api/categories?${query}`, {
    next: { revalidate: 3600 }
  });

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

  const res = await strapiFetch(`/api/posts?${query}`, {
    next: { revalidate: 1800 }
  });

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
      encodeValuesOnly: true,
    },
  );

  const res = await strapiFetch(`/api/service-page?${query}`, {
    next: { revalidate: 3600 }
  });

  if (!res?.data && locale !== "en") {
    return getService("en");
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
      encodeValuesOnly: true,
    },
  );

  const res = await strapiFetch(`/api/home-page?${query}`, {
    next: { revalidate: 3600 }
  });

  if (!res?.data && locale !== "en") {
    return getHome("en");
  }

  return res?.data || null;
}