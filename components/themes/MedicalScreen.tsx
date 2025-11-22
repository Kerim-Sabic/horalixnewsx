import React from 'react';
import { Activity, Heart, Dna, FileText, ScanLine } from 'lucide-react';

export const MedicalScreen: React.FC = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden p-6 font-sans text-slate-800">
      {/* Heavy vignette for center text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(255,255,255,0.8)_60%)] pointer-events-none z-10"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 flex flex-wrap opacity-5 pointer-events-none">
         {Array.from({ length: 40 }).map((_, i) => (
           <div key={i} className="w-1/4 h-32 border border-cyan-500"></div>
         ))}
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full bg-cyan-50 p-4 border-b-4 border-cyan-500 flex justify-between items-center z-0">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500 text-white p-2 rounded animate-pulse">
            <Activity />
          </div>
          <div>
            <h2 className="text-xl font-bold text-cyan-900 uppercase">Horalix Imaging Systems</h2>
            <p className="text-xs text-cyan-600 tracking-wider">CLINICAL DIAGNOSTIC OUTPUT // ID: 49201-X</p>
          </div>
        </div>
        <div className="text-right hidden md:block">
           <div className="text-3xl font-light text-cyan-500">98.2<span className="text-sm text-slate-400">%</span></div>
           <div className="text-xs text-slate-400">ACCURACY RATE</div>
        </div>
      </div>

      {/* Side columns pretending to be data lists */}
      <div className="absolute top-24 left-6 bottom-6 w-64 hidden lg:flex flex-col gap-4">
        <div className="bg-slate-50 border border-slate-200 p-4 rounded shadow-sm flex-1">
           <div className="flex items-center gap-2 text-cyan-700 mb-3 border-b pb-2">
             <FileText size={16} /> <span className="font-bold text-xs">PATIENT RECORDS</span>
           </div>
           {Array.from({ length: 12 }).map((_, i) => (
             <div key={i} className="flex justify-between text-[10px] py-1 border-b border-slate-100 text-slate-500">
               <span>REC_{8000 + i}</span>
               <span className="text-cyan-600">PROCESSED</span>
             </div>
           ))}
        </div>
        <div className="bg-red-50 border border-red-100 p-4 rounded shadow-sm h-1/3">
           <div className="flex items-center gap-2 text-red-700 mb-2">
             <Heart size={16} className="animate-ping" style={{ animationDuration: '1.5s' }} /> <span className="font-bold text-xs">VITALS MONITOR</span>
           </div>
           <svg className="w-full h-12 stroke-red-500 fill-none stroke-2" viewBox="0 0 100 20">
             <path d="M0,10 L20,10 L25,2 L30,18 L35,10 L100,10" strokeDasharray="100" strokeDashoffset="100" className="animate-dash" />
           </svg>
        </div>
      </div>

      <div className="absolute top-24 right-6 bottom-6 w-80 hidden lg:flex flex-col gap-4">
        <div className="bg-slate-50 border border-slate-200 p-4 rounded shadow-sm h-1/2 overflow-hidden relative">
           <div className="flex items-center gap-2 text-indigo-700 mb-3 border-b pb-2 relative z-10 bg-slate-50">
             <Dna size={16} /> <span className="font-bold text-xs">GENOMIC SEQUENCING</span>
           </div>
           <div className="grid grid-cols-4 gap-1 text-[9px] font-mono text-indigo-400 animate-scan-vertical">
             {Array.from({ length: 120 }).map((_, i) => (
               <span key={i}>{['A','C','G','T'][Math.floor(Math.random()*4)]}</span>
             ))}
           </div>
        </div>
        
        {/* Fake Scan Image */}
        <div className="flex-1 bg-black rounded p-1 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/400/600?grayscale')] opacity-40 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute top-0 w-full h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] animate-scan-vertical"></div>
          <ScanLine className="text-cyan-400 w-12 h-12 opacity-50" />
          <div className="absolute bottom-2 left-2 text-xs text-cyan-400 font-mono animate-pulse">SCANNING...</div>
        </div>
      </div>

    </div>
  );
};