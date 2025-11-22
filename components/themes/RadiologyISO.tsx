import React from 'react';
import { Maximize2, Settings, Sliders, Contrast } from 'lucide-react';

export const RadiologyISO: React.FC = () => {
  return (
    <div className="w-full h-full bg-black text-zinc-400 font-sans relative overflow-hidden">
      {/* Grid of "Scans" */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 p-1 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 relative overflow-hidden group">
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] ${i % 3 === 0 ? 'bg-zinc-800' : ''}`}></div>
            <div className="absolute top-2 left-2 text-[8px] font-mono text-zinc-500 group-hover:text-white transition-colors">IMG_SEQ_{2000 + i}</div>
          </div>
        ))}
      </div>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-white/5 h-8 w-full blur-md animate-scan-vertical pointer-events-none z-0"></div>

      {/* UI Overlays */}
      <div className="absolute top-0 w-full bg-zinc-900/80 border-b border-zinc-700 p-2 flex justify-between items-center z-10 backdrop-blur-sm">
        <div className="flex gap-4 text-xs font-bold text-zinc-300">
          <span className="text-white animate-pulse">VIEWER_MODE</span>
          <span>HISTOGRAM</span>
          <span>ANNOTATION</span>
        </div>
        <div className="flex gap-2">
          <Contrast size={14} />
          <Sliders size={14} />
          <Settings size={14} />
        </div>
      </div>

      {/* Side Tools */}
      <div className="absolute left-0 top-10 bottom-0 w-12 bg-zinc-900/80 border-r border-zinc-700 flex flex-col items-center py-4 gap-6 z-10 backdrop-blur-sm hidden md:flex">
        <Maximize2 size={16} />
        <div className="w-8 h-px bg-zinc-700"></div>
        {['WL', 'ZM', 'PN', 'RT'].map((t) => (
          <div key={t} className="text-[10px] font-mono border border-zinc-600 px-1 rounded hover:bg-zinc-700 transition-colors cursor-pointer">{t}</div>
        ))}
      </div>
    </div>
  );
};