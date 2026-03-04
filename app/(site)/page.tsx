import { PageWrapper } from "@/components/Common/PageWrapper";
import { getHome } from "@/data/loaders";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/components/homePage/HeroSection"), {
  ssr: true,
});
const AboutSection = dynamic(
  () => import("@/components/homePage/AboutSection"),
  { ssr: true },
);
const ServicesSection = dynamic(
  () => import("@/components/homePage/ServicesSection"),
  { ssr: true },
);
const Solutions = dynamic(
  () => import("@/components/homePage/SolutionsSection"),
  { ssr: true },
);
const ChooseUsSection = dynamic(
  () => import("@/components/homePage/WhyChooseUs"),
  { ssr: true },
);

export default async function Home() {
  const homePage = await getHome("en");
  const seo = homePage?.seo;
  return (
    <main>
      {seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.structuredData),
          }}
        />
      )}
      <PageWrapper>
        <HeroSection hero={homePage?.hero} />
        <AboutSection about={homePage?.AboutUs} />
        <ChooseUsSection chooseUs={homePage?.WhyChooseUs} />
        <ServicesSection ServiceSection={homePage?.ServiceSection} />
        <Solutions solutionsSection={homePage?.SolutionsSection} />
      </PageWrapper>{" "}
    </main>
  );
}
