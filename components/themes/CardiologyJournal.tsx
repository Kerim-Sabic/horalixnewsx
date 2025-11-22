import React from 'react';
import { HeartPulse, Activity } from 'lucide-react';

export const CardiologyJournal: React.FC = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden font-sans text-slate-800">
      {/* ECG Grid Background */}
      <div className="absolute inset-0" style={{ 
         backgroundImage: 'linear-gradient(#fecaca 1px, transparent 1px), linear-gradient(90deg, #fecaca 1px, transparent 1px)', 
         backgroundSize: '40px 40px' 
      }}></div>
      <div className="absolute inset-0" style={{ 
         backgroundImage: 'linear-gradient(#fee2e2 0.5px, transparent 0.5px), linear-gradient(90deg, #fee2e2 0.5px, transparent 0.5px)', 
         backgroundSize: '8px 8px' 
      }}></div>

      {/* Header */}
      <div className="absolute top-0 w-full bg-red-600 text-white p-4 flex justify-between items-center z-10 shadow-lg">
        <div className="font-bold text-xl uppercase tracking-tight flex items-center gap-2">
          <HeartPulse />
          The Heart Journal
        </div>
        <div className="text-xs font-bold bg-red-800 px-2 py-1 rounded">PEER REVIEWED</div>
      </div>

      {/* EKG Animation Line */}
      <div className="absolute top-1/2 left-0 right-0 h-32 -translate-y-1/2 opacity-40 pointer-events-none">
        <svg className="w-full h-full overflow-visible">
          <polyline 
            points="0,50 100,50 120,20 140,80 160,50 300,50 320,10 340,90 360,50 500,50" 
            fill="none" 
            stroke="#ef4444" 
            strokeWidth="3"
            className="animate-dash"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        </svg>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-8 left-8 flex gap-4 text-red-800/60 font-mono text-sm">
        <div className="flex items-center gap-2"><Activity size={16}/> BPM: 72</div>
        <div className="flex items-center gap-2"><Activity size={16}/> O2: 98%</div>
      </div>
    </div>
  );
};