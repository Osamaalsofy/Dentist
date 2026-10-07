import React from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Phone
} from 'lucide-react';

import coupleImage from '../assets/images/hero_saudi_couple_smile_1791366870952.jpg';

export const Hero: React.FC = () => {
  const {
    config,
    isRTL,
    scrollToBooking,
  } = useClinic();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-24 pb-16 lg:pt-28 lg:pb-20">
      {/* Full-Bleed Panoramic Background Showing Saudi Man and Woman Smiling Together */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src={coupleImage}
          alt={
            isRTL
              ? 'مجمع اليقين لطب وتقويم الأسنان التخصصي - ابتسامة طبيعية متناسقة'
              : 'Al-Yaqeen Specialized Dental & Orthodontic Complex'
          }
          className="w-full h-full object-cover object-[15%_center] sm:object-[22%_center] lg:object-[25%_center] filter brightness-[1.03] contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Soft atmospheric scrim allowing right-side background details to remain clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent lg:bg-gradient-to-l lg:from-slate-950/45 lg:via-slate-950/20 lg:to-transparent" />
      </div>

      {/* Main Hero Content Area - Pinned further to the user's RIGHT */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:pr-10 lg:pl-8 xl:pr-16 flex flex-col items-end justify-center">
        <div className="w-full max-w-xl lg:max-w-lg xl:max-w-xl mr-0 ml-auto text-right">
          {/* Accreditation Badge */}
          <div className="mb-5 flex justify-start rtl:justify-start ltr:justify-end">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-slate-100 text-xs sm:text-sm font-medium shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#1F8A9B]" />
              <span>{isRTL ? config.hero.badge.ar : config.hero.badge.en}</span>
            </div>
          </div>

          {/* Headline & Value Proposition */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-extrabold text-white leading-[1.18] tracking-tight mb-4 drop-shadow-md">
              {isRTL ? config.hero.headline.ar : config.hero.headline.en}
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed mb-7 font-normal drop-shadow-sm max-w-lg mr-0 ml-auto">
              {isRTL ? config.hero.subheadline.ar : config.hero.subheadline.en}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-start rtl:justify-start ltr:justify-end gap-4 mb-10">
              <button
                onClick={() => scrollToBooking()}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#1F8A9B] hover:bg-[#146471] rounded-2xl shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>{isRTL ? 'احجز استشارتك التخصصية' : 'Book Clinical Consultation'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <a
                href={`tel:${config.brand.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-white bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-slate-300" />
                <span dir="ltr">{config.brand.phone}</span>
              </a>
            </div>

            {/* Verified Clinical Assurances */}
            <div className="flex flex-wrap items-center justify-start rtl:justify-start ltr:justify-end gap-6 pt-6 border-t border-white/20 text-xs sm:text-sm text-slate-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F8A9B] shrink-0" />
                <span>{isRTL ? 'مسح 3D رقمي دقيق' : 'Sub-micron 3D Scans'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F8A9B] shrink-0" />
                <span>{isRTL ? 'استشاريون سعوديون معتمدون' : 'Saudi Board Consultants'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F8A9B] shrink-0" />
                <span>{isRTL ? 'تقسيط ميسر 0% (تابي وتمارا)' : '0% Installments'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
