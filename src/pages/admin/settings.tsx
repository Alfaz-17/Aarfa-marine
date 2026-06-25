import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Sparkles, Type, ShieldCheck, Loader2 } from 'lucide-react';
import api from '@/lib/api';
import AdminLayout from '@/components/admin/admin-layout';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    autoBackgroundRemoval: false,
    applyWatermark: true,
    watermarkText: 'Aarfa Marine'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data } = await api.get('/settings');
        if (data) {
          setSettings({
            autoBackgroundRemoval: data.autoBackgroundRemoval,
            applyWatermark: data.applyWatermark,
            watermarkText: data.watermarkText || 'Aarfa Marine Solutions'
          });
        }
      } catch (err) {
        console.error("Error fetching settings:", err);
        setMessage({ type: 'error', text: 'Failed to load system settings.' });
      } finally {
        setIsLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setMessage({ type: '', text: '' });
    try {
      await api.post('/settings', settings);
      setMessage({ type: 'success', text: 'Settings updated successfully.' });
    } catch (err) {
      console.error("Error saving settings:", err);
      setMessage({ type: 'error', text: 'Failed to save settings.' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div className="text-[10px] font-mono font-bold uppercase tracking-widest p-10 text-[#5B9BD5]">Accessing secure telemetry settings...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-12 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-8 relative">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase tracking-tighter font-syne m-0">System Console</h1>
          <p className="text-xs font-mono font-bold text-[#5B9BD5] uppercase tracking-[0.3em] mt-2 m-0">Global UI & Asset Processing Configuration</p>
        </div>
        <ShieldCheck className="w-8 h-8 text-[#5B9BD5]/20" />
      </div>

      {message.text && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-4 text-[10px] font-mono font-bold uppercase tracking-widest border-l-4 ${
            message.type === 'success' ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500' : 'bg-red-950/40 text-red-300 border-red-500'
          }`}
        >
          {message.text}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Background Removal Toggle */}
        <div className="bg-[#0A1F40]/55 p-10 border border-[#5B9BD5]/20 space-y-6 group hover:border-[#5B9BD5] transition-all relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#5B9BD5]/40" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#5B9BD5]/40" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#5B9BD5]/40" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#5B9BD5]/40" />

          <div className="flex items-center gap-4 text-[#5B9BD5]">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest m-0">Asset Normalization</h2>
          </div>
          <p className="text-[10px] text-slate-400 font-mono uppercase leading-relaxed tracking-wider m-0">
            Automatically remove backgrounds from all uploaded product images using local AI processing (Simulated fallback).
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSettings(prev => ({ ...prev, autoBackgroundRemoval: !prev.autoBackgroundRemoval }))}
              className={`w-full py-4 text-[10px] font-mono font-bold uppercase tracking-widest transition-all border cursor-pointer ${
                settings.autoBackgroundRemoval 
                  ? 'bg-[#1C3F95] text-white border-[#1C3F95] shadow-xl' 
                  : 'bg-slate-950/40 text-slate-400 border-[#5B9BD5]/20 hover:border-[#5B9BD5]'
              }`}
            >
              Auto BG Removal: {settings.autoBackgroundRemoval ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>
        </div>

        {/* Watermarking Controls */}
        <div className="bg-[#0A1F40]/55 p-10 border border-[#5B9BD5]/20 space-y-6 group hover:border-[#5B9BD5] transition-all relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#5B9BD5]/40" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#5B9BD5]/40" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#5B9BD5]/40" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#5B9BD5]/40" />

          <div className="flex items-center gap-4 text-[#5B9BD5]">
            <ShieldCheck className="w-5 h-5" />
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest m-0">Brand Protection</h2>
          </div>
          <p className="text-[10px] text-slate-400 font-mono uppercase leading-relaxed tracking-wider m-0">
            Apply a subtle overlay watermark to all main and gallery images during the registry upload process.
          </p>
          <div className="pt-4 space-y-4">
            <button
              onClick={() => setSettings(prev => ({ ...prev, applyWatermark: !prev.applyWatermark }))}
              className={`w-full py-4 text-[10px] font-mono font-bold uppercase tracking-widest transition-all border cursor-pointer ${
                settings.applyWatermark 
                  ? 'bg-[#1C3F95] text-white border-[#1C3F95] shadow-xl' 
                  : 'bg-slate-950/40 text-slate-400 border-[#5B9BD5]/20 hover:border-[#5B9BD5]'
              }`}
            >
              Apply Watermark: {settings.applyWatermark ? 'ENABLED' : 'DISABLED'}
            </button>
          </div>
        </div>
      </div>

      {/* Watermark Text Configuration */}
      <div className="bg-[#0A1F40]/55 p-10 border border-[#5B9BD5]/20 space-y-8 relative">
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#5B9BD5]/40" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#5B9BD5]/40" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#5B9BD5]/40" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#5B9BD5]/40" />

        <div className="flex items-center gap-4 text-[#5B9BD5] border-b border-slate-800 pb-6">
          <Type className="w-5 h-5" />
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest m-0">Watermark Identity</h2>
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-[0.2em] block">Identifier Text overlay</label>
          <input
            type="text"
            value={settings.watermarkText}
            onChange={(e) => setSettings(prev => ({ ...prev, watermarkText: e.target.value }))}
            className="w-full bg-slate-950/60 border border-[#5B9BD5]/20 p-5 text-sm outline-none focus:border-[#5B9BD5] transition-colors font-mono text-white"
            placeholder="e.g. AARFA MARINE"
          />
          <p className="text-[9px] font-mono text-slate-400 italic m-0">Current watermark stamp: "{settings.watermarkText || 'None'}"</p>
        </div>
      </div>

      {/* Sync Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full md:w-auto px-12 py-5 bg-[#1E5FA6] hover:bg-[#5B9BD5] text-white font-mono font-bold uppercase tracking-[0.4em] text-[10px] transition-all shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50 border-0 cursor-pointer"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Committing Changes...
            </>
          ) : (
            <>
              <Save className="w-5 h-5" /> Synchronize System Settings
            </>
          )}
        </button>
      </div>
    </div>
  );
}

AdminSettingsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
