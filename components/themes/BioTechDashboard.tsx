import React from 'react';
import { Hexagon } from 'lucide-react';

export const BioTechDashboard: React.FC = () => {
  return (
    <div className="w-full h-full bg-slate-50 relative overflow-hidden font-sans text-emerald-800">
      {/* Hexagonal Background Pattern */}
      <div className="absolute inset-0 opacity-5 flex flex-wrap gap-2 p-4 justify-center content-center animate-slow-pan" style={{ backgroundSize: '150% 150%' }}>
         {Array.from({ length: 50 }).map((_, i) => (
           <Hexagon key={i} size={48} className="text-emerald-600" />
         ))}
      </div>

      {/* Left Gradient Bar */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-emerald-400 to-teal-600 z-20"></div>

      {/* Header Elements */}
      <div className="absolute top-8 left-8 z-10">
        <h3 className="font-bold text-emerald-600 tracking-widest text-xs uppercase mb-1">Molecular Analysis</h3>
        <div className="h-1 w-12 bg-emerald-400 animate-pulse"></div>
      </div>

      <div className="absolute top-8 right-8 z-10 text-right">
        <div className="text-3xl font-light text-emerald-900">99.8%</div>
        <div className="text-[10px] uppercase tracking-wider text-emerald-600">Match Confidence</div>
      </div>

      {/* Floating DNA Segments (Visual Decoration) */}
      <div className="absolute bottom-10 left-10 right-10 h-24 flex items-end justify-between gap-1 opacity-30">
        {Array.from({ length: 40 }).map((_, i) => (
           <div 
            key={i} 
            className="w-full bg-emerald-500 rounded-t-sm animate-pulse" 
            style={{ 
              height: `${30 + Math.random() * 70}%`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: '2s'
            }}
           ></div>
        ))}
      </div>
    </div>
  );
};