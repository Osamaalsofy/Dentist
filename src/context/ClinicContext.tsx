import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClinicConfig, Language, DentalService, DoctorProfile, AppointmentBooking } from '../types/clinic';
import { alYaqeenClinicConfig } from '../config/clinic.config';

interface ClinicContextType {
  config: ClinicConfig;
  setConfig: (config: ClinicConfig) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  activeHeroGender: 'man' | 'woman';
  setActiveHeroGender: (gender: 'man' | 'woman') => void;
  selectedService: DentalService | null;
  setSelectedService: (service: DentalService | null) => void;
  selectedDoctor: DoctorProfile | null;
  setSelectedDoctor: (doctor: DoctorProfile | null) => void;
  prefilledBooking: { branchId?: string; serviceId?: string; doctorId?: string; patientName?: string; phone?: string };
  setPrefilledBooking: React.Dispatch<React.SetStateAction<{ branchId?: string; serviceId?: string; doctorId?: string; patientName?: string; phone?: string }>>;
  appointments: AppointmentBooking[];
  addAppointment: (booking: Omit<AppointmentBooking, 'id' | 'createdAt' | 'status'>) => AppointmentBooking;
  updateAppointmentStatus: (id: string, status: AppointmentBooking['status']) => void;
  isConfigDrawerOpen: boolean;
  setIsConfigDrawerOpen: (open: boolean) => void;
  isReceptionDashboardOpen: boolean;
  setIsReceptionDashboardOpen: (open: boolean) => void;
  toast: string | null;
  showToast: (message: string) => void;
  scrollToBooking: (prefills?: { branchId?: string; serviceId?: string; doctorId?: string }) => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

// Initial mock bookings for the SaaS reception dashboard
const initialBookings: AppointmentBooking[] = [
  {
    id: 'apt-101',
    fullName: 'عبدالله بن محمد القحطاني',
    phone: '0504128899',
    branchId: 'riyadh-olaya',
    serviceId: 'orthodontics',
    doctorId: 'dr-saud',
    preferredDate: '2026-10-12',
    preferredTime: '18:00',
    notes: 'استشارة لتقويم إنفزلاين الشفاف',
    createdAt: '2026-10-07T08:15:00Z',
    status: 'booked',
  },
  {
    id: 'apt-102',
    fullName: 'منيرة عبدالعزيز الشمري',
    phone: '0558912345',
    branchId: 'jeddah-rawdah',
    serviceId: 'veneers',
    doctorId: 'dr-reem',
    preferredDate: '2026-10-14',
    preferredTime: '17:30',
    notes: 'استفسار عن تصميم ابتسامة هوليوود E-Max',
    createdAt: '2026-10-07T09:20:00Z',
    status: 'contacted',
  },
  {
    id: 'apt-103',
    fullName: 'خالد بن ناصر الدوسري',
    phone: '0547788112',
    branchId: 'khobar-corniche',
    serviceId: 'implants',
    doctorId: 'dr-faisal',
    preferredDate: '2026-10-15',
    preferredTime: '19:00',
    notes: 'زراعة فورية للضرس العلوي',
    createdAt: '2026-10-07T10:05:00Z',
    status: 'new',
  },
];

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ClinicConfig>(alYaqeenClinicConfig);
  const [language, setLanguage] = useState<Language>('ar');
  const [activeHeroGender, setActiveHeroGender] = useState<'man' | 'woman'>('man');
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorProfile | null>(null);
  const [prefilledBooking, setPrefilledBooking] = useState<{
    branchId?: string;
    serviceId?: string;
    doctorId?: string;
    patientName?: string;
    phone?: string;
  }>({});
  const [appointments, setAppointments] = useState<AppointmentBooking[]>(initialBookings);
  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState<boolean>(false);
  const [isReceptionDashboardOpen, setIsReceptionDashboardOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language, isRTL]);

  // Sync CSS theme variables when config changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', config.theme.primary);
    root.style.setProperty('--primary-dark', config.theme.primaryDark);
    root.style.setProperty('--primary-light', config.theme.primaryLight);
    root.style.setProperty('--accent', config.theme.accent);
    root.style.setProperty('--accent-light', config.theme.accentLight);
    root.style.setProperty('--bg', config.theme.bg);
  }, [config]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const addAppointment = (booking: Omit<AppointmentBooking, 'id' | 'createdAt' | 'status'>) => {
    const newApt: AppointmentBooking = {
      ...booking,
      id: `apt-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    setAppointments((prev) => [newApt, ...prev]);
    return newApt;
  };

  const updateAppointmentStatus = (id: string, status: AppointmentBooking['status']) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status } : apt))
    );
  };

  const scrollToBooking = (prefills?: { branchId?: string; serviceId?: string; doctorId?: string }) => {
    if (prefills) {
      setPrefilledBooking((prev) => ({ ...prev, ...prefills }));
    }
    const elem = document.getElementById('booking-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ClinicContext.Provider
      value={{
        config,
        setConfig,
        language,
        setLanguage,
        isRTL,
        activeHeroGender,
        setActiveHeroGender,
        selectedService,
        setSelectedService,
        selectedDoctor,
        setSelectedDoctor,
        prefilledBooking,
        setPrefilledBooking,
        appointments,
        addAppointment,
        updateAppointmentStatus,
        isConfigDrawerOpen,
        setIsConfigDrawerOpen,
        isReceptionDashboardOpen,
        setIsReceptionDashboardOpen,
        toast,
        showToast,
        scrollToBooking,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
