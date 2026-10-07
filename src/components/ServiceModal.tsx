import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { DentalService } from '../types/clinic';
import {
  X,
  Clock,
  Coins,
  CheckCircle2,
  HelpCircle,
  Calendar,
  ShieldCheck,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface ServiceModalProps {
  service: DentalService;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const { isRTL, scrollToBooking } = useClinic();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleBookService = () => {
    onClose();
    scrollToBooking({ serviceId: service.id });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header Bar */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-slate-50 to-[#FAF9F5] border-b border-slate-200/80">
          <button
            onClick={onClose}
            className={`absolute top-5 ${isRTL ? 'left-5' : 'right-5'} p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-white transition-colors cursor-pointer`}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1F8A9B]" />
            <span>{isRTL ? 'تفاصيل الخدمة التخصصية' : 'Specialized Clinical Procedure'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {isRTL ? service.title : service.titleEn}
          </h3>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/70 shadow-xs">
              <Coins className="w-4 h-4 text-[#C5A059]" />
              <span>
                {isRTL ? `ابتداءً من ${service.priceFrom.toLocaleString()} ر.س` : `From ${service.priceFrom.toLocaleString()} SAR`}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200/70 shadow-xs">
              <Clock className="w-4 h-4 text-[#1F8A9B]" />
              <span>{isRTL ? service.duration : service.durationEn}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-7 max-h-[60vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {isRTL ? 'نبذة عن الإجراء الطبي' : 'Clinical Overview'}
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {isRTL ? service.overview : service.overviewEn}
            </p>
          </div>

          {/* Procedure Steps */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              {isRTL ? 'مراحل خطة العلاج' : 'Treatment Steps'}
            </h4>
            <div className="space-y-3">
              {service.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-[#1F8A9B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {isRTL ? step.ar : step.en}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Patient Benefits */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              {isRTL ? 'المزايا والضمانات' : 'Patient Benefits'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isRTL ? benefit.ar : benefit.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Procedure Specific FAQ */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-2">
                <HelpCircle className="w-4 h-4 text-amber-700" />
                <span>{isRTL ? service.faqs[0].q.ar : service.faqs[0].q.en}</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                {isRTL ? service.faqs[0].a.ar : service.faqs[0].a.en}
              </p>
            </div>
          )}
        </div>

        {/* Footer Action Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            {isRTL ? 'إغلاق' : 'Close'}
          </button>
          <button
            onClick={handleBookService}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#1F8A9B] hover:bg-[#146471] rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{isRTL ? 'طلب هذه الخدمة وحجز موعد' : 'Request Service & Book'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
