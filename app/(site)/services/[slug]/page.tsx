import HeroSection from "@/components/Common/SeriveDetailedPage/HeroSection";
import BenefitsSection from "@/components/Common/SeriveDetailedPage/BenefitsSection";
import ServicesGrid from "@/components/Common/SeriveDetailedPage/ServicesGrid";
import { consultingPage } from "@/data/services/consulting";
import { penetrationPage } from "@/data/services/penetration";
import { awarenessPage } from "@/data/services/training";
import { integrationPage } from "@/data/services/integration";
import { otSecurityPage } from "@/data/services/ot";
import { cloudSecurityPage } from "@/data/services/cloud";
import { notFound } from "next/navigation";

const servicePages: Record<string, any> = {
  consulting: consultingPage,
  penetration: penetrationPage,
  training: awarenessPage,
  integration: integrationPage,
  ot: otSecurityPage,
  cloud: cloudSecurityPage,
};

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const servicePage = servicePages[slug];

  if (!servicePage) {
    notFound();
  }

  return (
    <>
      <HeroSection {...servicePage.hero} />
      <BenefitsSection
        title={servicePage.benefits.title}
        description={servicePage.benefits.description}
        features={servicePage.benefits.features}
      />
      <ServicesGrid services={servicePage.services} />
    </>
  );
}

