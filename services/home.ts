import { strapiFetch } from "@/lib/strapi";
import qs from "qs";


/* ================= HOME PAGE ================= */

export async function getHome(locale: string) {
  const query = qs.stringify(
    {
      locale,
      populate: {
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
        WhyChooseUs:{
           populate: {
            BulletPointsInsideImage: {
              populate: true,
            },
            Cta: true,
            cardImage: true,
          
          },
        }
      },
    },
    {
      encodeValuesOnly: true, // important
    }
  );

  const res = await strapiFetch(`/api/home-page?${query}`);



  if (!res?.data && locale !== "en") {
    return getHome("en"); // fallback
  }

  return res?.data || null;

  
}

