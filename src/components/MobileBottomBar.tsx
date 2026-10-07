import React from 'react';
import { useClinic } from '../context/ClinicContext';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const { config, isRTL, scrollToBooking } = useClinic();

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.08)] py-2.5 px-4">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${config.brand.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-slate-700 mb-0.5" />
          <span className="text-[11px] font-bold">{isRTL ? 'اتصال مباشر' : 'Call'}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${config.brand.whatsappNumber.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold">{isRTL ? 'واتساب' : 'WhatsApp'}</span>
        </a>

        {/* Book Now Button */}
        <button
          onClick={() => scrollToBooking()}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#1F8A9B] text-white hover:bg-[#146471] transition-colors shadow-xs cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold">{isRTL ? 'حجز موعد' : 'Book'}</span>
        </button>
      </div>
    </div>
  );
};
