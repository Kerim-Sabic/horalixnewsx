import React, { useState, useEffect, useCallback, useRef } from 'react';
import { StaticOverlay } from './components/StaticOverlay';
// Existing Themes
import { TechInterface } from './components/themes/TechInterface';
import { MedicalScreen } from './components/themes/MedicalScreen';
import { FinancialNews } from './components/themes/FinancialNews';
import { MainstreamNews } from './components/themes/MainstreamNews';
import { ScientificJournal } from './components/themes/ScientificJournal';
import { Tabloid } from './components/themes/Tabloid';
import { DarkVoid } from './components/themes/DarkVoid';
// Earlier New Themes
import { RadiologyISO } from './components/themes/RadiologyISO';
import { BioTechDashboard } from './components/themes/BioTechDashboard';
import { PharmaInventory } from './components/themes/PharmaInventory';
import { OrangeTerminal } from './components/themes/OrangeTerminal';
import { LifestyleMag } from './components/themes/LifestyleMag';
import { VintagePaper } from './components/themes/VintagePaper';
import { AcademicSummit } from './components/themes/AcademicSummit';
import { GlobalNetwork } from './components/themes/GlobalNetwork';
import { LegalBrief } from './components/themes/LegalBrief';
import { TechCrusader } from './components/themes/TechCrusader';
import { GovReport } from './components/themes/GovReport';
import { NeuroJournal } from './components/themes/NeuroJournal';
import { CardiologyJournal } from './components/themes/CardiologyJournal';
import { OncologyJournal } from './components/themes/OncologyJournal';
// Latest Themes
import { CyberSecurity } from './components/themes/CyberSecurity';
import { SpaceExploration } from './components/themes/SpaceExploration';
import { ClimateData } from './components/themes/ClimateData';
import { CryptoExchange } from './components/themes/CryptoExchange';
import { QuantumPhysics } from './components/themes/QuantumPhysics';

import { Theme } from './types';

// Component Factory
const getThemeComponent = (theme: Theme) => {
  switch (theme) {
    case Theme.TECH: return <TechInterface />;
    case Theme.MEDICAL: return <MedicalScreen />;
    case Theme.FINANCIAL: return <FinancialNews />;
    case Theme.MAINSTREAM: return <MainstreamNews />;
    case Theme.SCIENTIFIC: return <ScientificJournal />;
    case Theme.TABLOID: return <Tabloid />;
    case Theme.RADIOLOGY: return <RadiologyISO />;
    case Theme.BIOTECH: return <BioTechDashboard />;
    case Theme.PHARMA: return <PharmaInventory />;
    case Theme.TERMINAL: return <OrangeTerminal />;
    case Theme.LIFESTYLE: return <LifestyleMag />;
    case Theme.VINTAGE: return <VintagePaper />;
    case Theme.ACADEMIC: return <AcademicSummit />;
    case Theme.GLOBAL_NETWORK: return <GlobalNetwork />;
    case Theme.LEGAL: return <LegalBrief />;
    case Theme.TECH_BLOG: return <TechCrusader />;
    case Theme.GOV_REPORT: return <GovReport />;
    case Theme.NEURO: return <NeuroJournal />;
    case Theme.CARDIOLOGY: return <CardiologyJournal />;
    case Theme.ONCOLOGY: return <OncologyJournal />;
    // New
    case Theme.CYBER: return <CyberSecurity />;
    case Theme.SPACE: return <SpaceExploration />;
    case Theme.CLIMATE: return <ClimateData />;
    case Theme.CRYPTO: return <CryptoExchange />;
    case Theme.QUANTUM: return <QuantumPhysics />;
    
    case Theme.VOID:
    default: return <DarkVoid />;
  }
};

interface RenderedLayer {
  id: number;
  theme: Theme;
  timestamp: number;
}

export default function App() {
  const [layers, setLayers] = useState<RenderedLayer[]>([{ id: 0, theme: Theme.VOID, timestamp: Date.now() }]);
  const [activeThemeId, setActiveThemeId] = useState<number>(0);
  const [intensity, setIntensity] = useState<number>(1);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextIdRef = useRef(1);

  const getRandomTheme = () => {
    const themes = Object.values(Theme);
    const randomIndex = Math.floor(Math.random() * themes.length);
    return themes[randomIndex];
  };

  const strobe = useCallback(() => {
    if (intensity === 0) return;

    const nextTheme = getRandomTheme();
    
    // HYPER SPEED
    // Min 0.2s, Max 0.8s
    const duration = Math.floor(Math.random() * 600) + 200;

    // Add new layer
    const newId = nextIdRef.current++;
    setLayers(prev => {
      // Keep max 2 layers to prevent DOM bloat
      const newLayers = [...prev, { id: newId, theme: nextTheme, timestamp: Date.now() }];
      if (newLayers.length > 2) return newLayers.slice(newLayers.length - 2);
      return newLayers;
    });
    
    setActiveThemeId(newId);

    timeoutRef.current = setTimeout(strobe, duration);
  }, [intensity]);

  useEffect(() => {
    if (intensity > 0) {
      // Start immediately
      strobe();
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [intensity, strobe]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black select-none">
      {/* 
         DOUBLE BUFFER RENDERING 
         We render all active layers on top of each other.
         The latest one fades in over the previous one.
      */}
      {layers.map((layer, index) => {
        // Only the last layer needs to animate in.
        const isNewest = index === layers.length - 1 && layers.length > 1;
        
        return (
          <div 
            key={layer.id}
            className={`absolute inset-0 w-full h-full ${isNewest ? 'animate-fade-flash z-10' : 'z-0'}`}
          >
            <div className="absolute inset-0 w-full h-full">
               {getThemeComponent(layer.theme)}
            </div>
            <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
               <StaticOverlay theme={layer.theme} />
            </div>
          </div>
        );
      })}

      {/* Hidden Controls */}
      <div className="absolute top-4 right-4 z-[100] pointer-events-auto opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => setIntensity(prev => prev === 0 ? 1 : 0)}
          className="bg-black/50 text-white border border-white/30 px-3 py-1 text-xs backdrop-blur-sm"
        >
          {intensity === 0 ? 'RESUME' : 'PAUSE'}
        </button>
      </div>
    </div>
  );
}