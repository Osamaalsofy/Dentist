import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { AppointmentBooking } from '../types/clinic';
import {
  X,
  LayoutDashboard,
  Search,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  UserCheck,
  Building2,
  Filter
} from 'lucide-react';

export const ReceptionDashboardModal: React.FC = () => {
  const {
    config,
    isRTL,
    isReceptionDashboardOpen,
    setIsReceptionDashboardOpen,
    appointments,
    updateAppointmentStatus,
  } = useClinic();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'booked' | 'completed'>('all');

  if (!isReceptionDashboardOpen) return null;

  const filtered = appointments.filter((apt) => {
    const matchesSearch =
      apt.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.phone.includes(searchTerm) ||
      apt.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || apt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: AppointmentBooking['status']) => {
    switch (status) {
      case 'new':
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-50 text-blue-700 border border-blue-200">
            {isRTL ? 'جديد (بانتظار التأكيد)' : 'New Lead'}
          </span>
        );
      case 'contacted':
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-amber-50 text-amber-700 border border-amber-200">
            {isRTL ? 'تم التواصل' : 'Contacted'}
          </span>
        );
      case 'booked':
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
            {isRTL ? 'موعد مؤكد' : 'Booked'}
          </span>
        );
      case 'completed':
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 text-slate-700 border border-slate-200">
            {isRTL ? 'مكتمل' : 'Completed'}
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1F8A9B]/10 text-[#1F8A9B] flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {isRTL ? 'لوحة استقبال ومتابعة مواعيد العيادة' : 'Clinic Reception & Leads Dashboard'}
                </h3>
                <span className="text-[11px] font-mono bg-[#1F8A9B] text-white px-2 py-0.5 rounded-full font-bold">
                  SaaS Back-Office
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {isRTL
                  ? `مجمع ${config.brand.name} · إدارة المواعيد الواردة فورياً وتغيير حالاتها`
                  : `Real-time incoming appointment queue for ${config.brand.nameEn}`}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsReceptionDashboardOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={isRTL ? 'بحث بالاسم أو الجوال أو رقم الحجز...' : 'Search by name, phone, ID...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-3 pr-9 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A9B]/30"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-slate-400 shrink-0">
              <Filter className="w-3.5 h-3.5 inline mr-1" />
              {isRTL ? 'الحالة:' : 'Status:'}
            </span>
            {(['all', 'new', 'contacted', 'booked', 'completed'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  statusFilter === st
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st === 'all'
                  ? isRTL
                    ? 'الكل'
                    : 'All'
                  : st === 'new'
                  ? isRTL
                    ? 'جديد'
                    : 'New'
                  : st === 'contacted'
                  ? isRTL
                    ? 'تم التواصل'
                    : 'Contacted'
                  : st === 'booked'
                  ? isRTL
                    ? 'مؤكد'
                    : 'Booked'
                  : isRTL
                  ? 'مكتمل'
                  : 'Completed'}
              </button>
            ))}
          </div>
        </div>

        {/* Table of Appointments */}
        <div className="max-h-96 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              {isRTL ? 'لا توجد مواعيد مطابقة لخيارات البحث' : 'No appointments matching search'}
            </div>
          ) : (
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 sticky top-0">
                <tr>
                  <th className="py-3 px-4">{isRTL ? 'المراجع' : 'Patient'}</th>
                  <th className="py-3 px-4">{isRTL ? 'الفرع والخدمة' : 'Branch / Service'}</th>
                  <th className="py-3 px-4">{isRTL ? 'الموعد' : 'Date & Time'}</th>
                  <th className="py-3 px-4">{isRTL ? 'الحالة' : 'Status'}</th>
                  <th className="py-3 px-4 text-center">{isRTL ? 'الإجراء' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((apt) => {
                  const srv = config.services.find((s) => s.id === apt.serviceId);
                  const br = config.branches.find((b) => b.id === apt.branchId);

                  return (
                    <tr key={apt.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{apt.fullName}</div>
                        <div className="text-xs font-mono text-slate-500 flex items-center gap-1 mt-0.5" dir="ltr">
                          <Phone className="w-3 h-3 text-[#1F8A9B]" />
                          {apt.phone}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-800 font-medium">
                          {isRTL ? srv?.title : srv?.titleEn}
                        </div>
                        <div className="text-xs text-slate-500">
                          {isRTL ? br?.city : br?.cityEn}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-xs text-slate-700">
                        <div>{apt.preferredDate}</div>
                        <div className="text-[#1F8A9B] font-bold">{apt.preferredTime}</div>
                      </td>
                      <td className="py-3 px-4">{getStatusBadge(apt.status)}</td>
                      <td className="py-3 px-4 text-center">
                        <select
                          value={apt.status}
                          onChange={(e) =>
                            updateAppointmentStatus(
                              apt.id,
                              e.target.value as AppointmentBooking['status']
                            )
                          }
                          className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-1 focus:ring-1 focus:ring-[#1F8A9B] cursor-pointer"
                        >
                          <option value="new">{isRTL ? 'جديد' : 'New'}</option>
                          <option value="contacted">{isRTL ? 'تم التواصل' : 'Contacted'}</option>
                          <option value="booked">{isRTL ? 'مؤكد' : 'Booked'}</option>
                          <option value="completed">{isRTL ? 'مكتمل' : 'Completed'}</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>
            {isRTL
              ? `إجمالي المواعيد المسجلة: ${appointments.length}`
              : `Total leads recorded: ${appointments.length}`}
          </span>
          <button
            onClick={() => setIsReceptionDashboardOpen(false)}
            className="px-4 py-2 font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer"
          >
            {isRTL ? 'إغلاق اللوحة' : 'Close Dashboard'}
          </button>
        </div>
      </div>
    </div>
  );
};
