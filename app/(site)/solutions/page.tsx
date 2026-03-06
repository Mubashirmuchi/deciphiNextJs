// import CyberHero from '@/components/servicePage/DetailPage'
// import WayfinderSection from '@/components/servicePage/Detaipagesection2'
// import ServicesGrid from '@/components/servicePage/Servicestypes'
// import React from 'react'

// const Page = () => {
//   return (
//     <div>
//       <CyberHero/>
//       <WayfinderSection/>
//       <ServicesGrid/>
//     </div>
//   )
// }

// export default Page


import { PageWrapper } from '@/components/Common/PageWrapper';
// import ChooseUsSection from '@/components/homePage/WhyChooseUs'
import ConsultingPage from '@/components/servicePage/HeroSection'
// import ProvideSection from '@/components/servicePage/ProviderSection'
// import { getService } from '@/data/loaders';
const ServicePage  = async () => {
    // const servicePage = await getService("en");

  return (
     <main>
      <PageWrapper>
        {/* <HeroSection hero={servicePage?.hero}/>
        <ProvideSection provideSection={servicePage?.ProvideSection} />
        <ChooseUsSection chooseUs={servicePage?.WhyChooseUs}/> */}
        <ConsultingPage/>
    </PageWrapper>  </main>
  )
}

export default ServicePage
