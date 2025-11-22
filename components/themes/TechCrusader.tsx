import React from 'react';
import { Smartphone, Cpu, Wifi } from 'lucide-react';

export const TechCrusader: React.FC = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden font-sans text-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-orange-50 opacity-50"></div>
      
      {/* Abstract Geometric Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-slow-pan"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-slow-pan" style={{ animationDirection: 'reverse' }}></div>

      {/* Navbar */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center z-10">
         <div className="font-black text-2xl tracking-tighter italic">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600">VERGE</span>
           <span className="text-black not-italic">CAST</span>
         </div>
         <div className="hidden md:flex gap-6 font-bold text-xs uppercase tracking-widest">
           <span className="hover:text-pink-600 cursor-pointer">Reviews</span>
           <span className="hover:text-pink-600 cursor-pointer">Science</span>
           <span className="hover:text-pink-600 cursor-pointer">Creators</span>
           <span className="hover:text-pink-600 cursor-pointer">Entertainment</span>
         </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 left-10 animate-float hidden md:block">
         <div className="bg-black text-white p-4 rounded-xl shadow-xl rotate-[-6deg]">
            <Smartphone size={32} className="mb-2 text-pink-500" />
            <div className="font-bold text-lg leading-none">Next Gen</div>
            <div className="text-xs text-gray-400">Hardware Review</div>
         </div>
      </div>

      <div className="absolute bottom-1/3 right-10 animate-float hidden md:block" style={{ animationDelay: '1s' }}>
         <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 rotate-[6deg]">
            <Cpu size={32} className="mb-2 text-orange-500" />
            <div className="font-bold text-lg leading-none text-black">M4 Ultra</div>
            <div className="text-xs text-gray-500">Benchmark leak</div>
         </div>
      </div>
    </div>
  );
};