import React from 'react';
import { Atom, Sigma, FunctionSquare } from 'lucide-react';

export const QuantumPhysics: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1e293b] text-slate-200 relative overflow-hidden font-sci">
      {/* Blackboard/Blueprint grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        opacity: 0.1
      }}></div>

      {/* Particle Tracks */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <path d="M0,300 Q400,100 800,300 T1600,300" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="animate-dash" />
        <circle cx="400" cy="200" r="100" fill="none" stroke="cyan" strokeWidth="0.5" className="animate-spin" style={{ transformOrigin: '400px 200px', animationDuration: '10s' }} />
        <circle cx="400" cy="200" r="150" fill="none" stroke="magenta" strokeWidth="0.5" className="animate-spin" style={{ transformOrigin: '400px 200px', animationDuration: '15s', animationDirection: 'reverse' }} />
      </svg>

      {/* Equations Background */}
      <div className="absolute inset-0 p-8 opacity-10 font-serif italic text-2xl select-none pointer-events-none">
         <div className="absolute top-10 left-10">E = mc²</div>
         <div className="absolute bottom-20 left-20">iℏ ∂ψ/∂t = Ĥψ</div>
         <div className="absolute top-1/3 right-10">∇ · B = 0</div>
         <div className="absolute bottom-10 right-1/4">∫ e^x dx</div>
      </div>

      {/* Header */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center border-b border-slate-700 z-10">
         <div className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <Atom size={16} className="text-cyan-400" /> Standard Model Simulation
         </div>
         <div className="text-xs font-mono text-slate-500">
            RUN_ID: Q-88102
         </div>
      </div>

      {/* Floating Abstract Graphic */}
      <div className="absolute right-20 top-1/3 w-32 h-32 border border-cyan-500/30 rounded-full flex items-center justify-center animate-pulse">
         <div className="w-24 h-24 border border-magenta-500/30 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};