import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBooking } from '../types/clinic';
import {
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle2,
  Building2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  FileText,
  LayoutDashboard
} from 'lucide-react';

export const BookingSection: React.FC = () => {
  const {
    config,
    isRTL,
    prefilledBooking,
    addAppointment,
    setIsReceptionDashboardOpen,
    showToast,
  } = useClinic();

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states
  const [branchId, setBranchId] = useState(config.branches[0]?.id || '');
  const [serviceId, setServiceId] = useState(config.services[0]?.id || '');
  const [doctorId, setDoctorId] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('17:00');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);

  // Sync prefill from other sections (e.g. quick bar, service modal, doctor section)
  useEffect(() => {
    if (prefilledBooking.branchId) setBranchId(prefilledBooking.branchId);
    if (prefilledBooking.serviceId) setServiceId(prefilledBooking.serviceId);
    if (prefilledBooking.doctorId) setDoctorId(prefilledBooking.doctorId);
    if (prefilledBooking.patientName) setFullName(prefilledBooking.patientName);
    if (prefilledBooking.phone) setPhone(prefilledBooking.phone);
  }, [prefilledBooking]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const timeSlots = [
    '09:30', '10:30', '11:30', '16:00', '17:00', '18:00', '19:00', '20:30'
  ];

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!branchId || !serviceId) {
        showToast(isRTL ? 'فضلاً اختر الفرع والخدمة المطلوبة' : 'Please select a branch and service');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!preferredDate || !preferredTime) {
        showToast(isRTL ? 'فضلاً حدد التاريخ والوقت المفضل' : 'Please choose date and time');
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!fullName.trim()) {
        showToast(isRTL ? 'فضلاً أدخل الاسم الكريم' : 'Please enter full name');
        return;
      }
      const cleanPhone = phone.replace(/\s+/g, '');
      if (!/^05\d{8}$/.test(cleanPhone)) {
        showToast(isRTL ? 'رقم الجوال غير صحيح. يجب أن يبدأ بـ 05 ويتكون من 10 أرقام' : 'Invalid Saudi phone. Must start with 05 and be 10 digits');
        return;
      }

      // Submit booking
      const newBooking = addAppointment({
        fullName,
        phone: cleanPhone,
        branchId,
        serviceId,
        doctorId: doctorId || undefined,
        preferredDate,
        preferredTime,
        notes,
      });

      setConfirmedBooking(newBooking);
      setCurrentStep(4);
      showToast(isRTL ? 'تم تأكيد طلب الموعد بنجاح!' : 'Appointment booked successfully!');
    }
  };

  const handleResetBooking = () => {
    setCurrentStep(1);
    setConfirmedBooking(null);
  };

  const selectedBranch = config.branches.find((b) => b.id === branchId);
  const selectedService = config.services.find((s) => s.id === serviceId);
  const selectedDoctor = config.doctors.find((d) => d.id === doctorId);

  // WhatsApp Link generator
  const getWhatsAppBookingLink = () => {
    const text = isRTL
      ? `مرحباً مجمع اليقين لطب الأسنان، أود تأكيد موعدي رقم (${confirmedBooking?.id}):
الاسم: ${fullName}
الفرع: ${selectedBranch?.city}
الخدمة: ${selectedService?.title}
التاريخ: ${preferredDate} الساعة ${preferredTime}`
      : `Hello Al-Yaqeen Dental, confirming my appointment (${confirmedBooking?.id}):
Name: ${fullName}
Branch: ${selectedBranch?.cityEn}
Service: ${selectedService?.titleEn}
Date: ${preferredDate} at ${preferredTime}`;

    return `https://wa.me/${config.brand.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="booking-section" className="py-20 lg:py-28 bg-white border-t border-slate-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs font-semibold text-[#1F8A9B] uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#1F8A9B]" />
            <span>{isRTL ? 'منظومة الحجز الذكية' : 'Intelligent Booking Core'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isRTL ? 'احجز موعدك التخصصي في دقائق' : 'Reserve Your Clinical Consultation'}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {isRTL
              ? 'تأكيد فوري عبر الواتساب واستشارة استشاري معتمد بدون قوائم انتظار.'
              : 'Instant confirmation with KSA board consultants and zero waiting.'}
          </p>
        </div>

        {/* Multi-Step Progress Bar */}
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold">
            {[
              { num: 1, labelAr: 'الخدمة والفرع', labelEn: 'Service' },
              { num: 2, labelAr: 'الموعد والطبيب', labelEn: 'Schedule' },
              { num: 3, labelAr: 'بيانات المراجع', labelEn: 'Details' },
              { num: 4, labelAr: 'التأكيد والإيصال', labelEn: 'Confirm' },
            ].map((step) => {
              const isPassed = currentStep >= step.num;
              const isCurrent = currentStep === step.num;
              return (
                <div key={step.num} className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all mb-1.5 ${
                      isCurrent
                        ? 'bg-[#1F8A9B] text-white ring-4 ring-[#1F8A9B]/20 shadow-xs'
                        : isPassed
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {isPassed && currentStep > step.num ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      step.num
                    )}
                  </div>
                  <span className={`${isCurrent ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
                    {isRTL ? step.labelAr : step.labelEn}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wizard Form Container */}
        <div className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
          {/* STEP 1: Branch & Service Selection */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#1F8A9B]" />
                <span>{isRTL ? 'الخطوة 1: حدد الفرع التخصصي والخدمة' : 'Step 1: Select Branch & Service'}</span>
              </h3>

              {/* Branch Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {isRTL ? 'فرع العيادة' : 'Clinic Branch'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {config.branches.map((branch) => {
                    const isSelected = branchId === branch.id;
                    return (
                      <div
                        key={branch.id}
                        onClick={() => setBranchId(branch.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-white border-[#1F8A9B] ring-2 ring-[#1F8A9B]/20 shadow-xs'
                            : 'bg-white/60 border-slate-200 hover:bg-white'
                        }`}
                      >
                        <div className="font-bold text-slate-900 text-sm mb-1">
                          {isRTL ? branch.city : branch.cityEn}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {isRTL ? branch.name : branch.nameEn}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Service Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {isRTL ? 'الخدمة أو الإجراء المطلوب' : 'Specialized Service'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto p-1">
                  {config.services.map((srv) => {
                    const isSelected = serviceId === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setServiceId(srv.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-white border-[#1F8A9B] ring-2 ring-[#1F8A9B]/20 shadow-xs'
                            : 'bg-white/60 border-slate-200 hover:bg-white'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-900 text-xs sm:text-sm">
                            {isRTL ? srv.title : srv.titleEn}
                          </div>
                          <div className="text-[11px] text-[#1F8A9B] font-mono mt-0.5">
                            {isRTL ? `من ${srv.priceFrom.toLocaleString()} ر.س` : `From ${srv.priceFrom.toLocaleString()} SAR`}
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-[#1F8A9B] border-[#1F8A9B] text-white'
                              : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1F8A9B] hover:bg-[#146471] rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>{isRTL ? 'متابعة لاختيار الموعد' : 'Continue to Schedule'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Doctor & Date/Time Slot */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#1F8A9B]" />
                <span>{isRTL ? 'الخطوة 2: الطبيب الاستشاري والوقت المفضل' : 'Step 2: Doctor & Preferred Time'}</span>
              </h3>

              {/* Doctor Selection (Optional / Any Available) */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {isRTL ? 'الاستشاري المشرف (اختياري)' : 'Consultant (Optional)'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    onClick={() => setDoctorId('')}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      doctorId === ''
                        ? 'bg-white border-[#1F8A9B] ring-2 ring-[#1F8A9B]/20 shadow-xs'
                        : 'bg-white/60 border-slate-200 hover:bg-white'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">
                      {isRTL ? 'أي استشاري متاح' : 'Any Available Consultant'}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {isRTL ? 'أقرب موعد ممكن' : 'Earliest availability'}
                    </div>
                  </div>

                  {config.doctors.slice(0, 2).map((doc) => {
                    const isSelected = doctorId === doc.id;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => setDoctorId(doc.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-white border-[#1F8A9B] ring-2 ring-[#1F8A9B]/20 shadow-xs'
                            : 'bg-white/60 border-slate-200 hover:bg-white'
                        }`}
                      >
                        <div className="font-bold text-slate-900 text-xs sm:text-sm">
                          {isRTL ? doc.name : doc.nameEn}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {isRTL ? doc.role.split(' ')[0] + ' ' + (doc.role.split(' ')[1] || '') : doc.roleEn}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Date & Time Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {isRTL ? 'تاريخ الموعد' : 'Date'}
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A9B]/40 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {isRTL ? 'الأوقات المتاحة' : 'Time Slot'}
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = preferredTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setPreferredTime(slot)}
                          className={`py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#1F8A9B] text-white shadow-xs'
                              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {isRTL ? 'رجوع' : 'Back'}
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1F8A9B] hover:bg-[#146471] rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>{isRTL ? 'متابعة لبيانات المراجع' : 'Continue to Details'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Info */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <User className="w-5 h-5 text-[#1F8A9B]" />
                <span>{isRTL ? 'الخطوة 3: بيانات المراجع والتواصل' : 'Step 3: Patient Information'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {isRTL ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isRTL ? 'مثال: محمد بن سعد القحطاني' : 'e.g. Mohammed Al-Qahtani'}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A9B]/40 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {isRTL ? 'رقم الجوال السعودي * (05XXXXXXXX)' : 'Saudi Mobile (05XXXXXXXX) *'}
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="05XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A9B]/40 text-slate-800"
                  />
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    {isRTL ? 'سنرسل تفاصيل الحجز وتذكير الموعد عبر الواتساب' : 'We will send confirmation via WhatsApp'}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {isRTL ? 'ملاحظات أو استفسارات إضافية (اختياري)' : 'Additional Notes (Optional)'}
                </label>
                <textarea
                  rows={3}
                  placeholder={isRTL ? 'أي شكوى خاصة، حساسية دوائية، أو استفسار تود طرحه...' : 'Specific concerns or questions...'}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A9B]/40 text-slate-800 resize-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {isRTL ? 'رجوع' : 'Back'}
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isRTL ? 'تأكيد الحجز النهائي' : 'Confirm Appointment'}</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Success & Confirmation Receipt */}
          {currentStep === 4 && confirmedBooking && (
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">
                  {isRTL ? 'تم تأكيد موعدك بنجاح!' : 'Your Appointment is Confirmed!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {isRTL ? 'رقم الحجز المرجعي: ' : 'Reference ID: '}
                  <strong className="font-mono text-[#1F8A9B]">{confirmedBooking.id}</strong>
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="max-w-md mx-auto bg-white p-5 rounded-2xl border border-slate-200 text-right space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-400">{isRTL ? 'المراجع:' : 'Patient:'}</span>
                  <span className="font-bold text-slate-800">{confirmedBooking.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-400">{isRTL ? 'الفرع:' : 'Branch:'}</span>
                  <span className="font-semibold text-slate-800">
                    {isRTL ? selectedBranch?.name : selectedBranch?.nameEn}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-400">{isRTL ? 'الخدمة:' : 'Service:'}</span>
                  <span className="font-semibold text-slate-800">
                    {isRTL ? selectedService?.title : selectedService?.titleEn}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-400">{isRTL ? 'الموعد:' : 'Slot:'}</span>
                  <span className="font-bold text-[#1F8A9B] font-mono">
                    {confirmedBooking.preferredDate} · {confirmedBooking.preferredTime}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isRTL ? 'إرسال التأكيد للعيادة عبر واتساب' : 'Open in WhatsApp'}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsReceptionDashboardOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <LayoutDashboard className="w-4 h-4 text-amber-600" />
                  <span>{isRTL ? 'عرض في لوحة استقبال SaaS' : 'View in SaaS Leads'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetBooking}
                  className="px-4 py-3 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  {isRTL ? 'حجز موعد آخر' : 'Book Another'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
