import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import {
  CalendarCheck,
  ChevronDown,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const QuickReservationSection: React.FC = () => {
  const {
    config,
    isRTL,
    scrollToBooking,
    setPrefilledBooking,
    showToast,
  } = useClinic();

  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickBranch, setQuickBranch] = useState(config.branches[0]?.id || '');
  const [quickService, setQuickService] = useState(config.services[0]?.id || '');

  const handleQuickBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickPhone && !/^05\d{8}$/.test(quickPhone.replace(/\s+/g, ''))) {
      showToast(isRTL ? 'فضلاً أدخل رقم جوال سعودي صحيح (مثال: 05XXXXXXXX)' : 'Please enter a valid Saudi phone number (05XXXXXXXX)');
      return;
    }

    setPrefilledBooking({
      branchId: quickBranch,
      serviceId: quickService,
      patientName: quickName,
      phone: quickPhone,
    });

    scrollToBooking({
      branchId: quickBranch,
      serviceId: quickService,
    });
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="quick-reservation" className="py-8 bg-[#FAF9F5] border-b border-slate-200/60 relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xl">
          <div className="text-xs font-semibold text-slate-500 mb-4 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <CalendarCheck className="w-4 h-4 text-[#1F8A9B]" />
              {isRTL ? 'حجز موعد فوري في أقرب فرع' : 'Instant Priority Appointment Booking'}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {isRTL ? 'يشمل الفحص السريري والتصوير الرقمي ثلاثي الأبعاد 3D' : 'Includes 3D Imaging & Clinical Exam'}
            </span>
          </div>

          <form onSubmit={handleQuickBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            {/* Full Name */}
            <div className="lg:col-span-3">
              <input
                type="text"
                required
                placeholder={isRTL ? 'الاسم الكريم' : 'Full Name'}
                value={quickName}
                onChange={(e) => setQuickName(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A9B]/40 focus:border-[#1F8A9B] text-slate-800 placeholder-slate-400"
              />
            </div>

            {/* Saudi Mobile */}
            <div className="lg:col-span-3">
              <input
                type="tel"
                required
                placeholder={isRTL ? 'رقم الجوال (05XXXXXXXX)' : 'Mobile (05XXXXXXXX)'}
                value={quickPhone}
                onChange={(e) => setQuickPhone(e.target.value)}
                dir="ltr"
                className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A9B]/40 focus:border-[#1F8A9B] text-slate-800 placeholder-slate-400"
              />
            </div>

            {/* City / Branch */}
            <div className="lg:col-span-2 relative">
              <select
                value={quickBranch}
                onChange={(e) => setQuickBranch(e.target.value)}
                className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A9B]/40 text-slate-800 appearance-none pr-8 cursor-pointer"
              >
                {config.branches.map((b) => (
                  <option key={b.id} value={b.id}>
                    {isRTL ? b.city : b.cityEn}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Service */}
            <div className="lg:col-span-2 relative">
              <select
                value={quickService}
                onChange={(e) => setQuickService(e.target.value)}
                className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A9B]/40 text-slate-800 appearance-none pr-8 cursor-pointer"
              >
                {config.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {isRTL ? s.title : s.titleEn}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#1F8A9B] hover:bg-[#146471] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>{isRTL ? 'تأكيد الحجز' : 'Proceed'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
