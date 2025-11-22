import React from 'react';
import { TrendingUp, TrendingDown, ArrowUp, ArrowDown, Globe } from 'lucide-react';

export const FinancialNews: React.FC = () => {
  const stocks = [
    { sym: 'HORA', price: '450.22', change: '+12.4%', up: true },
    { sym: 'IMAG', price: '1,202.00', change: '+5.1%', up: true },
    { sym: 'NASDAQ', price: '18,292.10', change: '-0.4%', up: false },
    { sym: 'TECH', price: '89.20', change: '+2.1%', up: true },
    { sym: 'MEDX', price: '34.50', change: '-1.2%', up: false },
    { sym: 'GOVT', price: '102.11', change: '+0.01%', up: true },
    { sym: 'AI', price: '999.99', change: '+45.0%', up: true },
  ];

  const forex = [
    { sym: 'EUR/USD', price: '1.082', change: '+0.1%', up: true },
    { sym: 'USD/JPY', price: '145.2', change: '-0.3%', up: false },
    { sym: 'GBP/USD', price: '1.240', change: '+0.2%', up: true },
    { sym: 'BTC/USD', price: '64,200', change: '+3.2%', up: true },
    { sym: 'ETH/USD', price: '3,400', change: '+2.1%', up: true },
  ];

  return (
    <div className="w-full h-full bg-zinc-100 flex flex-col font-news relative overflow-hidden">
      {/* Lower Banner Layer */}
      <div className="absolute inset-0 z-0 bg-white overflow-hidden">
        {/* Giant background text with subtle movement */}
        <div className="absolute top-20 left-0 text-[200px] font-bold text-zinc-100 leading-none select-none animate-slow-pan-x">
          MARKET
        </div>
        <div className="absolute bottom-20 right-0 text-[200px] font-bold text-zinc-100 leading-none select-none text-right animate-slow-pan-x" style={{ animationDirection: 'reverse' }}>
          RALLY
        </div>
      </div>

      {/* Breaking News Header */}
      <div className="bg-red-700 text-white p-2 px-6 flex items-center gap-4 z-10 shadow-lg">
        <span className="bg-white text-red-700 px-2 py-0.5 text-sm font-bold animate-pulse">LIVE</span>
        <span className="text-xl font-bold uppercase tracking-wider">Global Markets Surge on Imaging Breakthrough</span>
      </div>

      {/* Main Content Area - surrounding center */}
      <div className="flex-1 relative z-10 p-8">
        
        {/* Left Graphics */}
        <div className="absolute top-10 left-10 w-64 bg-zinc-900 text-white p-4 shadow-xl hidden md:block border-l-4 border-green-500">
           <h3 className="text-sm text-zinc-400 mb-2 uppercase">Horalix Stock</h3>
           <div className="flex items-end gap-2">
             <span className="text-4xl font-bold text-green-500">450.22</span>
             <span className="text-lg text-green-500 mb-1 flex items-center"><ArrowUp size={20} className="animate-bounce"/> 12%</span>
           </div>
           <div className="h-16 mt-4 flex items-end gap-1 opacity-80">
             {[40, 60, 45, 70, 85, 90, 100].map((h, i) => (
               <div key={i} style={{ height: `${h}%`}} className="flex-1 bg-green-500"></div>
             ))}
           </div>
        </div>

        {/* Right Headlines */}
        <div className="absolute bottom-32 right-10 max-w-sm text-right hidden md:block">
           <div className="bg-yellow-400 text-black inline-block px-2 font-bold mb-2 animate-pulse">JUST IN</div>
           <h2 className="text-4xl font-bold text-black leading-tight bg-white/80 p-2 shadow-sm">
             HOSPITAL EFFICIENCY UP 300%
           </h2>
           <p className="bg-zinc-900 text-white p-2 mt-2 inline-block">
             Analysts call it "The dawn of a new era"
           </p>
        </div>
      </div>

      {/* Dual Ticker Tape */}
      <div className="bg-zinc-900 text-white py-1 z-20 border-t-4 border-yellow-400 flex flex-col gap-0.5">
        {/* Primary Ticker */}
        <div className="overflow-hidden whitespace-nowrap bg-zinc-900/50">
          <div className="inline-block animate-ticker-fast">
            {[...stocks, ...stocks, ...stocks, ...stocks].map((stock, i) => (
              <span key={i} className="inline-flex items-center mx-6 font-mono text-lg">
                <span className="font-bold text-zinc-400 mr-2">{stock.sym}</span>
                <span className="mr-2">{stock.price}</span>
                <span className={`flex items-center ${stock.up ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.up ? <TrendingUp size={16} className="mr-1 animate-pulse"/> : <TrendingDown size={16} className="mr-1"/>}
                  {stock.change}
                </span>
              </span>
            ))}
          </div>
        </div>
        
        {/* Secondary Reverse Ticker */}
        <div className="overflow-hidden whitespace-nowrap bg-zinc-800">
          <div className="inline-block animate-ticker-fast-reverse">
             {[...forex, ...forex, ...forex, ...forex, ...forex].map((fx, i) => (
               <span key={i} className="inline-flex items-center mx-6 font-mono text-sm text-zinc-300">
                 <span className="font-bold text-zinc-500 mr-2">{fx.sym}</span>
                 <span className="mr-2">{fx.price}</span>
                 <span className={`flex items-center ${fx.up ? 'text-green-400' : 'text-red-400'}`}>
                   {fx.change}
                 </span>
               </span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};