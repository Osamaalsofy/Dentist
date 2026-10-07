import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Calendar, Camera, FileCheck2, Smile, Award } from 'lucide-react';

export const PatientJourney: React.FC = () => {
  const { isRTL, scrollToBooking } = useClinic();

  const steps = [
    {
      num: '01',
      icon: Calendar,
      title: { ar: 'الحجز الرقمي السلس', en: '1. Seamless Online Booking' },
      desc: {
        ar: 'اختر الفرع والوقت المناسب لك عبر الموقع أو الواتساب، مع تأكيد فوري ورسائل تذكير تلقائية لتجربة استقبال راقية بدون انتظار.',
        en: 'Select your preferred branch and time slot via the site or WhatsApp, with instant SMS confirmation and zero wait times.',
      },
    },
    {
      num: '02',
      icon: Camera,
      title: { ar: 'المسح الرقمي والتشخيص 3D', en: '2. 3D Digital Scan & Diagnostic' },
      desc: {
        ar: 'جلسة استشارية مريحة مع الاستشاري تبدأ بمسح ضوئي ثلاثي الأبعاد بكاميرا iTero وأشعة مقطعية بدون ألم لفحص الأسنان وعظام الفك بدقة.',
        en: 'A relaxing consultation starting with high-definition iTero 3D intraoral imaging and low-radiation diagnostics for jaw precision.',
      },
    },
    {
      num: '03',
      icon: FileCheck2,
      title: { ar: 'خطة علاج مخصصة ومحاكاة النتيجة', en: '3. Treatment Plan & Simulation' },
      desc: {
        ar: 'عرض محاكاة رقمية ثلاثية الأبعاد لشكل ابتسامتك قبل البدء، مع شرح واضح للمراحل والتكلفة وجدولة الجلسات وتفعيل برامج التقسيط.',
        en: 'Preview a photorealistic 3D simulation of your expected final smile, with clear milestones, upfront costs, and 0% installments.',
      },
    },
    {
      num: '04',
      icon: Smile,
      title: { ar: 'ابتسامتك الجديدة والمتابعة الممتدة', en: '4. Your Radiant Smile & Care' },
      desc: {
        ar: 'تنفيذ الإجراء بأيدي استشارية متمرسة مع تقديم شهادة ضمان الجودة الموثقة، ومتابعات دورية مجانية للحفاظ على استدامة بريق أسنانك.',
        en: 'Treatment execution by senior consultants, accompanied by an official warranty certificate and continuing follow-up visits.',
      },
    },
  ];

  return (
    <section id="patient-journey" className="py-20 lg:py-28 bg-white border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-[#1F8A9B]" />
            <span>{isRTL ? 'رحلة المراجع في مجمع اليقين' : 'The Patient Journey'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isRTL ? 'أربع خطوات مدروسة نحو ابتسامة أحلامك' : 'Four Deliberate Steps Toward Your Ideal Smile'}
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            {isRTL
              ? 'صممنا كل مرحلة بعناية فائقة لضمان راحتك النفسية ووضوح الرؤية التام منذ اللحظة الأولى.'
              : 'Every milestone engineered with clinical care to ensure clarity and utmost comfort.'}
          </p>
        </div>

        {/* 4-Step Interactive Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-8 h-1 bg-gradient-to-r from-[#1F8A9B]/20 via-[#1F8A9B] to-[#C5A059]/40 rounded-full -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Number & Icon Lockup */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-mono font-black text-[#1F8A9B]">
                        {step.num}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200/70 flex items-center justify-center text-[#1F8A9B]">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {isRTL ? step.title.ar : step.title.en}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {isRTL ? step.desc.ar : step.desc.en}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400">
                    {isRTL ? 'إشراف استشاري مباشر' : 'Consultant Supervised'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => scrollToBooking()}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#1F8A9B] hover:bg-[#146471] rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>{isRTL ? 'ابدأ خطوتك الأولى واحجز استشارتك' : 'Begin Step 1: Book Consultation'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
