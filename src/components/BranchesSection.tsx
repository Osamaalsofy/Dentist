import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { ClinicBranch } from '../types/clinic';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

export const BranchesSection: React.FC = () => {
  const { config, isRTL } = useClinic();
  const [activeBranchId, setActiveBranchId] = useState<string>(config.branches[0]?.id || '');

  const activeBranch: ClinicBranch =
    config.branches.find((b) => b.id === activeBranchId) || config.branches[0];

  return (
    <section id="branches" className="py-20 lg:py-28 bg-[#FAF9F5] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#1F8A9B]" />
            <span>{isRTL ? 'فروع مجمع اليقين في المملكة' : 'Our Specialized Centers'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isRTL ? 'مواقعنا في كبرى مدن المملكة العربية السعودية' : 'Convenient Locations Across Saudi Arabia'}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {isRTL
              ? 'مجهزة بأحدث التقنيات الرقمية ومواقف سيارات خاصة لراحتكم التامة.'
              : 'Equipped with the same world-class digital suites and dedicated valet parking.'}
          </p>
        </div>

        {/* City Selector Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {config.branches.map((b) => {
            const isActive = activeBranchId === b.id;
            return (
              <button
                key={b.id}
                onClick={() => setActiveBranchId(b.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1F8A9B] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {isRTL ? b.city : b.cityEn}
              </button>
            );
          })}
        </div>

        {/* Active Branch Display Stage */}
        <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Branch Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#1F8A9B] uppercase tracking-wider mb-1 block">
                  {isRTL ? activeBranch.city : activeBranch.cityEn}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {isRTL ? activeBranch.name : activeBranch.nameEn}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-[#1F8A9B] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs mb-0.5">
                    {isRTL ? 'العنوان والموقع:' : 'Address:'}
                  </div>
                  <div>{isRTL ? activeBranch.address : activeBranch.addressEn}</div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-[#1F8A9B] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs mb-0.5">
                    {isRTL ? 'أوقات العمل واستقبال المراجعين:' : 'Working Hours:'}
                  </div>
                  <div>
                    {isRTL ? activeBranch.workingHours.ar : activeBranch.workingHours.en}
                  </div>
                </div>
              </div>

              {/* Direct Actions: Call, WhatsApp, Google Maps */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <a
                  href={`tel:${activeBranch.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">{activeBranch.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${activeBranch.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isRTL ? 'محادثة الفرع' : 'WhatsApp'}</span>
                </a>

                <a
                  href={activeBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#1F8A9B]" />
                  <span>{isRTL ? 'الاتجاهات في الخريطة' : 'Get Directions'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Simulated Interactive Map Display */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner flex items-center justify-center">
                {/* Visual Map Texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#1f8a9b_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                {/* Simulated Roads & City Grids */}
                <svg className="absolute inset-0 w-full h-full text-slate-300 stroke-current opacity-60" fill="none">
                  <path d="M 0 50 Q 200 80 400 40 T 800 120" strokeWidth="6" />
                  <path d="M 120 0 Q 180 200 240 400" strokeWidth="8" />
                  <path d="M 300 0 L 350 400" strokeWidth="4" />
                  <circle cx="280" cy="180" r="40" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* Pin Card */}
                <div className="relative z-10 text-center p-6 glass-card rounded-2xl shadow-xl border border-white/80 max-w-xs">
                  <div className="w-12 h-12 rounded-full bg-[#1F8A9B] text-white flex items-center justify-center mx-auto mb-2 shadow-md animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-slate-900 text-sm">
                    {isRTL ? activeBranch.name : activeBranch.nameEn}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {isRTL ? activeBranch.city : activeBranch.cityEn} · {isRTL ? 'مواقف خاصة متوفرة' : 'Valet Parking Available'}
                  </div>
                  <a
                    href={activeBranch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs font-bold text-[#1F8A9B] hover:underline"
                  >
                    {isRTL ? 'فتح خرائط جوجل المباشرة' : 'Open in Google Maps'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
