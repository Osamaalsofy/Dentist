import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Calendar, Phone, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const { config, isRTL, scrollToBooking } = useClinic();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-r from-slate-900 via-[#146471] to-[#1F8A9B] text-white p-8 sm:p-14 lg:p-18 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#C5A059] text-xs font-semibold mb-6">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isRTL ? 'الخطوة الأولى نحو ثقة تدوم مدى الحياة' : 'A Lifetime of Natural Confidence'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              {isRTL
                ? 'ابدأ رحلة ابتسامتك الطبيعية المشرقة اليوم'
                : 'Start Your Real, Radiant Smile Journey Today'}
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-10 max-w-2xl">
              {isRTL
                ? 'استشر نخبة من الاستشاريين السعوديين المعتمدين في مجمع اليقين. تشخيص رقمي ثلاثي الأبعاد وخطة علاج ميسرة بضمان موثق.'
                : 'Consult board-certified dental specialists at Al-Yaqeen. Digital 3D scans, bespoke care plans, and guaranteed results.'}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToBooking()}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-2xl shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#1F8A9B]" />
                <span>{isRTL ? 'احجز موعد استشارتك الآن' : 'Schedule Consultation Now'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <a
                href={`tel:${config.brand.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-white/15 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">{config.brand.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
