import React from 'react';

export const VintagePaper: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#e8dfc8] text-[#2c241b] relative overflow-hidden font-serif">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ 
         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` 
       }}></div>
       
       {/* Subtle Light Flicker */}
       <div className="absolute inset-0 bg-yellow-900/5 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>

      {/* Classic Header */}
      <div className="flex flex-col items-center pt-6 border-b-4 border-double border-[#2c241b] mx-8 pb-2">
        <div className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-1 font-news">The Daily Chronicle</div>
        <div className="w-full flex justify-between text-xs border-t border-b border-[#2c241b] py-1 font-sans font-bold uppercase">
          <span>Vol. XCII No. 14,222</span>
          <span>Late Edition</span>
          <span>Price Two Cents</span>
        </div>
      </div>

      {/* Columns Background */}
      <div className="absolute inset-0 top-40 px-8 grid grid-cols-3 gap-4 opacity-20 pointer-events-none text-justify text-[8px] leading-tight overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-full">
             {Array.from({ length: 20 }).map((_, j) => (
               <p key={j} className="mb-2">Yesterday, reports flooded in regarding the unprecedented shift in hospital imaging protocols. Experts from across the globe convened in Geneva to discuss the implications of the new Horalix system. "It is truly a marvel of the modern age," stated one physician.</p>
             ))}
          </div>
        ))}
      </div>
    </div>
  );
};