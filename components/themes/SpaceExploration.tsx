import React from 'react';
import { Satellite, Radio } from 'lucide-react';

export const SpaceExploration: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0b0d17] text-white relative overflow-hidden font-tech">
      {/* Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-10 animate-slow-pan"></div>

      {/* Orbital Paths */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

      {/* Telemetry Data */}
      <div className="absolute bottom-10 left-10 flex gap-8 text-xs font-mono text-yellow-400/80">
         <div>
            <div className="text-white/50 mb-1">VELOCITY</div>
            <div className="text-xl">27,500 km/h</div>
         </div>
         <div>
            <div className="text-white/50 mb-1">ALTITUDE</div>
            <div className="text-xl">408 km</div>
         </div>
         <div>
            <div className="text-white/50 mb-1">SIGNAL</div>
            <div className="flex gap-1 items-end h-6">
               <div className="w-1 h-2 bg-yellow-400"></div>
               <div className="w-1 h-3 bg-yellow-400"></div>
               <div className="w-1 h-4 bg-yellow-400"></div>
               <div className="w-1 h-6 bg-yellow-400 animate-pulse"></div>
            </div>
         </div>
      </div>

      {/* Top Right UI */}
      <div className="absolute top-10 right-10 text-right">
         <div className="flex items-center justify-end gap-2 text-sm font-bold uppercase tracking-widest text-blue-300 mb-2">
            <Satellite size={16} /> Orbital Link Active
         </div>
         <div className="h-px w-32 bg-blue-500/50 ml-auto"></div>
         <div className="text-[10px] font-mono text-blue-400 mt-1">
            T+ 14:02:01:99
         </div>
      </div>
    </div>
  );
};