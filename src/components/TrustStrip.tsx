import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { config, isRTL } = useClinic();

  const insurancePartners = [
    { nameAr: 'بوبا العربية', nameEn: 'Bupa Arabia', logoText: 'Bupa' },
    { nameAr: 'التعاونية للتأمين', nameEn: 'Tawuniya', logoText: 'Tawuniya' },
    { nameAr: 'ميدغلف للتأمين', nameEn: 'Medgulf', logoText: 'Medgulf' },
    { nameAr: 'ملاذ للتأمين', nameEn: 'Malath', logoText: 'Malath' },
    { nameAr: 'تكافل الراجحي', nameEn: 'Al Rajhi Takaful', logoText: 'AlRajhi' },
  ];

  return (
    <section className="py-12 border-y border-slate-200/80 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Numerical Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200/60">
          {config.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-mono tabular-nums">
                {stat.number}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-600 max-w-[180px]">
                {isRTL ? stat.label.ar : stat.label.en}
              </span>
            </div>
          ))}
        </div>

        {/* Partners & Accreditations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#1F8A9B]" />
            <span>{isRTL ? 'معتمدون لدى كبرى شركات التأمين والهيئات الصحية' : 'Accredited by Leading Insurance & Health Bodies'}</span>
          </div>

          {/* Insurance Brand Marks */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {insurancePartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 text-slate-700 font-bold text-xs sm:text-sm tracking-wide bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1F8A9B]" />
                <span>{isRTL ? partner.nameAr : partner.nameEn}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
