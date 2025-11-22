import React from 'react';

export const Tabloid: React.FC = () => {
  return (
    <div className="w-full h-full bg-yellow-300 relative overflow-hidden font-news text-black">
      {/* Obnoxious Background Patterns */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}>
      </div>

      {/* Top Banner */}
      <div className="absolute top-0 left-0 right-0 bg-red-600 text-white p-2 text-center z-20 border-b-4 border-black">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase transform -skew-x-12 inline-block bg-black px-4">
          THE DAILY SCOOP
        </h1>
      </div>

      {/* Chaotic Sticker Elements */}
      <div className="absolute top-32 left-10 transform -rotate-12 z-10 hidden md:block">
        <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <span className="text-4xl font-black text-red-600 block text-center">EXCLUSIVE</span>
          <span className="text-sm font-bold text-black block text-center">READ IT HERE FIRST</span>
        </div>
      </div>

      <div className="absolute bottom-20 right-20 transform rotate-6 z-10 hidden md:block">
         <div className="bg-black text-yellow-300 p-6 rounded-full h-32 w-32 flex items-center justify-center text-center font-bold border-4 border-white shadow-xl animate-bounce">
           WOW!
         </div>
      </div>

      {/* Background Headlines */}
      <div className="absolute inset-0 flex flex-wrap content-center justify-center opacity-20 pointer-events-none grayscale">
         <div className="text-8xl font-black leading-none text-center w-full">SHOCKING</div>
         <div className="text-6xl font-black leading-none text-center w-full mt-4">REVEALED</div>
      </div>
    </div>
  );
};