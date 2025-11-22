import React from 'react';
import { Scale, Shield, FileText } from 'lucide-react';

export const LegalBrief: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#fdfdfd] relative overflow-hidden font-serif text-slate-800">
      {/* Subtle Shine Effect */}
      <div className="absolute inset-0 animate-shine opacity-30 pointer-events-none z-0"></div>
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
         <Scale size={400} />
      </div>

      {/* Border Frame */}
      <div className="absolute inset-4 border-2 border-slate-800 pointer-events-none"></div>
      <div className="absolute inset-5 border border-slate-300 pointer-events-none"></div>

      {/* Header Info */}
      <div className="absolute top-12 left-12 right-12 flex justify-between items-start z-10">
         <div>
           <div className="uppercase tracking-[0.2em] text-xs font-bold text-slate-500 mb-1">United States Patent Office</div>
           <div className="text-xl font-bold text-slate-900 font-sans">Patent Application Publication</div>
         </div>
         <div className="text-right font-mono text-xs text-slate-600">
           <div>US 2025/0092821 A1</div>
           <div>Sep. 14, 2025</div>
         </div>
      </div>

      {/* Columns */}
      <div className="absolute top-32 bottom-12 left-12 right-12 grid grid-cols-2 gap-8 opacity-20 pointer-events-none text-[9px] leading-loose text-justify">
         <div>
            {Array.from({ length: 8 }).map((_, i) => (
              <p key={i} className="mb-4">
                [00{i + 31}] A system and method for accelerated imaging in a hospital environment comprising: a data acquisition unit configured to receive raw sensor data; a processing unit comprising a neural network trained on a dataset of high-resolution scans; and an output display. The system reduces latency by a factor of 10x while maintaining diagnostic fidelity.
              </p>
            ))}
         </div>
         <div className="hidden md:block">
            <div className="border border-slate-800 p-4 mb-4">
               <div className="text-center uppercase text-[8px] mb-2">Fig. 1A</div>
               <div className="h-32 border border-dashed border-slate-400 flex items-center justify-center">
                  <div className="w-16 h-16 border border-slate-800 rounded-full"></div>
               </div>
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <p key={i} className="mb-4">
                [00{i + 45}] The embodiment described herein is illustrative only. Modifications may be made without departing from the scope of the invention. The method further comprises a feedback loop for continuous calibration of the imaging sensors based on real-time patient data.
              </p>
            ))}
         </div>
      </div>
    </div>
  );
};