import { strapiFetch } from "@/lib/strapi";
import qs from "qs";

/* ================= Service PAGE ================= */

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
