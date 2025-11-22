import React from 'react';
import { Brain, Zap } from 'lucide-react';

export const NeuroJournal: React.FC = () => {
  return (
    <div className="w-full h-full bg-slate-900 text-cyan-100 relative overflow-hidden font-sans">
      {/* Brain Scan Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 10px, #22d3ee 11px, transparent 12px)' 
      }}></div>

      {/* Floating Brain Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-500/20 animate-pulse">
        <Brain size={400} strokeWidth={0.5} />
      </div>

      {/* Header */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center z-10 border-b border-cyan-900/50">
        <div className="flex items-center gap-2 text-cyan-400">
          <Brain size={24} />
          <span className="font-bold uppercase tracking-wider">NeuroScience Today</span>
        </div>
        <div className="text-xs text-cyan-600 font-mono">ISSN 2049-11X</div>
      </div>

      {/* Neural Activity Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,50 Q200,100 400,50 T800,50 T1200,80" fill="none" stroke="#22d3ee" strokeWidth="2" className="animate-dash" strokeDasharray="1000" />
          <path d="M0,80 Q300,20 600,80 T1200,40" fill="none" stroke="#ccfbf1" strokeWidth="1" className="animate-dash" strokeDasharray="800" style={{ animationDuration: '3s' }} />
        </svg>
      </div>
      
      {/* Sidebar Stats */}
      <div className="absolute left-8 top-32 hidden md:block space-y-6">
        <div className="w-1 bg-cyan-900 h-24 relative">
          <div className="absolute bottom-0 w-full bg-cyan-400 animate-scan-vertical h-8"></div>
        </div>
        <div className="text-xs text-cyan-500 font-mono flex items-center gap-2">
          <Zap size={12} /> CORTICAL ACTIVITY
        </div>
      </div>
    </div>
  );
};