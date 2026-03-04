import { PageWrapper } from "@/components/Common/PageWrapper";
import { getHome } from "@/data/loaders";
import { Suspense } from "react";
import HeroSection from "@/components/homePage/HeroSection";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/homePage/AboutSection"));
const ServicesSection = dynamic(() => import("@/components/homePage/ServicesSection"));
const Solutions = dynamic(() => import("@/components/homePage/SolutionsSection"));
const ChooseUsSection = dynamic(() => import("@/components/homePage/WhyChooseUs"));
export const revalidate = 3600;

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
        <Suspense fallback={<div className="h-96" />}>
          <AboutSection about={homePage?.AboutUs} />
        </Suspense>
     
        <Suspense fallback={<div className="h-96" />}>
          <ServicesSection ServiceSection={homePage?.ServiceSection} />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Solutions solutionsSection={homePage?.SolutionsSection} />
        </Suspense>
           <Suspense fallback={<div className="h-96" />}>
          <ChooseUsSection chooseUs={homePage?.WhyChooseUs} />
        </Suspense>
      </PageWrapper>
    </main>
  );
}


