import React from 'react';
import { ShieldAlert, Lock, Terminal } from 'lucide-react';

export const CyberSecurity: React.FC = () => {
  return (
    <div className="w-full h-full bg-black text-red-600 relative overflow-hidden font-mono">
      {/* Map Grid */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'linear-gradient(#330000 1px, transparent 1px), linear-gradient(90deg, #330000 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Scrolling Grid Animation */}
      <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover opacity-10 mix-blend-overlay animate-pulse"></div>

      {/* Scrolling Logs */}
      <div className="absolute left-0 top-0 bottom-0 w-64 bg-black/50 border-r border-red-900/50 p-4 text-[10px] overflow-hidden hidden md:block">
         <div className="text-red-500 font-bold border-b border-red-800 mb-2 pb-1">THREAT_LOG_LIVE</div>
         <div className="space-y-1 opacity-70 animate-scan-vertical">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="flex justify-between">
                 <span>{Math.floor(Math.random()*255)}.{Math.floor(Math.random()*255)}.{Math.floor(Math.random()*255)}.{Math.floor(Math.random()*255)}</span>
                 <span className="text-red-400">BLOCKED</span>
              </div>
            ))}
         </div>
      </div>

      {/* Center Overlay Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border border-red-900/30 rounded flex items-center justify-center pointer-events-none">
         <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600"></div>
         <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600"></div>
         <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600"></div>
         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600"></div>
      </div>

      {/* Header Warning */}
      <div className="absolute top-4 right-4 flex items-center gap-2 text-red-500 animate-pulse">
         <ShieldAlert size={24} />
         <span className="font-bold tracking-widest">DEFCON 3</span>
      </div>
    </div>
  );
};