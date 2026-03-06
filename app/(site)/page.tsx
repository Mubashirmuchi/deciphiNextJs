import { PageWrapper } from "@/components/Common/PageWrapper";
import { getHome } from "@/data/loaders";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Section from "@/components/Common/section";
import TrustMarquee from "@/components/Common/Patners";
import ProductShowcase from "@/components/Common/ProductShowcase";

const HeroSection = dynamic(() => import("@/components/homePage/HeroSection"));
const AboutSection = dynamic(
  () => import("@/components/homePage/AboutSection"),
);
const ServicesSection = dynamic(
  () => import("@/components/homePage/ServicesSection"),
);
const Solutions = dynamic(
  () => import("@/components/homePage/SolutionsSection"),
);
const ChooseUsSection = dynamic(
  () => import("@/components/homePage/WhyChooseUs"),
);
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
        <Section id="hero">
          <HeroSection hero={homePage?.hero} />
        </Section>
        <Suspense fallback={<div className="h-96" />}>
          <Section id="about">
            <AboutSection about={homePage?.AboutUs} />
          </Section>
        </Suspense>
        <ProductShowcase/>
        <TrustMarquee />
        <Suspense fallback={<div className="h-96" />}>
          <Section id="services">
            <ServicesSection ServiceSection={homePage?.ServiceSection} />
          </Section>
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Section id="solutions">
            <Solutions solutionsSection={homePage?.SolutionsSection} />
          </Section>
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <Section id="why-choose-us">
            <ChooseUsSection chooseUs={homePage?.WhyChooseUs} />
          </Section>
        </Suspense>
      </PageWrapper>
    </main>
  );
}
