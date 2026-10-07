import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { config, isRTL } = useClinic();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#1F8A9B]" />
            <span>{isRTL ? 'الأسئلة الشائعة والأجوبة الطبية' : 'Patient Inquiries & Answers'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isRTL ? 'كل ما تود معرفته قبل زيارتك الأولى' : 'Everything You Need to Know'}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {isRTL
              ? 'إجابات مباشرة ومفصلة حول التأمين والتقسيط وجودة المعايير الطبية.'
              : 'Direct answers regarding health insurance, installment plans, and procedures.'}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {config.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-[#FAF9F5] rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {isRTL ? faq.question : faq.questionEn}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#1F8A9B]' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200">
                    {isRTL ? faq.answer : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
