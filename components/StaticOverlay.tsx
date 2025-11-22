import React from 'react';
import { Theme } from '../types.ts';
import { Menu, Search, User, ChevronRight, Calendar, Share2, Bookmark, Eye, FileText, AlertTriangle, Globe, Lock, Activity, Zap, Database, Satellite, Thermometer, Bitcoin, Atom } from 'lucide-react';

interface StaticOverlayProps {
  theme: Theme;
}

export const StaticOverlay: React.FC<StaticOverlayProps> = ({ theme }) => {
  // We wrap all content in a flex container that ensures the "Horalix..." text
  // stays relatively optically centered to allow for smooth cross-fades.
  
  const renderContent = () => {
    switch (theme) {
      // --- EXISTING THEMES ---
      case Theme.MEDICAL:
        return (
          <div className="w-full max-w-5xl bg-white/95 backdrop-blur text-slate-900 p-12 font-serif shadow-2xl border-t-4 border-cyan-600 text-center">
             <div className="font-sans text-cyan-700 font-extrabold text-xs mb-4 uppercase tracking-wider inline-block border-b border-cyan-200 pb-1">Clinical Report</div>
             <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2 tracking-tight text-slate-900 animate-text-focus">
              Horalix Accelerates <br/> Hospital Imaging
            </h1>
             <div className="text-sm text-slate-500 mt-4">Vol 42 • Issue 9 • September 2025</div>
          </div>
        );

      case Theme.FINANCIAL:
        return (
          <div className="w-full max-w-6xl bg-[#f5f1e8] text-black p-10 font-serif border border-slate-300 shadow-xl text-center">
             <div className="border-b-2 border-black pb-2 mb-6 flex justify-center">
               <span className="font-sans font-bold text-xs uppercase bg-black text-white px-2 py-1">Markets</span>
             </div>
             <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-4 tracking-tight text-slate-900 animate-text-pop">
               Horalix Accelerates <br/> Hospital Imaging
             </h1>
             <div className="font-sans text-xs font-bold text-green-700 mt-4">MARKET REACTION: STRONG BUY</div>
          </div>
        );

      case Theme.TECH:
        return (
          <div className="w-full max-w-6xl p-8 font-tech text-white text-center">
             <div className="inline-flex items-center gap-2 mb-6 border border-green-500/30 px-3 py-1 rounded-full bg-black/50 backdrop-blur">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="font-mono text-green-400 text-xs tracking-widest">LATEST IN AI</span>
             </div>
             <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 animate-text-glitch">
               Horalix Accelerates <br/> Hospital Imaging
             </h1>
          </div>
        );

      case Theme.MAINSTREAM:
        return (
          <div className="w-full max-w-6xl font-sans text-center">
             <div className="bg-red-600 text-white text-lg font-black italic uppercase px-4 py-1 mb-4 inline-block transform -skew-x-12">
                Breaking News
             </div>
             <div className="bg-white/90 backdrop-blur text-black p-8 shadow-2xl inline-block">
                <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter font-news animate-text-pop">
                  Horalix Accelerates <br/> <span className="text-red-700">Hospital Imaging</span>
                </h1>
             </div>
          </div>
        );

      case Theme.TABLOID:
        return (
          <div className="w-full max-w-4xl bg-yellow-300 p-8 font-news text-black transform rotate-1 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] border-4 border-black text-center">
             <div className="bg-black text-white inline-block font-black text-xl px-4 py-1 mb-4 uppercase">Exclusive</div>
             <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] drop-shadow-md animate-pulse">
               Horalix Accelerates <br/> Hospital Imaging
             </h1>
          </div>
        );

      case Theme.SCIENTIFIC:
        return (
          <div className="w-full max-w-5xl bg-white text-slate-900 p-12 font-serif border-t-8 border-slate-900 shadow-2xl text-center">
             <div className="font-serif italic text-2xl text-slate-500 mb-6">Journal of Computational Medicine</div>
             <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-8 animate-text-breathe">
              Horalix Accelerates <br/> Hospital Imaging
            </h1>
          </div>
        );
      
      case Theme.RADIOLOGY:
        return (
          <div className="w-full max-w-6xl font-mono text-center">
             <div className="inline-block bg-zinc-900/90 text-zinc-100 p-8 border border-zinc-600 backdrop-blur">
               <div className="text-xs text-yellow-500 mb-4 flex items-center justify-center gap-2"><AlertTriangle size={12}/> SYSTEM ALERT: OPTIMIZATION COMPLETE</div>
               <h1 className="text-4xl md:text-7xl font-bold tracking-wider leading-tight text-white uppercase animate-text-focus">
                 Horalix Accelerates <br/> Hospital Imaging
               </h1>
             </div>
          </div>
        );

      case Theme.BIOTECH:
        return (
          <div className="w-full max-w-5xl font-sans p-10 bg-white/80 backdrop-blur-md border-l-8 border-emerald-500 shadow-lg text-center">
             <div className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">Analysis Complete</div>
             <h1 className="text-5xl md:text-7xl font-light text-emerald-900 leading-none animate-shine bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-900 bg-clip-text text-transparent bg-[length:200%_100%]">
               Horalix Accelerates <br/> <span className="font-bold">Hospital Imaging</span>
             </h1>
          </div>
        );

      case Theme.PHARMA:
        return (
          <div className="w-full max-w-4xl bg-white border border-indigo-200 shadow-xl p-8 font-mono text-indigo-900 text-center">
             <div className="flex justify-center items-center gap-2 mb-4 text-xs text-indigo-400 font-bold">
               <Lock size={12}/> SECURE DOCUMENT 8821
             </div>
             <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-text-glitch">
               HORALIX ACCELERATES <br/> HOSPITAL IMAGING
             </h1>
          </div>
        );

      case Theme.TERMINAL:
        return (
          <div className="w-full max-w-5xl font-mono text-[#ff6600] bg-black p-8 border-2 border-[#ff6600] shadow-[0_0_30px_rgba(255,102,0,0.4)] text-center">
             <div className="text-xs uppercase mb-4 animate-pulse">*** INCOMING TRANSMISSION ***</div>
             <h1 className="text-4xl md:text-7xl font-bold leading-none uppercase tracking-tighter mb-4 bg-[#ff6600] text-black p-4 inline-block animate-pulse">
               Horalix Accelerates <br/> Hospital Imaging
             </h1>
          </div>
        );
      
      case Theme.LIFESTYLE:
        return (
          <div className="w-full max-w-4xl text-center font-serif bg-white/50 p-8 backdrop-blur-sm">
             <div className="text-xs font-sans font-bold tracking-[0.4em] uppercase mb-6">Wellness & Future</div>
             <h1 className="text-6xl md:text-8xl italic font-light text-black mb-4 leading-[0.8] animate-text-breathe">
               Horalix Accelerates<br/>
               <span className="not-italic font-bold">Hospital Imaging</span>
             </h1>
          </div>
        );

      case Theme.VINTAGE:
        return (
          <div className="w-full max-w-4xl text-center font-news text-[#2c241b] bg-[#e8dfc8]/90 p-8 shadow-lg">
             <div className="border-b-2 border-[#2c241b] pb-2 mb-4 flex justify-center font-sans font-bold text-xs uppercase tracking-widest">
               <span>Latest Edition</span>
             </div>
             <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] mb-4 scale-y-110 animate-text-focus">
               Horalix Accelerates <br/> Hospital Imaging
             </h1>
          </div>
        );

      case Theme.ACADEMIC:
        return (
          <div className="w-full max-w-4xl text-center font-serif bg-white p-10 shadow-2xl border-4 border-double border-slate-200">
            <div className="text-slate-500 uppercase tracking-widest text-xs mb-4">Proceedings of the National Academy</div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight animate-text-breathe">
              Horalix Accelerates <br/> Hospital Imaging
            </h1>
          </div>
        );

      case Theme.GLOBAL_NETWORK:
        return (
          <div className="w-full max-w-5xl text-center font-sans">
            <div className="bg-blue-900 text-white text-sm font-bold px-4 py-1 inline-flex items-center gap-2 mb-4 rounded-full">
              <Globe size={14}/> WORLD REPORT
            </div>
             <div className="bg-white text-blue-900 p-6 md:p-10 shadow-2xl">
                <h1 className="text-4xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter font-news animate-text-pop">
                  Horalix Accelerates <br/> Hospital Imaging
                </h1>
             </div>
          </div>
        );

      case Theme.LEGAL:
        return (
          <div className="w-full max-w-4xl text-center font-serif bg-white p-12 border border-slate-300 shadow-md">
             <div className="font-news text-2xl uppercase tracking-[0.2em] mb-8 text-slate-400 border-b border-slate-200 pb-4">Official Patent Filing</div>
             <h1 className="text-4xl md:text-6xl font-bold text-slate-900 uppercase tracking-widest leading-snug animate-text-focus">
              Horalix Accelerates <br/> Hospital Imaging
            </h1>
          </div>
        );
      
      case Theme.TECH_BLOG:
        return (
          <div className="w-full max-w-5xl text-center font-sans">
             <h1 className="text-5xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent leading-[0.9] mb-2 drop-shadow-sm animate-text-shimmer">
               Horalix Accelerates <br/> Hospital Imaging
             </h1>
             <div className="inline-block bg-black text-white font-mono text-xs px-3 py-1 rounded mt-4">VERGE SCORE: 9.0</div>
          </div>
        );

      case Theme.GOV_REPORT:
        return (
          <div className="w-full max-w-4xl bg-white p-12 border-2 border-black font-mono text-center shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
             <div className="border-b-4 border-black mb-6 pb-2 font-bold uppercase tracking-widest">Department of Health</div>
             <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black mb-6 animate-text-glitch">
               HORALIX ACCELERATES <br/> HOSPITAL IMAGING
             </h1>
             <div className="inline-block border border-black px-2 py-1 text-xs font-bold uppercase text-red-600">Declassified</div>
          </div>
        );
      
      case Theme.NEURO:
        return (
          <div className="w-full max-w-5xl text-center font-sans text-white">
             <div className="inline-block backdrop-blur-md bg-slate-900/50 border border-slate-700 p-8 rounded-2xl">
                <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-2 text-cyan-100 animate-pulse">
                   Horalix Accelerates <br/> Hospital Imaging
                </h1>
                <div className="h-px w-24 bg-cyan-500 mx-auto mt-6 shadow-[0_0_10px_cyan]"></div>
             </div>
          </div>
        );

      case Theme.CARDIOLOGY:
        return (
          <div className="w-full max-w-5xl text-center font-mono">
             <div className="bg-white/90 p-8 border-t-4 border-red-500 shadow-xl inline-block">
                <div className="text-red-500 text-xs font-bold tracking-widest mb-2 uppercase flex items-center justify-center gap-2">
                   <Activity size={14}/> Cardiac Rhythm Normal
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-slate-900 leading-tight animate-text-pop">
                   Horalix Accelerates <br/> Hospital Imaging
                </h1>
             </div>
          </div>
        );

      case Theme.ONCOLOGY:
         return (
          <div className="w-full max-w-5xl text-center font-serif text-slate-800">
             <div className="bg-purple-50/95 p-12 rounded-full shadow-2xl aspect-square flex flex-col items-center justify-center border border-purple-200">
                <div className="text-purple-600 italic mb-4">Breakthrough Therapy</div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2 animate-text-breathe">
                   Horalix Accelerates <br/> Hospital Imaging
                </h1>
             </div>
          </div>
         );

      // --- NEW THEMES ---
      case Theme.CYBER:
        return (
          <div className="w-full max-w-6xl text-center font-mono text-red-500">
             <div className="inline-block bg-black/90 border border-red-600 p-10 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                <div className="text-red-600 animate-pulse mb-4 flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold">
                   <Zap size={12} /> Critical Threat Detected
                </div>
                <h1 className="text-4xl md:text-7xl font-bold uppercase leading-tight animate-text-glitch drop-shadow-[2px_2px_0_rgba(255,0,0,1)]">
                   Horalix Accelerates <br/> Hospital Imaging
                </h1>
             </div>
          </div>
        );

      case Theme.SPACE:
        return (
          <div className="w-full max-w-5xl text-center font-tech text-white">
             <div className="border-t border-b border-white/20 py-12 backdrop-blur-sm bg-black/30">
                <div className="text-yellow-400 text-xs font-mono mb-4 tracking-[0.5em] uppercase flex items-center justify-center gap-2">
                   <Satellite size={14} /> Telemetry Online
                </div>
                <h1 className="text-5xl md:text-8xl font-light tracking-wide leading-none animate-text-focus">
                   Horalix Accelerates <br/> Hospital Imaging
                </h1>
             </div>
          </div>
        );

      case Theme.CLIMATE:
        return (
          <div className="w-full max-w-5xl text-center font-sans">
             <div className="bg-orange-500/90 text-white p-10 shadow-2xl inline-block relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] animate-shine"></div>
                <div className="flex items-center justify-center gap-2 mb-4 text-xs font-bold uppercase tracking-wide text-black/60">
                   <Thermometer size={14} /> Global Anomaly Detected
                </div>
                <h1 className="text-4xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter animate-text-pop">
                   Horalix Accelerates <br/> Hospital Imaging
                </h1>
             </div>
          </div>
        );

      case Theme.CRYPTO:
        return (
          <div className="w-full max-w-6xl text-center font-mono text-green-400">
             <div className="bg-slate-900/95 border-2 border-green-500 p-8 shadow-[0_0_30px_rgba(34,197,94,0.2)] transform rotate-1">
                <div className="text-xs text-green-300 mb-4 flex justify-center items-center gap-2">
                   <Bitcoin size={14} className="animate-spin" style={{ animationDuration: '3s' }} />
                   NEW ATH REACHED
                </div>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none uppercase animate-text-glitch">
                   Horalix Accelerates <br/> Hospital Imaging
                </h1>
             </div>
          </div>
        );

      case Theme.QUANTUM:
         return (
           <div className="w-full max-w-5xl text-center font-sci text-white">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-12 rounded-3xl shadow-2xl">
                 <div className="text-blue-300 text-xs tracking-[0.3em] uppercase mb-6 flex items-center justify-center gap-2">
                    <Atom size={14} className="animate-spin" /> Quantum State Coherence
                 </div>
                 <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-text-breathe bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                    Horalix Accelerates <br/> Hospital Imaging
                 </h1>
              </div>
           </div>
         );

      case Theme.VOID:
      default:
        return (
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-mono font-bold text-white tracking-widest uppercase drop-shadow-[0_0_25px_rgba(255,255,255,1)] mix-blend-difference animate-glitch">
              Horalix Accelerates <br/> Hospital Imaging
            </h1>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
        {renderContent()}
    </div>
  );
};