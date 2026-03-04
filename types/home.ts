import { IconMap } from "@tabler/icons-react";

export interface CTA {
  id: number;
  text: string;
  url: string;
  isExternal: boolean;
}

export interface File {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: string | null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Title {
  titleLine1: string;
  titleLine2: string;
}

export interface BulletPoint {
  id: number;
  point: string;
}

export interface AccordianItem {
  id: number;
  title: string;
  // icon:string 
   icon: keyof typeof IconMap; 
  description: string;

}

export interface Card {
  id: number;
  title: string;
  description: string;
  images: File[];
}

// Hero Section

export interface HeroSection {
  hero: {
    title: {
        titleLine1: string;
        titleLine2: string;
        titleLine3: string;
    };
    description: string;
    backgroundVideo:File
    backgroundImage: File

    Cta: {
      text: string;
      url: string;
    };
  };
}

// About Us Section

export interface AboutUs {
  id: number;
  title: Title;
  label: string;
  description: string;
  BulletPointsInsideImage: BulletPoint[];
  Cta: CTA;
  cardImage: File;
  BulletPoints2: BulletPoint[];
}

// Why Choose Us Section

export interface WhyChooseUs {
  id: number;
  title: Title;
  label: string;
  description: string;
  Cta: CTA;
  cardImage: File;
  BulletPointsInsideImage: BulletPoint[];
}
// Services Section

export interface ServiceSection {
  id: number;
  label: string;
  title: Title;
  description: string;
  card: Card[];
}
// Solutions Section
export interface SolutionsSection {
  id: number;
  title: Title;
  label: string;
  description: string;
  cardImage: File;
  BulletPointsInsideImage: BulletPoint[];
  accordian: AccordianItem[];
}


