export interface Language {
  code: 'en' | 'ne';
  name: string;
  flag: string;
}

export interface Translation {
  en: string;
  ne: string;
}

export interface ServiceTime {
  day: string;
  time: string;
  type: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface PaymentMethod {
  type: string;
  details: string;
  qrCode?: string;
}

export interface LanguageContext {
  language: Language;
  translations: Record<string, Translation>;
  toggleLanguage: () => void;
  t: (key: string) => string;
}