import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { DentalService } from '../types/clinic';
import { ServiceModal } from './ServiceModal';
import {
  Award,
  Smile,
  Zap,
  Sun,
  Activity,
  Shield,
  Heart,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const {
    config,
    isRTL,
    selectedService,
    setSelectedService,
    scrollToBooking,
  } = useClinic();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#1F8A9B]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#1F8A9B]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#C5A059]" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-[#C5A059]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#1F8A9B]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#1F8A9B]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-rose-500" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#1F8A9B]" />;
    }
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F5] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2">
              {isRTL ? 'الخدمات العلاجية والتجميلية التخصصية' : 'Comprehensive Clinical Offerings'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {isRTL
                ? 'رعاية متكاملة لابتسامتك بأحدث المعايير الطبية العالمية'
                : 'Advanced Dental Solutions Crafted for Precision & Comfort'}
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-sm">
            {isRTL
              ? 'جميع الإجراءات تتم تحت إشراف نخبة من الاستشاريين السعوديين مع خيارات تقسيط ميسرة وبدون فوائد.'
              : 'All treatments supervised by board-certified consultants with 0% interest installment options.'}
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Icon & Category Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-100/70 px-2.5 py-1 rounded-md">
                    {isRTL ? `من ${service.priceFrom.toLocaleString()} ر.س` : `From ${service.priceFrom.toLocaleString()} SAR`}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#1F8A9B] transition-colors line-clamp-2">
                  {isRTL ? service.title : service.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {isRTL ? service.shortDesc : service.shortDescEn}
                </p>
              </div>

              {/* Bottom Action Area */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#1F8A9B] transition-colors">
                <span>{isRTL ? 'عرض التفاصيل والخطوات' : 'View Details & Steps'}</span>
                <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-[#1F8A9B] group-hover:text-white flex items-center justify-center transition-colors">
                  <ChevronIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Service CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-[#146471] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-1">
              {isRTL ? 'غير متأكد من الإجراء الأنسب لابتسامتك؟' : 'Uncertain which treatment is right for you?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {isRTL
                ? 'استخدم فاحص الأعراض التفاعلي أدناه أو احجز استشارة تشخيصية شاملة بالمسح ثلاثي الأبعاد.'
                : 'Use our interactive symptom checker below or book a comprehensive 3D scan consultation.'}
            </p>
          </div>
          <button
            onClick={() => scrollToBooking()}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-xs transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>{isRTL ? 'حجز موعد استشارة عامة' : 'Book General Consultation'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Render Service Modal if selected */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  );
};
