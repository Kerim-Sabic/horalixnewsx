import React from 'react';
import { Truck, Package, CheckCircle } from 'lucide-react';

export const PharmaInventory: React.FC = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden font-mono text-slate-600">
      {/* Grid Lines */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-indigo-600 flex items-center px-4 justify-between text-white z-10 shadow-md">
        <div className="flex items-center gap-2 font-bold text-sm">
          <Package size={16} />
          <span>PHARMA_LOGISTICS_NET</span>
        </div>
        <div className="text-xs bg-indigo-800 px-2 py-0.5 rounded animate-pulse">SECURE_CONNECTION</div>
      </div>

      {/* Fake Table Data (Background) */}
      <div className="absolute inset-0 top-12 p-8 opacity-40 pointer-events-none relative">
        {/* Scanning Highlight Bar */}
        <div className="absolute left-0 right-0 h-8 bg-indigo-100/50 border-y border-indigo-300 animate-scan-vertical opacity-50 z-0"></div>
        
        <table className="w-full text-left text-[10px] relative z-10">
          <thead>
            <tr className="border-b border-slate-300">
              <th className="py-2">BATCH_ID</th>
              <th>COMPOUND</th>
              <th>STATUS</th>
              <th>DESTINATION</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 15 }).map((_, i) => (
              <tr key={i} className="border-b border-slate-100">
                <td className="py-2 font-bold">#{40291 + i}</td>
                <td>XYLAZINE-DERIV</td>
                <td className="text-green-600 flex items-center gap-1"><CheckCircle size={8}/> CLEARED</td>
                <td>ZONE_{i % 5 + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Overlay Banner */}
      <div className="absolute bottom-0 w-full bg-indigo-50 border-t border-indigo-200 p-2 flex justify-center gap-8 text-xs text-indigo-800 z-20">
         <div className="flex items-center gap-2"><Truck size={14} className="animate-bounce"/> IN_TRANSIT: 402 units</div>
         <div className="flex items-center gap-2"><Package size={14}/> DELIVERED: 1,200 units</div>
      </div>
    </div>
  );
};