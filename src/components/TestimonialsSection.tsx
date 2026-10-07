import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { config, isRTL } = useClinic();

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isRTL ? 'آراء وتجارب مراجعينا الموثقة' : 'Verified Patient Reviews'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isRTL ? 'قصص حقيقية وابتسامات غيرت حياة أصحابها' : 'Real Stories & Transformed Smiles'}
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            {isRTL
              ? 'أكثر من 24,000 مراجع وضعوا ثقتهم في مجمع اليقين عبر فروعه في الرياض وجدة والخبر.'
              : 'Over 24,000 patients have entrusted their smiles to Al-Yaqeen across KSA.'}
          </p>
        </div>

        {/* 3 Testimonial Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-slate-200" />
                </div>

                {/* Treatment Badge */}
                <div className="text-xs font-semibold text-[#1F8A9B] bg-[#1F8A9B]/10 px-3 py-1 rounded-lg inline-block mb-4">
                  {isRTL ? t.treatment : t.treatmentEn}
                </div>

                {/* Patient Comment */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{isRTL ? t.comment : t.commentEn}"
                </p>
              </div>

              {/* Patient Identity */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {isRTL ? t.patientName : t.patientNameEn}
                  </div>
                  <div className="text-slate-500 font-medium">
                    {t.city} · {t.date}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{isRTL ? 'مريض موثق' : 'Verified'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
