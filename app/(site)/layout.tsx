import {Header} from "@/components/Navbar";
import Footer from "@/components/Common/Footer";
import { getHome } from "@/data/loaders";

export async function generateMetadata() {
  const data = await getHome("en");
  const seo = data?.seo;

  return {
    metadataBase: new URL("https://deciphi.com"),
    title: seo?.metaTitle || "Deciphi - Cybersecurity Consulting",
    description: seo?.metaDescription || "Cybersecurity Consulting and Training | Qatar",
    keywords: seo?.keywords,
    robots: seo?.metaRobots || "index, follow",
    alternates: {
      canonical: seo?.canonicalURL || "https://deciphi.com/",
    },
    openGraph: {
      title: seo?.openGraph?.ogTitle || seo?.metaTitle,
      description: seo?.openGraph?.ogDescription || seo?.metaDescription,
      url: seo?.openGraph?.ogUrl || "https://deciphi.com/",
      type: seo?.openGraph?.ogType || "website",
      images: seo?.openGraph?.ogImage?.url
        ? [
            {
              url: seo.openGraph.ogImage.url,
              width: seo.openGraph.ogImage.width,
              height: seo.openGraph.ogImage.height,
              alt: seo.openGraph.ogImage.alternativeText || "Deciphi Cyber Security",
            },
          ]
        : [],
      locale: "en_US",
      siteName: "Deciphi",
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.openGraph?.ogTitle || seo?.metaTitle,
      description: seo?.openGraph?.ogDescription || seo?.metaDescription,
      images: seo?.openGraph?.ogImage?.url ? [seo.openGraph.ogImage.url] : [],
    },
  };
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}