import React from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';

export const CryptoExchange: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#050510] relative overflow-hidden font-mono text-green-400">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* Rapid Numbers Background */}
      <div className="absolute inset-0 opacity-10 flex flex-col text-[10px] overflow-hidden select-none">
         {Array.from({ length: 50 }).map((_, i) => (
           <div key={i} className="whitespace-nowrap animate-ticker-fast" style={{ animationDuration: `${2 + Math.random() * 3}s` }}>
             {Array.from({ length: 20 }).map((_, j) => (
               <span key={j} className="mr-8">
                 {Math.random() > 0.5 ? 'BUY' : 'SELL'} {(Math.random() * 10000).toFixed(2)}
               </span>
             ))}
           </div>
         ))}
      </div>

      {/* Neon Charts */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-30">
         <svg className="w-full h-full" preserveAspectRatio="none">
           <polyline points="0,200 100,150 200,180 300,100 400,120 500,50 600,80 700,20 800,100 900,40 1000,0" fill="none" stroke="#22c55e" strokeWidth="2" vectorEffect="non-scaling-stroke" className="animate-dash" strokeDasharray="1000" />
           <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
           </linearGradient>
           <polygon points="0,200 100,150 200,180 300,100 400,120 500,50 600,80 700,20 800,100 900,40 1000,0 1000,300 0,300" fill="url(#grad)" opacity="0.3" />
         </svg>
      </div>

      {/* Floating Coins */}
      <div className="absolute top-1/4 left-10 text-purple-500 font-bold text-2xl animate-bounce">ETH</div>
      <div className="absolute top-1/3 right-20 text-yellow-500 font-bold text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>BTC</div>
      <div className="absolute bottom-1/4 left-1/3 text-blue-500 font-bold text-lg animate-bounce" style={{ animationDelay: '1s' }}>SOL</div>

      {/* Header */}
      <div className="absolute top-0 w-full flex justify-center bg-black/50 border-b border-green-900/50 backdrop-blur p-2 z-10">
         <div className="flex gap-8 text-xs font-bold">
            <span className="text-green-500 flex items-center gap-1"><TrendingUp size={12}/> MARKET CAP: $2.4T</span>
            <span className="text-slate-400">24H VOL: $90B</span>
         </div>
      </div>
    </div>
  );
};