import React from 'react';
import { CloudRain, Thermometer, Wind } from 'lucide-react';

export const ClimateData: React.FC = () => {
  return (
    <div className="w-full h-full bg-slate-900 relative overflow-hidden font-sans text-white">
      {/* Heatmap Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900 opacity-80"></div>
      <div className="absolute inset-0 mix-blend-overlay opacity-30 animate-slow-pan" style={{
         backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
         backgroundSize: 'cover'
      }}></div>

      {/* Data Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      {/* Side Scale */}
      <div className="absolute right-4 top-20 bottom-20 w-4 rounded-full bg-gradient-to-b from-red-500 via-yellow-400 to-blue-500 border border-white/20 hidden md:block">
         <div className="absolute -left-8 top-0 text-xs font-bold">+2.0°</div>
         <div className="absolute -left-8 bottom-0 text-xs font-bold">-1.5°</div>
      </div>

      {/* Floating Data Points */}
      <div className="absolute top-1/3 left-1/4 p-2 bg-black/40 backdrop-blur rounded text-xs animate-float">
         <div className="flex items-center gap-2 text-orange-300 mb-1"><Thermometer size={12}/> OCEAN TEMP</div>
         <div className="text-xl font-bold">18.4°C</div>
      </div>

      <div className="absolute bottom-1/3 right-1/3 p-2 bg-black/40 backdrop-blur rounded text-xs animate-float" style={{ animationDelay: '1.5s' }}>
         <div className="flex items-center gap-2 text-blue-300 mb-1"><Wind size={12}/> JET STREAM</div>
         <div className="text-xl font-bold">140 kts</div>
      </div>
      
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent flex justify-between">
         <div className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            Climate Anomaly Monitoring
         </div>
      </div>
    </div>
  );
};