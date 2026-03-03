export interface CTA {
  id: number;
  text: string;
  url: string;
  isExternal: boolean;
}

export interface Image {
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

// Hero Section

// About Us Section

export interface AboutUs {
  id: number;
  title: Title;
  label: string;
  description: string;
  BulletPointsInsideImage: BulletPoint[];
  Cta: CTA;
  cardImage: Image;
  BulletPoints2: BulletPoint[];
}

export interface WhyChooseUs {
  id: number;
  title: Title;
  label: string;
  description: string;
  Cta: CTA;
  cardImage: Image;
  BulletPoint: BulletPoint[];
}
