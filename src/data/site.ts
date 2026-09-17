import contentJson from './content.json';

export type IconName =
  | 'architecture'
  | 'arrow'
  | 'baseball'
  | 'bus'
  | 'camera'
  | 'car'
  | 'clock'
  | 'family'
  | 'field'
  | 'indoor'
  | 'map-pin'
  | 'museum'
  | 'phone'
  | 'route'
  | 'tennis'
  | 'ticket'
  | 'track'
  | 'train'
  | 'walk'
  | 'water';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface QuickFact {
  label: string;
  value: string;
  detail: string;
  icon: IconName;
}

export interface Experience {
  title: string;
  text: string;
  icon: IconName;
  href: string;
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  short: string;
  description: string;
  highlights: string[];
  hours: string;
  closed: string;
  fee: string;
  bestFor: string;
  icon: IconName;
  image: string;
  imageLarge: string;
  alt: string;
  featured: boolean;
}

export interface Story {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
}

export interface RouteItem {
  id: string;
  name: string;
  duration: string;
  distance: string;
  recommendation: string;
  summary: string;
  icon: IconName;
  stops: string[];
}

export interface AccessItem {
  id: string;
  title: string;
  lead: string;
  steps: string[];
  icon: IconName;
}

export interface VisitTip {
  title: string;
  text: string;
  icon: IconName;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CreditItem {
  file: string;
  author: string;
  license: string;
  source: string;
  usage: string;
}

export interface SeoInfo {
  domain: string;
  fullName: string;
  shortName: string;
  city: string;
  region: string;
  country: string;
  countryCode: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  mapsUrl: string;
  mapsEmbed: string;
  govTourismUrl: string;
  nearbyLandmarks: string[];
}

export interface GoogleReview {
  rating: number;
  reviewCount: number;
  syncMonth: string;
  mapsUrl: string;
}

export interface VisitorService {
  id: string;
  title: string;
  lead: string;
  points: string[];
}

export interface TransportItem {
  id: string;
  mode: string;
  icon: IconName;
  lead: string;
  steps: string[];
}

export interface SeasonItem {
  id: string;
  name: string;
  period: string;
  weather: string;
  bestFor: string;
  bring: string;
  nature: string;
}

export interface ItineraryItem {
  id: string;
  title: string;
  duration: string;
  summary: string;
  stops: string[];
  forWhom?: string;
  pace?: string;
}

export interface ResponsibilityPrinciple {
  title: string;
  text: string;
}

export interface ResponsibilityInfo {
  intro: string;
  principles: ResponsibilityPrinciple[];
  scienceNote: string;
}

export interface HeritageItem {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
}

export interface SiteContent {
  site: {
    name: string;
    tagline: string;
    description: string;
    address: string;
    phone: string;
    latitude: number;
    longitude: number;
    area: string;
  };
  seo: SeoInfo;
  googleReview: GoogleReview;
  navigation: NavigationItem[];
  quickFacts: QuickFact[];
  experiences: Experience[];
  facilities: Facility[];
  stories: Story[];
  routes: RouteItem[];
  access: AccessItem[];
  visitTips: VisitTip[];
  faqs: FaqItem[];
  credits: CreditItem[];
  visitorServices: VisitorService[];
  transport: TransportItem[];
  seasons: SeasonItem[];
  itineraries: {
    personas: ItineraryItem[];
    general: ItineraryItem[];
  };
  responsibility: ResponsibilityInfo;
  heritage: HeritageItem[];
}

export const content = contentJson as SiteContent;
