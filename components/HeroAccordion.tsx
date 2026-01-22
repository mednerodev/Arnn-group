
import React, { useState } from 'react';
import { BusinessSector } from '../types';

interface HeroAccordionProps {
  sectors: BusinessSector[];
  onSectorSelect: (sector: BusinessSector) => void;
}

const HeroAccordion: React.FC<HeroAccordionProps> = ({ sectors, onSectorSelect }) => {
  const [activeIndex, setActiveIndex] = useState(3); // Default middle

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    onSectorSelect(sectors[index]);
  };

  return (
    <div className="relative w-full h-[650px] flex gap-3 group overflow-hidden">
      {sectors.map((sector, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={sector.id}
            onMouseEnter={() => handleMouseEnter(index)}
            className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer overflow-hidden rounded-2xl shadow-2xl ${
              isActive ? 'flex-[5]' : 'flex-[1]'
            }`}
          >
            {/* Image Layer - Untouched logic as requested */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url(${sector.imageUrl})` }}
            />
            
            {/* Overlay Layers */}
            <div className={`absolute inset-0 bg-blue-950/40 transition-opacity duration-500 ${isActive ? 'opacity-30' : 'opacity-70'}`} />
            <div className={`absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`} />

            {/* Centered Rotated Text Label (When Segment is Narrow/Inactive) */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 whitespace-nowrap origin-center ${
              isActive ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
            }`}>
              <span 
                className="text-white font-brand font-black text-sm md:text-lg uppercase tracking-[0.3em] transform -rotate-90 block"
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
              >
                {sector.title}
              </span>
            </div>

            {/* Centered Content for Active Sector */}
            <div className={`absolute inset-0 p-12 flex flex-col items-center justify-center text-center transition-all duration-700 delay-100 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
            }`}>
              <div className="max-w-xl space-y-6 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-0.5 bg-blue-500"></div>
                    <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs">Innovation Division</span>
                    <div className="w-12 h-0.5 bg-blue-500"></div>
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-brand font-black text-white uppercase leading-tight tracking-tighter drop-shadow-2xl">
                  {sector.title}
                </h3>
                
                <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-lg drop-shadow-md">
                  {sector.description}
                </p>
                
                <div className="pt-8 flex items-center space-x-6">
                  <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
                    View Portfolio
                  </button>
                  <button className="flex items-center space-x-2 text-white font-bold text-sm uppercase tracking-widest group/btn border-b-2 border-transparent hover:border-white transition-all pb-1">
                    <span>Explore Insights</span>
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Controls - Better positioning and styling */}
      <div className="absolute bottom-10 right-10 hidden lg:flex items-center space-x-6">
        <button 
          onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all shadow-2xl group/nav"
        >
          <svg className="w-6 h-6 transition-transform group-hover/nav:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => setActiveIndex(Math.min(sectors.length - 1, activeIndex + 1))}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all shadow-2xl group/nav"
        >
          <svg className="w-6 h-6 transition-transform group-hover/nav:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroAccordion;
