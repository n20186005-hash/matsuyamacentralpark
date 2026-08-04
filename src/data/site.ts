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
}

export const content = contentJson as SiteContent;
