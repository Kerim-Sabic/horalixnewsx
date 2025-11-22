import React from 'react';
import { FileText, ShieldAlert } from 'lucide-react';

export const GovReport: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#fff] text-black relative overflow-hidden font-mono">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Security Banner */}
      <div className="absolute top-0 w-full bg-stripes bg-yellow-400 h-2"></div>
      <div className="absolute top-2 w-full text-center text-[10px] font-bold uppercase tracking-widest text-red-600 py-1">
        *** RESTRICTED ACCESS // CLEARANCE LEVEL 4 REQUIRED ***
      </div>

      {/* Header */}
      <div className="absolute top-12 left-12 right-12 border-b-4 border-black pb-4 flex justify-between items-end z-10">
         <div>
           <div className="flex items-center gap-2 mb-2">
             <ShieldAlert size={32} className="text-black" />
             <div className="text-xs font-bold leading-tight">
               DEPARTMENT OF HEALTH <br/>
               AND HUMAN SERVICES
             </div>
           </div>
           <div className="text-2xl font-bold">OFFICIAL MEMORANDUM</div>
         </div>
         <div className="text-right text-xs">
           <div>DATE: 24 SEP 2025</div>
           <div>REF: DHHS-2025-X99</div>
         </div>
      </div>

      {/* Redacted Text Background */}
      <div className="absolute inset-0 top-40 left-12 right-12 opacity-20 pointer-events-none text-xs leading-loose select-none">
         {Array.from({ length: 15 }).map((_, i) => (
           <div key={i} className="mb-4">
             <span className="bg-black text-transparent">Subject to the findings of the committee</span>, the implementation of Horalix systems has been <span className="bg-black text-transparent">approved for immediate deployment</span> across all federal facilities. <span className="bg-black text-transparent">Cost reduction estimates</span> exceed 40% annually.
             The security protocols regarding <span className="bg-black text-transparent">patient data encryption</span> remain paramount.
           </div>
         ))}
      </div>

      {/* Stamp */}
      <div className="absolute bottom-20 right-20 transform -rotate-12 border-4 border-red-700 text-red-700 font-black text-4xl p-4 rounded opacity-50">
        DECLASSIFIED
      </div>
    </div>
  );
};