import React, { useState, useEffect } from 'react';
import { useClinic } from '../context/ClinicContext';
import { ClinicLogo } from './ClinicLogo';
import { Globe, Calendar, Menu, X, SlidersHorizontal, LayoutDashboard, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    config,
    language,
    setLanguage,
    isRTL,
    scrollToBooking,
    setIsConfigDrawerOpen,
    setIsReceptionDashboardOpen,
    appointments,
  } = useClinic();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: isRTL ? 'الخدمات' : 'Services', href: '#services' },
    { label: isRTL ? 'الاستشاريون' : 'Doctors', href: '#doctors' },
    { label: isRTL ? 'قبل وبعد' : 'Before & After', href: '#before-after' },
    { label: isRTL ? 'رحلة العلاج' : 'Journey', href: '#patient-journey' },
    { label: isRTL ? 'التقنيات' : 'Technology', href: '#technology' },
    { label: isRTL ? 'الفروع' : 'Branches', href: '#branches' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(30,41,59,0.05)] py-3.5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a href="#" className="flex items-center group transition-transform duration-200 hover:scale-[1.01]">
              <ClinicLogo size="md" showText={true} />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative transition-colors hover:text-[#1F8A9B] py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1F8A9B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions & Conversion CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white/80 hover:bg-white rounded-xl border border-slate-200/80 shadow-xs transition-colors cursor-pointer"
                aria-label="Switch Language"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{language === 'ar' ? 'English' : 'عربي'}</span>
              </button>

              {/* Primary Book Now CTA */}
              <button
                onClick={() => scrollToBooking()}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1F8A9B] hover:bg-[#146471] active:scale-[0.98] rounded-xl shadow-sm transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{isRTL ? 'احجز موعدك' : 'Book Appointment'}</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-900 bg-white/80 rounded-xl border border-slate-200"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-slate-700 hover:text-[#1F8A9B] transition-colors border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${config.brand.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-700 bg-slate-50 rounded-xl border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#1F8A9B]" />
                <span dir="ltr">{config.brand.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsConfigDrawerOpen(true);
                }}
                className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-600 bg-slate-100 rounded-xl"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#1F8A9B]" />
                <span>{isRTL ? 'إعدادات وهوية نموذج SaaS' : 'SaaS Template Settings'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
