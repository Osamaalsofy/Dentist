export type Language = 'ar' | 'en';

export interface ClinicBrand {
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  licenseNumber: string;
  phone: string;
  whatsappNumber: string;
  email: string;
}

export interface ClinicTheme {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  accent: string;
  accentLight: string;
  bg: string;
  surface: string;
  ink: string;
}

export interface ClinicHero {
  badge: { ar: string; en: string };
  headline: { ar: string; en: string };
  subheadline: { ar: string; en: string };
  manImage: string;
  womanImage: string;
  statFloat: {
    number: string;
    label: { ar: string; en: string };
  };
  certifiedBadge: { ar: string; en: string };
}

export interface DentalService {
  id: string;
  title: string;
  titleEn: string;
  shortDesc: string;
  shortDescEn: string;
  icon: string;
  priceFrom: number;
  duration: string;
  durationEn: string;
  overview: string;
  overviewEn: string;
  steps: { ar: string; en: string }[];
  benefits: { ar: string; en: string }[];
  faqs: { q: { ar: string; en: string }; a: { ar: string; en: string } }[];
}

export interface DoctorProfile {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  specialty: string;
  specialtyEn: string;
  photo: string;
  bio: string;
  bioEn: string;
  experienceYears: number;
  education: { ar: string; en: string }[];
  languages: string[];
  accentColor: string;
  availableDays: { ar: string; en: string };
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  titleEn: string;
  treatment: string;
  treatmentEn: string;
  category: 'all' | 'veneers' | 'whitening' | 'implants' | 'orthodontics';
  duration: string;
  durationEn: string;
  beforeImg: string;
  afterImg: string;
  notes: string;
  notesEn: string;
}

export interface ClinicBranch {
  id: string;
  city: string;
  cityEn: string;
  name: string;
  nameEn: string;
  address: string;
  addressEn: string;
  phone: string;
  whatsapp: string;
  workingHours: { ar: string; en: string };
  googleMapsUrl: string;
  coordinates: { lat: number; lng: number };
}

export interface SymptomItem {
  id: string;
  label: string;
  labelEn: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  descriptionEn: string;
  recommendedServiceId: string;
  recommendedSpecialist: string;
  recommendedSpecialistEn: string;
}

export interface ClinicTechnology {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  tag: string;
  tagEn: string;
}

export interface ClinicTestimonial {
  id: string;
  patientName: string;
  patientNameEn: string;
  city: string;
  treatment: string;
  treatmentEn: string;
  rating: number;
  comment: string;
  commentEn: string;
  date: string;
}

export interface ClinicFaq {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: string;
}

export interface ClinicConfig {
  id: string;
  brand: ClinicBrand;
  theme: ClinicTheme;
  hero: ClinicHero;
  stats: {
    number: string;
    suffix?: string;
    label: { ar: string; en: string };
  }[];
  services: DentalService[];
  doctors: DoctorProfile[];
  beforeAfterCases: BeforeAfterCase[];
  branches: ClinicBranch[];
  symptoms: SymptomItem[];
  technologies: ClinicTechnology[];
  testimonials: ClinicTestimonial[];
  faqs: ClinicFaq[];
}

export interface AppointmentBooking {
  id: string;
  fullName: string;
  phone: string;
  branchId: string;
  serviceId: string;
  doctorId?: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'booked' | 'completed';
}
