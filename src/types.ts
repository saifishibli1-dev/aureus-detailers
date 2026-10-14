export type PageId = 'home' | 'services' | 'about' | 'gallery' | 'pricing' | 'contact' | 'book';

export type CarSegment = 'coupe' | 'sedan' | 'suv';

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  warranty: string;
  recommendedFor: string;
  startingPrice: {
    coupe: number;
    sedan: number;
    suv: number;
  };
  features: string[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  image: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  prices: {
    coupe: number;
    sedan: number;
    suv: number;
  };
  turnaroundTime: string;
  warrantyYears: number | string;
  includes: string[];
  bestSuited: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  vehicle: string;
  category: 'ppf' | 'ceramic' | 'correction' | 'interior';
  categoryLabel: string;
  location: string;
  hoursSpent: number;
  paintDepthBefore?: string;
  paintDepthAfter?: string;
  glossUnits?: string;
  summary: string;
  image: string;
  beforeImage?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  carMakeModel: string;
  carSegment: CarSegment;
  selectedService: string;
  preferredDate: string;
  preferredTimeSlot: string;
  pickupRequired: boolean;
  notes: string;
}
