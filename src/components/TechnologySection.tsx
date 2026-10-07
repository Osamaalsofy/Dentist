import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  Camera,
  Layers,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import receptionHallImg from '../assets/images/clinic_reception_hall_1791362593320.jpg';
import clinicInteriorImg from '../assets/images/clinic_interior_luxury_1791358566335.jpg';
import sterilizationLabImg from '../assets/images/clinic_sterilization_lab_1791362604243.jpg';
import dentalScanImg from '../assets/images/dental_scan_technology_1791358719900.jpg';

export const TechnologySection: React.FC = () => {
  const { config, isRTL, scrollToBooking } = useClinic();
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);

  const areas = [
    {
      id: 'reception',
      num: '01',
      nameAr: 'قاعة الاستقبال والردهة الترحيبية',
      nameEn: 'Grand Reception Atrium',
      tagAr: 'معايير الراحة الفندقية',
      tagEn: 'Luxury Sanctuary',
      image: receptionHallImg,
      descAr: 'تصميم معماري فاخر يعتمد على الحجر الطبيعي والإنارة غير المباشرة لتوفير بيئة استرخاء تامة تعزل ضوضاء المدينة وتبعث على الطمأنينة.',
      descEn: 'Architectural serenity combining warm limestone and indirect illumination for total relaxation.',
      featureAr: 'صالات ضيافة خاصة ومواقف سيارات محجوزة',
      featureEn: 'Executive lounges & dedicated valet parking',
    },
    {
      id: 'suites',
      num: '02',
      nameAr: 'أجنحة المسح الرقمي والكشف 3D',
      nameEn: '3D Scanning & Consultation Suites',
      tagAr: 'تقنيات المسح الضوئي المباشر',
      tagEn: 'Direct Optical 3D Scans',
      image: clinicInteriorImg,
      descAr: 'عيادات مجهزة بكراسي أسنان إيطالية مريحة وشاشات عرض تفاعلية لمراجعة خطة ابتسامتك مع الاستشاري بدقة متناهية وفي خصوصية تامة.',
      descEn: 'Private suites with ergonomic dental suites and displays for reviewing your treatment simulation.',
      featureAr: 'كاميرات iTero الرقمية بدقة ميكرونية فائقة',
      featureEn: 'iTero digital cameras with sub-micron precision',
    },
    {
      id: 'sterilization',
      num: '03',
      nameAr: 'مختبر التعقيم المركزي المعتمد',
      nameEn: 'Central Sterilization Laboratory',
      tagAr: 'معايير المستشفيات العالمية Class B',
      tagEn: 'Hospital-Grade German Class B',
      image: sterilizationLabImg,
      descAr: 'نظام تعقيم ألماني أوتوماتيكي من الفئة Class B مع تتبع مشفر بالباركود لكل أداة طبية لضمان أمان صحي وبيولوجي 100% لكل مراجع.',
      descEn: 'Automated Class B autoclaves with digital barcode instrument verification ensuring total sterility.',
      featureAr: 'أدوات مغلفة فردية تُفتح أمام المراجع في كل زيارة',
      featureEn: 'Individually sealed sterile kits unsealed in front of patient',
    },
    {
      id: 'laser-tech',
      num: '04',
      nameAr: 'وحدة جراحة الليزر والبيزوتومي',
      nameEn: 'Painless Laser & Piezosurgery Unit',
      tagAr: 'علاج بدون ألم أو وخز إبر',
      tagEn: 'Needle-Free Water Laser',
      image: dentalScanImg,
      descAr: 'ليزر مائي متطور يقطع الأنسجة الصلبة والرخوة بالماء والضوء بدون اهتزاز أو حرارة مع تسريع الالتئام والتعافي التام خلال 24-48 ساعة.',
      descEn: 'Advanced water laser eliminating drill vibrations and needles with fast healing within 24-48h.',
      featureAr: 'تسريع الالتئام وانعدام النزيف بعد الإجراءات',
      featureEn: 'Accelerated recovery with minimal bleeding',
    },
  ];

  const currentArea = areas[activeAreaIndex];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="technology" className="py-24 lg:py-32 bg-[#FAF9F5] border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#1F8A9B]" />
              <span>{isRTL ? 'بيئة العيادة والمعايير السريرية' : 'Clinic Environment & Standards'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {isRTL
                ? 'جولة سينمائية في أروقة ومرافق مجمع اليقين التخصصي'
                : 'A Cinematic Look Inside Al-Yaqeen Dental Facilities'}
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
            {isRTL
              ? 'صممت أجنحتنا الطبية بالكامل وفق معايير المستشفيات العالمية لعزل التوتر وضمان أعلى درجات الدقة والتعقيم.'
              : 'Engineered according to global hospital standards to ensure complete tranquility, surgical precision, and sterility.'}
          </p>
        </div>

        {/* Cinematic Architectural Showcase (Calm, Pure, No Video Buttons) */}
        <div className="relative rounded-[36px] overflow-hidden bg-slate-950 shadow-2xl border border-slate-800 text-white min-h-[560px] lg:min-h-[620px] flex flex-col justify-between mb-12">
          {/* Active Area Background with Smooth Crossfade & Subtle Cinematic Depth */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentArea.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={currentArea.image}
                alt={isRTL ? currentArea.nameAr : currentArea.nameEn}
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              {/* Deep Cinematic Contrast Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30 lg:bg-gradient-to-r lg:from-slate-950/95 lg:via-slate-950/70 lg:to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Top Status & Facility Label */}
          <div className="relative z-10 p-6 sm:p-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-[#1F8A9B]" />
              <span>{isRTL ? 'معتمد من وزارة الصحة وهيئة التخصصات الصحية' : 'Accredited by MOH & SCFHS'}</span>
            </div>

            <div className="text-xs font-mono text-slate-300 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 hidden sm:block">
              {currentArea.num} / 04
            </div>
          </div>

          {/* Core Content Overlay */}
          <div className="relative z-10 px-6 sm:px-12 py-8 max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-md bg-[#1F8A9B]/25 border border-[#1F8A9B]/40 text-xs font-semibold text-teal-200 mb-3 backdrop-blur-sm">
              {isRTL ? currentArea.tagAr : currentArea.tagEn}
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              {isRTL ? currentArea.nameAr : currentArea.nameEn}
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-normal">
              {isRTL ? currentArea.descAr : currentArea.descEn}
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#1F8A9B] shrink-0" />
              <span>{isRTL ? currentArea.featureAr : currentArea.featureEn}</span>
            </div>
          </div>

          {/* Interactive Cinematic Area Selector Bar at Bottom */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-white/10 bg-slate-950/90 backdrop-blur-md border-t border-white/10">
            {areas.map((area, idx) => {
              const isActive = activeAreaIndex === idx;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveAreaIndex(idx)}
                  className={`p-4 sm:p-5 text-right transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white/10 text-white border-b-2 border-[#1F8A9B]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-[#1F8A9B]">{area.num}</span>
                    <span className="text-[10px] text-slate-500 font-mono">0{idx + 1}</span>
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-slate-100 truncate">
                    {isRTL ? area.nameAr : area.nameEn}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Clinical Hardware Standards Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {config.technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-[#1F8A9B] bg-[#1F8A9B]/10 px-2.5 py-0.5 rounded-full">
                  {isRTL ? tech.tag : tech.tagEn}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                {isRTL ? tech.title : tech.titleEn}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isRTL ? tech.description : tech.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
