import React from 'react';
import { Globe, Clock, MapPin } from 'lucide-react';

export const MainstreamNews: React.FC = () => {
  return (
    <div className="w-full h-full bg-blue-900 relative overflow-hidden font-sans">
      {/* Animated World Map Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center animate-pulse"></div>
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-blue-950"></div>

      {/* Broadcast Overlay UI */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <div className="bg-red-600 text-white font-bold px-3 py-1 text-sm inline-block w-max animate-pulse">
              LIVE BROADCAST
            </div>
            <div className="flex items-center gap-2 text-blue-200 text-xs font-mono">
              <Clock size={12} /> 09:41:22 AM EST
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-60">
            <MapPin size={16} className="text-red-500" />
            <span className="text-white font-bold uppercase tracking-wider text-sm">London • New York • Tokyo</span>
          </div>
        </div>

        {/* Lower Thirds Area */}
        <div className="mb-24 border-l-4 border-yellow-400 pl-4">
          <div className="bg-white/10 backdrop-blur-md p-4 max-w-xl rounded-r-lg">
            <h3 className="text-yellow-400 text-sm font-bold uppercase mb-1">Developing Story</h3>
            <p className="text-white text-lg leading-snug">
              Major breakthroughs reported in global healthcare infrastructure modernization efforts.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-white text-blue-900 font-bold h-12 flex items-center z-20 border-t-4 border-red-600 overflow-hidden">
         <div className="bg-blue-800 text-white px-6 h-full flex items-center z-30 font-black italic text-xl">
           WNN
         </div>
         <div className="flex-1 overflow-hidden whitespace-nowrap">
            <div className="animate-ticker-fast inline-block pl-4">
              <span className="mr-12">BREAKING: HEALTH TECH STOCKS SOAR</span>
              <span className="mr-12">///</span>
              <span className="mr-12">NEW IMAGING PROTOCOLS APPROVED BY FDA</span>
              <span className="mr-12">///</span>
              <span className="mr-12">HOSPITAL WAIT TIMES REDUCED BY 40%</span>
              <span className="mr-12">///</span>
              <span className="mr-12">AI INTEGRATION REACHES 99% ADOPTION</span>
            </div>
         </div>
      </div>
    </div>
  );
};