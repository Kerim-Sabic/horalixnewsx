import React from 'react';
import { Microscope, CircleDot } from 'lucide-react';

export const OncologyJournal: React.FC = () => {
  return (
    <div className="w-full h-full bg-purple-50 relative overflow-hidden font-serif text-purple-900">
      {/* Cell Pattern Background */}
      <div className="absolute inset-0 opacity-10 flex flex-wrap content-start p-4 gap-4">
         {Array.from({ length: 40 }).map((_, i) => (
           <div key={i} className="w-16 h-16 rounded-full border-4 border-purple-400 flex items-center justify-center">
             <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
           </div>
         ))}
      </div>

      {/* Header */}
      <div className="absolute top-0 w-full border-b border-purple-200 bg-white/50 backdrop-blur-sm p-6 z-10">
         <div className="flex justify-center items-center gap-3 text-purple-800">
           <Microscope size={24} />
           <span className="font-bold text-lg tracking-widest uppercase">Clinical Oncology Reviews</span>
         </div>
      </div>

      {/* Abstract Blob Shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Side Text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block text-right">
         <div className="text-xs font-sans text-purple-400 uppercase mb-2 tracking-widest">Cellular Markers</div>
         <div className="flex flex-col gap-2 items-end">
           {['CD45+', 'CD20-', 'Ki-67 High', 'p53 Mut'].map((m, i) => (
             <div key={i} className="bg-white border border-purple-100 px-3 py-1 rounded-full text-xs shadow-sm text-purple-600 flex items-center gap-2">
                <CircleDot size={10} className="text-purple-400"/> {m}
             </div>
           ))}
         </div>
      </div>
    </div>
  );
};