import React from 'react';
import { Terminal, Cpu, Database, Network, Globe, Activity } from 'lucide-react';

const RandomHexBlock = () => (
  <div className="font-mono text-[10px] text-green-500/60 leading-tight">
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i}>{Math.random().toString(16).substring(2, 14).toUpperCase()}</div>
    ))}
  </div>
);

export const TechInterface: React.FC = () => {
  return (
    <div className="w-full h-full bg-slate-950 relative overflow-hidden flex flex-col justify-between p-8 font-mono">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20 animate-slow-pan" 
           style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Top Bar */}
      <div className="flex justify-between items-start z-10">
        <div className="flex gap-4 items-center border-b border-green-500/30 pb-2 w-1/3">
          <Terminal className="text-green-500 w-6 h-6 animate-pulse" />
          <span className="text-green-500 text-xs tracking-widest">SYS_ROOT_ACCESS // V.9.0.2</span>
        </div>
        <div className="text-right">
          <span className="text-slate-400 text-xs block">SERVER_TIME</span>
          <span className="text-green-400 text-xl font-bold">{new Date().toISOString().split('T')[1]}</span>
        </div>
      </div>

      {/* Floating UI Elements scattered around center */}
      <div className="absolute top-1/4 left-10 w-64 border border-green-900/50 bg-black/40 p-4 rounded backdrop-blur-sm hidden md:block animate-float">
        <div className="flex items-center gap-2 mb-2 text-green-400 border-b border-green-900 pb-1">
          <Database size={14} />
          <span className="text-xs font-bold">DATA_STREAM_01</span>
        </div>
        <RandomHexBlock />
      </div>

      <div className="absolute bottom-1/4 right-10 w-72 border border-blue-900/50 bg-black/40 p-4 rounded backdrop-blur-sm hidden md:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="flex items-center gap-2 mb-2 text-blue-400 border-b border-blue-900 pb-1">
          <Network size={14} />
          <span className="text-xs font-bold">NODE_CONNECTIVITY</span>
        </div>
        <div className="flex justify-between text-xs text-blue-200 mt-2">
          <span>US-EAST-1</span>
          <span className="text-green-400 animate-pulse">ONLINE</span>
        </div>
        <div className="w-full bg-blue-900/30 h-1 mt-1 mb-2">
          <div className="bg-blue-400 h-full w-3/4 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/50 w-full h-full animate-pulse"></div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-blue-200">
          <span>EU-WEST-4</span>
          <span className="text-yellow-400">LATENCY_HIGH</span>
        </div>
         <div className="w-full bg-blue-900/30 h-1 mt-1">
          <div className="bg-yellow-400 h-full w-1/3"></div>
        </div>
      </div>

      {/* Center "Circle" Tech Element (Behind text) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-slate-700 rounded-full opacity-30 animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-700 rounded-full opacity-20 animate-[spin_15s_linear_infinite_reverse]"></div>

      {/* Bottom Status */}
      <div className="flex justify-between items-end z-10 border-t border-slate-800 pt-4">
        <div className="flex gap-8 text-xs text-slate-500">
          <span className="flex items-center gap-1"><Cpu size={12} className="animate-pulse"/> CPU_0: 98%</span>
          <span className="flex items-center gap-1"><Activity size={12}/> MEM: 14TB</span>
          <span className="flex items-center gap-1"><Globe size={12}/> NET: 400Gbps</span>
        </div>
        <div className="text-green-900 text-9xl font-bold opacity-10 absolute bottom-0 right-0 pointer-events-none select-none">
          SECURE
        </div>
      </div>
    </div>
  );
};