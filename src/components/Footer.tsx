import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { ClinicLogo } from './ClinicLogo';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { config, isRTL, setIsConfigDrawerOpen, setIsReceptionDashboardOpen } = useClinic();

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-24 lg:pb-12 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200/70">
          {/* Col 1: Brand Info & Accreditation */}
          <div className="lg:col-span-4 space-y-4">
            <ClinicLogo size="md" showText={true} />
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              {isRTL
                ? 'مجمع اليقين التخصصي لطب وتقويم الأسنان وجراحة الفكين. رعاية رائدة بأحدث التقنيات الرقمية المعتمدة في المملكة العربية السعودية.'
                : 'Al-Yaqeen Specialized Dental & Orthodontic Complex. Pioneering advanced dental care with world-standard 3D diagnostics across KSA.'}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{config.brand.licenseNumber}</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">
              {isRTL ? 'الخدمات التخصصية' : 'Key Services'}
            </h4>
            <ul className="space-y-2 text-xs">
              {config.services.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-[#1F8A9B] transition-colors">
                    {isRTL ? srv.title : srv.titleEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Branches */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">
              {isRTL ? 'فروعنا' : 'Branches'}
            </h4>
            <ul className="space-y-2 text-xs">
              {config.branches.map((b) => (
                <li key={b.id}>
                  <a href="#branches" className="hover:text-[#1F8A9B] transition-colors">
                    {isRTL ? `${b.city} - ${b.name.split(' ')[1] || b.name}` : `${b.cityEn} Branch`}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & SaaS Controls */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">
              {isRTL ? 'التواصل المباشر' : 'Direct Contact'}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#1F8A9B]" />
                <span dir="ltr">{config.brand.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1F8A9B]" />
                <span>{config.brand.email}</span>
              </div>
            </div>

            {/* SaaS Back-Office Shortcuts */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => setIsReceptionDashboardOpen(true)}
                className="text-right text-xs text-[#1F8A9B] hover:underline font-semibold cursor-pointer"
              >
                {isRTL ? '← لوحة استقبال العيادة (Receptions)' : '→ Clinic Reception Leads'}
              </button>
              <button
                onClick={() => setIsConfigDrawerOpen(true)}
                className="text-right text-xs text-[#C5A059] hover:underline font-semibold cursor-pointer"
              >
                {isRTL ? '← إعدادات وهوية نموذج SaaS' : '→ SaaS Config JSON'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & SaaS Engine Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {isRTL ? config.brand.name : config.brand.nameEn}.{' '}
            {isRTL ? 'جميع الحقوق محفوظة.' : 'All Rights Reserved.'}
          </div>
          <div className="flex items-center gap-1.5">
            <span>{isRTL ? 'مدعوم بنظام' : 'Powered by'}</span>
            <span className="font-mono font-bold text-slate-800">DentalOS SaaS</span>
            <span>·</span>
            <span>{isRTL ? 'نموذج عيادات الأسنان الذكي' : 'Multi-Tenant Dental Engine'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
