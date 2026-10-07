import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { Camera, ShieldCheck, HeartPulse, Award, Check } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const { isRTL, scrollToBooking } = useClinic();
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const pillars = [
    {
      id: 'consultants',
      num: '01',
      icon: Award,
      title: {
        ar: 'كفاءات استشارية سعودية وزمالات عالمية',
        en: 'Saudi Board Consultants & International Fellowships',
      },
      desc: {
        ar: 'فريقنا الطبي يضم نخبة من الاستشاريين الحاصلين على البورد الأمريكي والبريطاني والسعودي، بخبرات تتجاوز 18 عاماً في علاج أدق الحالات المعقدة.',
        en: 'Our clinical faculty comprises consultants with American, British, and Saudi Board accreditations, leading complex rehabilitations for over 18 years.',
      },
      highlight: {
        ar: 'استشاريون معتمدون يشرفون شخصياً على كل خطوة علاجية',
        en: 'Board-certified consultants directly overseeing every procedure',
      },
      image: '/src/assets/images/clinic_interior_luxury_1791358566335.jpg',
    },
    {
      id: 'technology',
      num: '02',
      icon: Camera,
      title: {
        ar: 'تشخيص رقمي ثلاثي الأبعاد وعلاج بدون ألم',
        en: 'Painless 3D Digital Scans & Computer Guidance',
      },
      desc: {
        ar: 'وداعاً لطبعات المعجون المزعجة وإبر التخدير التقليدية؛ نوفر أحدث كاميرات المسح الضوئي iTero وليزر الأسنان المائي للراحة التامة.',
        en: 'Bid farewell to traditional paste impressions and painful needles; we utilize iTero optical scanners and water laser technology.',
      },
      highlight: {
        ar: 'محاكاة ثلاثية الأبعاد فورية للنتيجة قبل أن نبدأ بأي إجراء',
        en: 'Immediate 3D simulation of your smile before beginning',
      },
      image: '/src/assets/images/dental_scan_technology_1791358719900.jpg',
    },
    {
      id: 'sterilization',
      num: '03',
      icon: ShieldCheck,
      title: {
        ar: 'معايير تعقيم ألمانية من الفئة العليا Class B',
        en: 'Hospital-Grade German Class B Sterilization',
      },
      desc: {
        ar: 'نطبق أدق بروتوكولات مكافحة العدوى العالمية عبر أجهزة التعقيم الألمانية MELAG مع تتبع رقمي مشفر بالباركود لكل أداة لضمان أمان صحتك المطلق.',
        en: 'Strict infection-prevention protocols powered by German MELAG autoclaves with digital barcode tracking for each sterilized instrument.',
      },
      highlight: {
        ar: 'أدوات معقمة فردية ومغلفة تُفتح أمام ناظريك في كل زيارة',
        en: 'Individually barcoded sterile kits unsealed in front of you',
      },
      image: '/src/assets/images/clinic_interior_luxury_1791358566335.jpg',
    },
    {
      id: 'guarantee',
      num: '04',
      icon: HeartPulse,
      title: {
        ar: 'رعاية ممتدة وضمان جودة موثق',
        en: 'Documented Quality Guarantees & Continuing Care',
      },
      desc: {
        ar: 'نقدم ضمانات خطية موثقة على زرعات الأسنان وعدسات الفينير والتركيبات، مع جدول متابعات دورية مجانية للحفاظ على استدامة تألق ابتسامتك.',
        en: 'Written warranties on dental implants and porcelain veneers, coupled with complimentary scheduled follow-ups to maintain your radiance.',
      },
      highlight: {
        ar: 'برامج تقسيط 0% مرنة وموافقة تأمين فورية',
        en: 'Zero-interest installment options and instant insurance billing',
      },
      image: '/src/assets/images/smile_case_veneers_1791358700455.jpg',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 relative bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2">
            {isRTL ? 'لماذا يختارنا مراجعونا؟' : 'Why Discerning Patients Choose Us'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isRTL
              ? 'معايير استثنائية تصنع الفارق في تجربة علاج أسنانك'
              : 'Exceptional Standards Redefining Your Dental Experience'}
          </h2>
        </div>

        {/* Interactive Stack Layout: Sticky Visual on One Side, Interactive Step Stack on the Other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left / Visual Side: Sticky Dynamic Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-900 border border-slate-200/80">
              <img
                src={pillars[activeCardIndex].image}
                alt={isRTL ? pillars[activeCardIndex].title.ar : pillars[activeCardIndex].title.en}
                className="w-full h-full object-cover transition-all duration-700 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-white">
                <span className="text-xs font-bold text-[#C5A059] tracking-wider mb-1 block">
                  {pillars[activeCardIndex].num} · {isRTL ? 'معيار الجودة' : 'Standard'}
                </span>
                <p className="text-sm font-medium text-slate-100 leading-snug">
                  {isRTL ? pillars[activeCardIndex].highlight.ar : pillars[activeCardIndex].highlight.en}
                </p>
              </div>
            </div>
          </div>

          {/* Right / Content Side: Expandable Storytelling Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const isActive = activeCardIndex === idx;
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`cursor-pointer rounded-2xl transition-all duration-300 p-6 border ${
                    isActive
                      ? 'bg-white shadow-lg border-[#1F8A9B]/30 ring-1 ring-[#1F8A9B]/10'
                      : 'bg-white/60 hover:bg-white border-slate-200/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#1F8A9B] text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-[#1F8A9B]">
                            {pillar.num}
                          </span>
                          <span className="text-slate-300">·</span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900">
                            {isRTL ? pillar.title.ar : pillar.title.en}
                          </h3>
                        </div>
                        <p
                          className={`text-sm text-slate-600 leading-relaxed transition-all duration-300 ${
                            isActive ? 'mt-3 line-clamp-none' : 'line-clamp-2'
                          }`}
                        >
                          {isRTL ? pillar.desc.ar : pillar.desc.en}
                        </p>

                        {isActive && (
                          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1F8A9B]">
                              <Check className="w-3.5 h-3.5" />
                              <span>{isRTL ? pillar.highlight.ar : pillar.highlight.en}</span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                scrollToBooking();
                              }}
                              className="text-xs font-bold text-slate-700 hover:text-[#1F8A9B] transition-colors cursor-pointer"
                            >
                              {isRTL ? 'استشر طبيبك الآن ←' : 'Consult doctor now →'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
