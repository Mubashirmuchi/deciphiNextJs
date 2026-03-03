import AboutSection from "@/components/homePage/AboutSection";
import HeroSection from "@/components/homePage/HeroSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import ChooseUsSection from "@/components/homePage/WhyChooseUs";
import { getHome } from "@/services/home";

export default async function Home() {
    const homePage = await getHome("en");

  return (
    
        <main>
            <HeroSection hero={homePage?.hero} />
            <AboutSection about={homePage?.AboutUs}/>
            <ChooseUsSection chooseUs={homePage?.WhyChooseUs}/>
            <ServicesSection />
        </main>
    
  );
}
