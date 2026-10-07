import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { SymptomItem } from '../types/clinic';
import { Stethoscope, AlertCircle, ArrowRight, ArrowLeft, CheckCircle2, Calendar } from 'lucide-react';

export const SymptomChecker: React.FC = () => {
  const { config, isRTL, scrollToBooking } = useClinic();
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>(config.symptoms[0]?.id || 'sharp-pain');

  const selectedSymptom: SymptomItem =
    config.symptoms.find((s) => s.id === selectedSymptomId) || config.symptoms[0];

  const matchingService = config.services.find(
    (s) => s.id === selectedSymptom.recommendedServiceId
  );

  const handleBookRecommended = () => {
    scrollToBooking({
      serviceId: selectedSymptom.recommendedServiceId,
    });
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="symptom-checker" className="py-20 lg:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <Stethoscope className="w-4 h-4 text-[#1F8A9B]" />
            <span>{isRTL ? 'متى يجب عليك زيارة عيادة الأسنان؟' : 'Interactive Clinical Symptom Checker'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isRTL ? 'فاحص الأعراض الذكي لتشخيص حالتك بدقة' : 'Identify What Your Teeth Need in Seconds'}
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            {isRTL
              ? 'انقر على العرض أو المشكلة التي تشعر بها للحصول على توجيه طبي فوري واقتراح التخصص الأنسب.'
              : 'Select any symptom you are experiencing to uncover the recommended specialist procedure.'}
          </p>
        </div>

        {/* Interactive Symptom Selector Grid */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {config.symptoms.map((symptom) => {
              const isSelected = selectedSymptomId === symptom.id;
              return (
                <button
                  key={symptom.id}
                  onClick={() => setSelectedSymptomId(symptom.id)}
                  className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#1F8A9B] text-white border-[#1F8A9B] shadow-md scale-[1.02]'
                      : 'bg-[#FAF9F5] text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  {isRTL ? symptom.label : symptom.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clinical Recommendation Card Result */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#FAF9F5] to-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-200/70">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isRTL ? 'التشخيص التوجيهي المقترح' : 'Preliminary Clinical Assessment'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {isRTL ? selectedSymptom.label : selectedSymptom.labelEn}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                {isRTL ? selectedSymptom.description : selectedSymptom.descriptionEn}
              </p>
            </div>

            {/* Recommended Specialist Tag */}
            <div className="sm:text-left shrink-0 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 block mb-1">
                {isRTL ? 'الاستشاري الموصى به' : 'Consultant Needed'}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#1F8A9B]">
                {isRTL ? selectedSymptom.recommendedSpecialist : selectedSymptom.recommendedSpecialistEn}
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {isRTL ? 'الإجراء المناسب: ' : 'Recommended Procedure: '}
                <strong className="text-slate-900">
                  {matchingService ? (isRTL ? matchingService.title : matchingService.titleEn) : ''}
                </strong>
              </span>
            </div>

            <button
              onClick={handleBookRecommended}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1F8A9B] hover:bg-[#146471] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{isRTL ? 'حجز موعد لهذه الحالة فوراً' : 'Book For This Condition'}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
