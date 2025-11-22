import React from 'react';
import { BookOpen, Award, Quote } from 'lucide-react';

export const AcademicSummit: React.FC = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden font-serif text-slate-900">
      {/* Clean Header */}
      <div className="absolute top-0 left-0 right-0 p-6 border-b-2 border-slate-900 flex justify-between items-center z-10">
        <div className="font-bold text-xl tracking-tight">Nature <span className="font-light italic text-slate-600">Biomedical Engineering</span></div>
        <div className="text-xs font-sans text-slate-500 uppercase tracking-widest">Volume 12, Issue 4</div>
      </div>

      {/* Background Text Texture */}
      <div className="absolute inset-0 p-12 pt-32 opacity-10 grid grid-cols-2 gap-8 pointer-events-none select-none">
        <div className="text-[6px] md:text-[8px] leading-relaxed text-justify">
           {Array.from({ length: 15 }).map((_, i) => (
             <p key={i} className="mb-4">
               The integration of advanced computational imaging in clinical settings has revolutionized diagnostic throughput. Our study demonstrates a significant reduction in false positives when utilizing the Horalix protocol. Longitudinal analysis suggests a paradigm shift in how radiological data is interpreted, moving from qualitative assessment to quantitative feature extraction.
             </p>
           ))}
        </div>
        <div className="text-[6px] md:text-[8px] leading-relaxed text-justify hidden md:block">
           {Array.from({ length: 15 }).map((_, i) => (
             <p key={i} className="mb-4">
               Furthermore, the latency reduction in image reconstruction allows for real-time surgical guidance. This capability was previously limited by hardware constraints. The new framework leverages distributed processing to achieve sub-second latency. Peer reviews confirm the efficacy of this approach across multiple clinical trials.
             </p>
           ))}
        </div>
      </div>

      {/* Visual Accents */}
      <div className="absolute bottom-12 left-12 text-slate-400 flex gap-4">
        <Quote size={24} />
        <Award size={24} />
        <BookOpen size={24} />
      </div>
      
      <div className="absolute bottom-12 right-12 bg-slate-100 p-4 rounded border border-slate-200 text-xs text-slate-500 w-48 font-sans">
        <div className="font-bold text-slate-900 mb-1">Key Figures</div>
        <div className="flex justify-between"><span>Methodology</span> <span>p&lt;0.001</span></div>
        <div className="flex justify-between"><span>Sample Size</span> <span>n=14,200</span></div>
      </div>
    </div>
  );
};