import AboutSection from "@/components/homePage/AboutSection";
import HeroSection from "@/components/homePage/HeroSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import Solutions from "@/components/homePage/SolutionsSection";
import ChooseUsSection from "@/components/homePage/WhyChooseUs";
import { getHome } from "@/services/home";

export default async function Home() {
    const homePage = await getHome("en");

// console.log(Object.keys(homePage))
  return (
    
        <main>
            <HeroSection hero={homePage?.hero} />
            <AboutSection about={homePage?.AboutUs}/>
            <ChooseUsSection chooseUs={homePage?.WhyChooseUs}/>
            <ServicesSection ServiceSection={homePage?.ServiceSection} />
            <Solutions solutionsSection={homePage?.SolutionsSection}/>
        </main>
    
  );
}
