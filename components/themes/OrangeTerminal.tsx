import React from 'react';

export const OrangeTerminal: React.FC = () => {
  return (
    <div className="w-full h-full bg-black relative overflow-hidden font-mono text-[#ff6600] animate-crt-flicker">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%]"></div>

      {/* Top Status Bar */}
      <div className="bg-[#ff6600] text-black px-2 py-1 text-xs font-bold flex justify-between">
        <span className="animate-pulse">TERMINAL_04 [CONNECTED]</span>
        <span>MARKET_DATA_FEED</span>
      </div>

      {/* Main Layout */}
      <div className="p-4 grid grid-cols-12 gap-4 h-full opacity-80">
        {/* Left Column: Indices */}
        <div className="col-span-3 border-r border-[#ff6600]/30 hidden md:block">
          <div className="text-xs border-b border-[#ff6600] mb-2">INDICES</div>
          {['SPX', 'NDX', 'DJI', 'RUT', 'VIX'].map((ticker, i) => (
            <div key={i} className="flex justify-between text-xs mb-1">
              <span>{ticker}</span>
              <span>{(Math.random() * 4000).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* Right Column: News Feed Background */}
        <div className="col-span-9 relative">
          <div className="absolute top-0 right-0 text-[10px] bg-[#ff6600]/20 px-2 rounded animate-pulse">REAL-TIME</div>
          
          {/* Background Data Stream */}
          <div className="mt-8 text-[10px] space-y-1 opacity-50">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="truncate">
                <span className="animate-pulse inline-block w-2 h-4 bg-[#ff6600] mr-1 align-middle opacity-50"></span>
                {new Date().toLocaleTimeString()} :: TRADING HALT SUSPENDED FOR SYMBOL HRLX :: VOLUME SPIKE DETECTED
              </div>
            ))}
            <div className="animate-pulse font-bold">_</div>
          </div>
        </div>
      </div>
    </div>
  );
};