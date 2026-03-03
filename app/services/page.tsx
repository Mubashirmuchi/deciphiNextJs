import ChooseUsSection from '@/components/homePage/WhyChooseUs'
import HeroSection from '@/components/servicePage/HeroSection'
import ProvideSection from '@/components/servicePage/ProviderSection'
import { getService } from '@/services/service';
const ServicePage  = async () => {
    const servicePage = await getService("en");

  return (
     <main>
        <HeroSection hero={servicePage?.hero}/>
        <ProvideSection provideSection={servicePage?.ProvideSection} />
        <ChooseUsSection chooseUs={servicePage?.WhyChooseUs}/>
      </main>
  )
}

export default ServicePage
