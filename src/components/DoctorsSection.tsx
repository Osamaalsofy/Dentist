import React, { useState, useEffect, useRef } from 'react';
import { useClinic } from '../context/ClinicContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  Award,
  GraduationCap,
  Globe2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Clock
} from 'lucide-react';

export const DoctorsSection: React.FC = () => {
  const { config, isRTL, scrollToBooking } = useClinic();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const doctors = config.doctors;
  const currentDoctor = doctors[activeIndex] || doctors[0];

  // Auto-play timer (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % doctors.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered, doctors.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (isRTL) {
          setActiveIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
        } else {
          setActiveIndex((prev) => (prev + 1) % doctors.length);
        }
      } else if (e.key === 'ArrowLeft') {
        if (isRTL) {
          setActiveIndex((prev) => (prev + 1) % doctors.length);
        } else {
          setActiveIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [doctors.length, isRTL]);

  const handleBookWithDoctor = () => {
    scrollToBooking({ doctorId: currentDoctor.id });
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="doctors"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-24 lg:py-32 relative overflow-hidden bg-white border-t border-slate-200/80"
    >
      {/* Morphing Dynamic Background Accent Blob */}
      <motion.div
        animate={{
          backgroundColor: currentDoctor.accentColor || '#1F8A9B',
          x: activeIndex % 2 === 0 ? (isRTL ? 100 : -100) : isRTL ? -80 : 80,
          y: activeIndex % 2 === 0 ? -40 : 40,
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[130px] opacity-15 pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#1F8A9B]" />
              <span>{isRTL ? 'الكادر الطبي الاستشاري' : 'Consultant Medical Faculty'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {isRTL
                ? 'نخبة من الاستشاريين السعوديين والخبرات الأكاديمية'
                : 'Meet Our Renowned Board-Certified Consultants'}
            </h2>
          </div>

          {/* Manual Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + doctors.length) % doctors.length)}
              className="w-11 h-11 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous Doctor"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % doctors.length)}
              className="w-11 h-11 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next Doctor"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Innovative Full-Width Stage */}
        <div className="relative bg-[#FAF9F5]/90 rounded-[36px] border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden min-h-[580px] flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Center / Left: Cutout Doctor Portrait with 3D Depth & Stagger */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-3xl overflow-hidden glass-card p-2.5 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDoctor.id}
                    initial={{ opacity: 0, scale: 0.94, rotateY: 15, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.05, rotateY: -15, filter: 'blur(8px)' }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-100"
                  >
                    <img
                      src={currentDoctor.photo}
                      alt={isRTL ? currentDoctor.name : currentDoctor.nameEn}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Doctor Experience Chip */}
                    <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} glass-card px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 text-xs font-bold text-slate-800`}>
                      <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>
                        {isRTL ? `خبرة ${currentDoctor.experienceYears} عاماً` : `${currentDoctor.experienceYears}+ Yrs Experience`}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Masked Staggered Text Reveal */}
            <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDoctor.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full"
                >
                  {/* Role Title */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-slate-200/80 shadow-xs mb-3">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentDoctor.accentColor }} />
                    <span className="text-xs font-semibold text-slate-700">
                      {isRTL ? currentDoctor.role : currentDoctor.roleEn}
                    </span>
                  </div>

                  {/* Doctor Name */}
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {isRTL ? currentDoctor.name : currentDoctor.nameEn}
                  </h3>

                  {/* Specialty Line */}
                  <div className="text-sm sm:text-base font-semibold text-[#1F8A9B] mb-5">
                    {isRTL ? currentDoctor.specialty : currentDoctor.specialtyEn}
                  </div>

                  {/* Bio */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
                    {isRTL ? currentDoctor.bio : currentDoctor.bioEn}
                  </p>

                  {/* Education & Fellowships */}
                  <div className="space-y-2 mb-6 w-full">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {isRTL ? 'الاعتمادات والزمالات' : 'Credentials & Fellowships'}
                    </div>
                    {currentDoctor.education.map((edu, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <GraduationCap className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>{isRTL ? edu.ar : edu.en}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta: Languages & Available Days */}
                  <div className="flex flex-wrap items-center gap-6 py-4 border-t border-slate-200/80 w-full mb-8 text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Globe2 className="w-4 h-4 text-slate-400" />
                      <span>{isRTL ? 'اللغات: ' : 'Languages: '} {currentDoctor.languages.join(' · ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#1F8A9B]" />
                      <span>{isRTL ? 'أيام الاستشارات: ' : 'Clinic Days: '} {isRTL ? currentDoctor.availableDays.ar : currentDoctor.availableDays.en}</span>
                    </div>
                  </div>

                  {/* Action Button: Book with Dr. X */}
                  <button
                    onClick={handleBookWithDoctor}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1F8A9B] hover:bg-[#146471] rounded-2xl shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>
                      {isRTL
                        ? `احجز موعداً مع ${currentDoctor.name.split(' ')[0]} ${currentDoctor.name.split(' ')[1]}`
                        : `Book with ${currentDoctor.nameEn}`}
                    </span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* The Interactive Thumbnail Rail with Spring Motion & Active Enlargement */}
          <div className="mt-12 pt-8 border-t border-slate-200/80">
            <div className="text-xs font-semibold text-slate-500 mb-4">
              {isRTL ? 'اختر الاستشاري لعرض ملفه الطبي:' : 'Select a Consultant to View Profile:'}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {doctors.map((doc, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={doc.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative flex items-center gap-3 p-2.5 rounded-2xl transition-all duration-300 text-right cursor-pointer ${
                      isActive
                        ? 'bg-white shadow-lg border border-[#1F8A9B]/40 ring-2 ring-[#1F8A9B]/20 scale-[1.02]'
                        : 'bg-white/60 hover:bg-white border border-slate-200/80'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 relative bg-slate-100">
                      <img
                        src={doc.photo}
                        alt={isRTL ? doc.name : doc.nameEn}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {isRTL ? doc.name : doc.nameEn}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {isRTL ? doc.role.split(' ')[0] + ' ' + (doc.role.split(' ')[1] || '') : doc.roleEn}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
