import React from 'react';

export const LifestyleMag: React.FC = () => {
  return (
    <div className="w-full h-full bg-white text-black relative overflow-hidden font-serif">
      {/* Elegant framing */}
      <div className="absolute top-0 left-0 right-0 h-32 flex justify-center items-center z-10">
        <div className="text-5xl md:text-7xl font-black tracking-tighter opacity-5 pointer-events-none">MODERN</div>
      </div>

      {/* Vertical Line Decor */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-black/10 hidden md:block"></div>
      <div className="absolute top-0 bottom-0 right-12 w-px bg-black/10 hidden md:block"></div>

      {/* Abstract Shape */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-[40%] bg-stone-100 z-0 animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-stone-50 z-0 animate-[pulse_10s_ease-in-out_infinite]"></div>

      {/* Category Tag */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] font-sans tracking-[0.4em] uppercase border border-black px-3 py-1">
        Health & Future
      </div>
    </div>
  );
};