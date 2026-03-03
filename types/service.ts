import { AccordianItem, BulletPoint, File } from "./home";

export interface ServiceHero {
  hero: {
    label: string;
    title: {
      titleLine1: string;
      titleLine2: string;
      titleLine3: string;
    };
    description: string;
    cardImage: File;
    BulletPointsInsideImage: string;
    title2: string;
    bottomDescription: {
      titleLine1: string;
      titleLine2: string;
    };
    BulletPoints2: BulletPoint[];
  };
}

export interface ProvideSection {
  id: number;
  title: string;
  label: string;
  description: string;
  accordian: AccordianItem[];
  cardImage: File;
}

