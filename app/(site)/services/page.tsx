import { PageWrapper } from '@/components/Common/PageWrapper';
import ChooseUsSection from '@/components/homePage/WhyChooseUs'
import HeroSection from '@/components/servicePage/HeroSection'
import ProvideSection from '@/components/servicePage/ProviderSection'
import { getService } from '@/data/loaders';
const ServicePage  = async () => {
    const servicePage = await getService("en");

  return (
     <main>
      <PageWrapper>
        <HeroSection hero={servicePage?.hero}/>
        <ProvideSection provideSection={servicePage?.ProvideSection} />
        <ChooseUsSection chooseUs={servicePage?.WhyChooseUs}/>
    </PageWrapper>  </main>
  )
}

export default ServicePage
