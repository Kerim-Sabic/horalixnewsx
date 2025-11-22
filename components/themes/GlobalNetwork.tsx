import React from 'react';
import { Globe, Clock } from 'lucide-react';

export const GlobalNetwork: React.FC = () => {
  return (
    <div className="w-full h-full bg-blue-950 relative overflow-hidden font-sans text-white">
      {/* World Map Background - ANIMATED PAN */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center animate-slow-pan" style={{ animationDirection: 'reverse', animationDuration: '80s' }}></div>
      
      {/* Glassy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/60"></div>

      {/* Main Graphic Elements */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-800 to-blue-900 flex items-center px-8 justify-between border-b border-blue-700 z-10">
        <div className="flex items-center gap-2">
          <div className="bg-white text-blue-900 font-black text-lg px-2 rounded-sm">WNN</div>
          <div className="text-xs font-bold tracking-widest uppercase">World News Now</div>
        </div>
        <div className="flex items-center gap-4 text-sm font-mono">
           <span className="flex items-center gap-1 text-red-500 animate-pulse"><div className="w-2 h-2 bg-red-500 rounded-full"></div> LIVE</span>
           <span className="flex items-center gap-1 text-blue-200"><Clock size={14}/> {new Date().toLocaleTimeString()} UTC</span>
        </div>
      </div>

      {/* Lower Thirds Background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white text-blue-900 z-20 flex">
        <div className="w-32 bg-blue-800 h-full flex items-center justify-center text-white font-black text-4xl italic">
          WNN
        </div>
        <div className="flex-1 flex flex-col justify-center px-8 border-t-4 border-red-600">
           <div className="text-red-600 font-bold uppercase text-sm mb-1 flex items-center gap-2">
             <Globe size={16}/> Breaking News
           </div>
           <div className="h-8 bg-slate-200 w-full mb-2 animate-pulse rounded"></div>
           <div className="h-4 bg-slate-100 w-2/3 rounded"></div>
        </div>
      </div>

      {/* Floating Graphics */}
      <div className="absolute top-1/3 right-10 w-64 h-40 border border-blue-500/30 bg-blue-900/20 backdrop-blur rounded p-4 hidden md:block animate-float">
         <div className="text-xs text-blue-300 uppercase mb-2">Market Impact</div>
         <div className="flex gap-1 h-24 items-end">
           {[40, 55, 45, 70, 60, 85, 95].map((h, i) => (
             <div key={i} className="flex-1 bg-blue-500/80 hover:bg-blue-400 transition-colors" style={{ height: `${h}%` }}></div>
           ))}
         </div>
      </div>
    </div>
  );
};