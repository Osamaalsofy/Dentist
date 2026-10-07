import React, { useState } from 'react';
import { useClinic } from '../context/ClinicContext';
import { CLINIC_PRESETS } from '../config/clinic.config';
import {
  X,
  SlidersHorizontal,
  Check,
  Copy,
  Code2,
  Download,
  Building,
  RefreshCw
} from 'lucide-react';

export const SaaSConfigDrawer: React.FC = () => {
  const {
    config,
    setConfig,
    isRTL,
    isConfigDrawerOpen,
    setIsConfigDrawerOpen,
    showToast,
  } = useClinic();

  const [activeTab, setActiveTab] = useState<'presets' | 'theme' | 'json'>('presets');
  const [copied, setCopied] = useState(false);

  if (!isConfigDrawerOpen) return null;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    showToast(isRTL ? 'تم نسخ ملف clinic.config.json إلى الحافظة' : 'Copied clinic.config.json to clipboard');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleColorChange = (key: 'primary' | 'accent', value: string) => {
    setConfig({
      ...config,
      theme: {
        ...config.theme,
        [key]: value,
        ...(key === 'primary' ? { primaryDark: value } : {}),
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-s border-slate-200">
        {/* Drawer Header */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#1F8A9B]/10 text-[#1F8A9B] flex items-center justify-center">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                {isRTL ? 'محرك DentalOS SaaS' : 'DentalOS SaaS Engine'}
              </h3>
              <p className="text-[11px] text-slate-500">
                {isRTL ? 'قالب موحد · تغذية ملف config لكل عيادة' : '1 template, 1 config file per clinic'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsConfigDrawerOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="p-3 bg-white border-b border-slate-100 flex items-center gap-1.5 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('presets')}
            className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'presets'
                ? 'bg-[#1F8A9B] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {isRTL ? 'نماذج العيادات' : 'Clinic Presets'}
          </button>
          <button
            onClick={() => setActiveTab('theme')}
            className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'theme'
                ? 'bg-[#1F8A9B] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {isRTL ? 'ألوان الهوية' : 'Theme Tokens'}
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'json'
                ? 'bg-[#1F8A9B] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {isRTL ? 'كود JSON' : 'Export JSON'}
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-5">
          {/* Presets Tab */}
          {activeTab === 'presets' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 leading-relaxed bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200/60">
                <span className="font-bold text-amber-900 block mb-1">
                  {isRTL ? '💡 فكرة نظام SaaS Reusable:' : '💡 SaaS Reusability:'}
                </span>
                {isRTL
                  ? 'اختر أي عيادة أدناه لمشاهدة تحول الموقع فورياً من ألوان وهوية وبيانات وفروع دون أي تعديل برمجي.'
                  : 'Select any clinic preset to see the entire site dynamically morph branding, services, and tokens.'}
              </div>

              {CLINIC_PRESETS.map((preset) => {
                const isActive = config.id === preset.id;
                return (
                  <div
                    key={preset.id}
                    onClick={() => {
                      setConfig(preset);
                      showToast(isRTL ? `تم تطبيق هوية ${preset.brand.name}` : `Switched to ${preset.brand.nameEn}`);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isActive
                        ? 'bg-slate-50 border-[#1F8A9B] ring-2 ring-[#1F8A9B]/20 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full shadow-xs"
                          style={{ backgroundColor: preset.theme.primary }}
                        />
                        <span className="font-bold text-slate-900 text-sm">
                          {isRTL ? preset.brand.name : preset.brand.nameEn}
                        </span>
                      </div>
                      {isActive && <Check className="w-4 h-4 text-[#1F8A9B]" />}
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2 mb-2">
                      {isRTL ? preset.brand.tagline : preset.brand.taglineEn}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span>Primary: {preset.theme.primary}</span>
                      <span>·</span>
                      <span>{preset.branches.length} Branches</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Theme Tokens Tab */}
          {activeTab === 'theme' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {isRTL ? 'اللون الأساسي للعلامة (Primary)' : 'Primary Brand Token'}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={config.theme.primary}
                    onChange={(e) => handleColorChange('primary', e.target.value)}
                    className="w-10 h-10 rounded-xl border border-slate-200 cursor-pointer p-0.5"
                  />
                  <input
                    type="text"
                    value={config.theme.primary}
                    onChange={(e) => handleColorChange('primary', e.target.value)}
                    className="flex-1 px-3 py-2 text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {isRTL ? 'لون التمييز والأزرار (Accent)' : 'Accent Token (Gold / Sand)'}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={config.theme.accent}
                    onChange={(e) => handleColorChange('accent', e.target.value)}
                    className="w-10 h-10 rounded-xl border border-slate-200 cursor-pointer p-0.5"
                  />
                  <input
                    type="text"
                    value={config.theme.accent}
                    onChange={(e) => handleColorChange('accent', e.target.value)}
                    className="flex-1 px-3 py-2 text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400 block mb-2">
                  {isRTL ? 'لوحات ألوان جاهزة سريعة:' : 'Quick Palette Presets:'}
                </span>
                <div className="flex gap-2">
                  {[
                    { name: 'Al-Yaqeen Teal', primary: '#1F8A9B', accent: '#C5A059' },
                    { name: 'Royal Emerald', primary: '#0D7E69', accent: '#D4AF37' },
                    { name: 'Sapphire Navy', primary: '#1E5AA0', accent: '#C79A42' },
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleColorChange('primary', p.primary);
                        handleColorChange('accent', p.accent);
                      }}
                      className="px-2.5 py-1.5 text-[11px] font-medium bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 cursor-pointer"
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* JSON Export Tab */}
          {activeTab === 'json' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>clinic.config.json</span>
                <button
                  onClick={handleCopyJson}
                  className="flex items-center gap-1 text-[#1F8A9B] hover:underline cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? (isRTL ? 'تم النسخ!' : 'Copied!') : isRTL ? 'نسخ الكود' : 'Copy'}</span>
                </button>
              </div>

              <div className="bg-slate-900 text-slate-200 p-3.5 rounded-2xl text-[11px] font-mono h-80 overflow-y-auto select-all leading-relaxed">
                <pre>{JSON.stringify(config, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {isRTL ? 'العيادة النشطة:' : 'Active:'} <strong className="text-slate-800">{config.brand.name}</strong>
          </span>
          <button
            onClick={() => setIsConfigDrawerOpen(false)}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl cursor-pointer"
          >
            {isRTL ? 'إغلاق المعاينة' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};
