import { PageWrapper } from "@/components/Common/PageWrapper";
import AboutSection from "@/components/homePage/AboutSection";
import HeroSection from "@/components/homePage/HeroSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import Solutions from "@/components/homePage/SolutionsSection";
import ChooseUsSection from "@/components/homePage/WhyChooseUs";
import { getHome } from "@/data/loaders";

export default async function Home() {
    const homePage = await getHome("en");
  return (
    
        <main>
          <PageWrapper>
            <HeroSection hero={homePage?.hero} />
            <AboutSection about={homePage?.AboutUs}/>
            <ChooseUsSection chooseUs={homePage?.WhyChooseUs}/>
            <ServicesSection ServiceSection={homePage?.ServiceSection} />
            <Solutions solutionsSection={homePage?.SolutionsSection}/>
       </PageWrapper> </main>
    
  );
}
