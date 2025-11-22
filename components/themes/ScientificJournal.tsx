import React from 'react';
import { BookOpen, Share2, Download } from 'lucide-react';

export const ScientificJournal: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#fdfbf7] relative overflow-hidden font-serif text-slate-800">
      {/* Paper Texture */}
      <div className="absolute inset-0 opacity-50 mix-blend-multiply" style={{ 
         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")` 
       }}></div>

      {/* Header Strip */}
      <div className="absolute top-0 w-full border-b border-slate-200 bg-white py-3 px-8 flex justify-between items-center z-20">
        <div className="text-xl font-black tracking-tighter text-slate-900">Science<span className="text-slate-500 font-light">Daily</span></div>
        <div className="hidden md:flex text-xs text-slate-500 gap-6 uppercase tracking-widest font-sans">
          <span>Journals</span>
          <span>Topics</span>
          <span>Articles</span>
          <span>Submit</span>
        </div>
      </div>

      {/* Fake Abstract Background Content - ANIMATED DRIFT */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-10 pointer-events-none scale-110 blur-sm animate-slow-pan" style={{ animationDuration: '30s' }}>
         <div className="max-w-4xl w-full text-justify text-xs space-y-4">
           {Array.from({length: 20}).map((_, i) => (
             <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
           ))}
         </div>
      </div>

      {/* Right Sidebar (Citations) */}
      <div className="absolute right-0 top-20 bottom-0 w-64 border-l border-slate-200 bg-white/50 p-6 hidden xl:block">
        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Metrics</div>
        <div className="space-y-4">
          <div>
            <div className="text-3xl font-bold text-slate-800">14k</div>
            <div className="text-[10px] text-slate-500 uppercase">Citations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-800">9.8</div>
            <div className="text-[10px] text-slate-500 uppercase">Impact Factor</div>
          </div>
        </div>
        <div className="mt-12 flex gap-4 text-slate-400">
          <Share2 size={16}/>
          <Download size={16}/>
          <BookOpen size={16}/>
        </div>
      </div>
    </div>
  );
};