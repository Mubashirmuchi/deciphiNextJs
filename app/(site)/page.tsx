import { PageWrapper } from "@/components/Common/PageWrapper";
import AboutSection from "@/components/homePage/AboutSection";
import HeroSection from "@/components/homePage/HeroSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import Solutions from "@/components/homePage/SolutionsSection";
import ChooseUsSection from "@/components/homePage/WhyChooseUs";
import { getHome } from "@/data/loaders";

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
