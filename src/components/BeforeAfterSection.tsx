import React, { useState, useRef } from 'react';
import { useClinic } from '../context/ClinicContext';
import { BeforeAfterCase } from '../types/clinic';
import { CheckCircle2, Clock, AlertCircle, ArrowLeftRight, ChevronRight, ChevronLeft } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const { config, isRTL, scrollToBooking } = useClinic();
  const [activeCategory, setActiveCategory] = useState<'all' | 'veneers' | 'whitening' | 'implants' | 'orthodontics'>('all');
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  // Split-image slider ratio (0 to 100)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const filteredCases = config.beforeAfterCases.filter((c) =>
    activeCategory === 'all' ? true : c.category === activeCategory
  );

  const activeCase: BeforeAfterCase = filteredCases[activeCaseIndex] || filteredCases[0] || config.beforeAfterCases[0];

  const handlePointerMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 5), 95));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handlePointerMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const categories = [
    { id: 'all', labelAr: 'جميع الحالات', labelEn: 'All Cases' },
    { id: 'veneers', labelAr: 'ابتسامة هوليوود (فينير)', labelEn: 'Veneers' },
    { id: 'orthodontics', labelAr: 'تقويم الأسنان', labelEn: 'Orthodontics' },
    { id: 'implants', labelAr: 'زراعة الأسنان', labelEn: 'Implants' },
    { id: 'whitening', labelAr: 'تبييض الأسنان', labelEn: 'Whitening' },
  ];

  return (
    <section id="before-after" className="py-20 lg:py-28 bg-[#FAF9F5] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1F8A9B]" />
              <span>{isRTL ? 'معرض النتائج والتحولات' : 'Clinical Transformations'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {isRTL
                ? 'شاهد نتائج حقيقية لابتسامات مراجعينا قبل وبعد العلاج'
                : 'Witness Real Patient Smile Transformations Before & After'}
            </h2>
          </div>

          {/* Treatment Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-white rounded-2xl border border-slate-200 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  setActiveCaseIndex(0);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1F8A9B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isRTL ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* The Split Slider Main Stage */}
        <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Interactive Split-Image Drag Slider */}
            <div className="lg:col-span-7">
              <div
                ref={sliderContainerRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-900 shadow-lg"
              >
                {/* AFTER Image (Full background layer) */}
                <img
                  src={activeCase.afterImg}
                  alt={isRTL ? `بعد العلاج - ${activeCase.title}` : `After - ${activeCase.titleEn}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                  referrerPolicy="no-referrer"
                />

                {/* BEFORE Image (Clipped layer) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={activeCase.beforeImg}
                    alt={isRTL ? `قبل العلاج - ${activeCase.title}` : `Before - ${activeCase.titleEn}`}
                    className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
                    style={{
                      width: sliderContainerRef.current ? `${sliderContainerRef.current.clientWidth}px` : '100%',
                    }}
                    draggable={false}
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle darkening filter on Before image for authentic clinical contrast */}
                  <div className="absolute inset-0 bg-amber-950/15 pointer-events-none" />
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                  style={{ left: `calc(${sliderPos}% - 2px)` }}
                >
                  {/* Draggable Circle Handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1F8A9B] border-2 border-[#1F8A9B] cursor-grab active:cursor-grabbing">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Floating Labels */}
                <div className="absolute top-4 left-4 pointer-events-none bg-slate-950/85 backdrop-blur-md text-amber-200 border border-amber-500/30 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md">
                  {isRTL ? 'قبل: تصبغات وتكلسات (غير نظيف)' : 'Before: Stains & Tartar'}
                </div>
                <div className="absolute top-4 right-4 pointer-events-none bg-emerald-700/90 backdrop-blur-md text-white border border-emerald-400/40 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md">
                  {isRTL ? 'بعد: تنظيف وتبييض ناصع (نظيف)' : 'After: Clean & Radiant White'}
                </div>
              </div>

              {/* Slider instruction helper */}
              <div className="mt-3 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                <ArrowLeftRight className="w-3.5 h-3.5 text-[#1F8A9B]" />
                <span>{isRTL ? 'اسحب المقبض يميناً ويساراً لمقارنة النتيجة' : 'Drag the slider handle to compare before and after'}</span>
              </div>
            </div>

            {/* Case Details & Navigation */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isRTL ? activeCase.treatment : activeCase.treatmentEn}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 leading-tight">
                  {isRTL ? activeCase.title : activeCase.titleEn}
                </h3>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4">
                  <Clock className="w-4 h-4 text-[#1F8A9B]" />
                  <span>{isRTL ? `مدة الخطة العلاجية: ${activeCase.duration}` : `Duration: ${activeCase.durationEn}`}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {isRTL ? activeCase.notes : activeCase.notesEn}
                </p>

                {/* Disclaimer (Mandatory per specification) */}
                <div className="flex items-start gap-2 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 leading-normal mb-8">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    {isRTL
                      ? 'تنويه طبي: تختلف النتائج باختلاف الحالة الفردية وطبيعة العظم واللثة، ويتم وضع خطة علاج شخصية لكل مراجع بعد الفحص السريري والمسح ثلاثي الأبعاد.'
                      : 'Medical Disclaimer: Results vary by individual case, bone structure, and periodontal condition. A personalized plan is drafted following 3D scans.'}
                  </span>
                </div>
              </div>

              {/* Case Navigation Thumbnails */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {filteredCases.map((c, idx) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCaseIndex(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeCaseIndex === idx
                          ? 'w-8 bg-[#1F8A9B]'
                          : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Go to case ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => scrollToBooking()}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#1F8A9B] hover:bg-[#146471] rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  {isRTL ? 'احجز استشارة لحالتك' : 'Book For Your Case'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
