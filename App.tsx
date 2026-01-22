
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroAccordion from './components/HeroAccordion';
import Footer from './components/Footer';
import AIInsights from './components/AIInsights';
import { BUSINESS_SECTORS } from './constants';

const App: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState(BUSINESS_SECTORS[3]); // Default to middle for better symmetry
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Established 1996
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-brand font-black tracking-tighter text-slate-900 uppercase leading-[0.9]">
            Building Legacies <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Empowering</span> Futures
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            A premier integrated conglomerate driving transformative growth across critical industries worldwide.
          </p>
        </div>

        <section className="relative z-10">
          <HeroAccordion 
            sectors={BUSINESS_SECTORS} 
            onSectorSelect={setSelectedSector}
          />
        </section>

        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
              <span>Deep Dive: {selectedSector.title}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-brand font-black text-slate-900 uppercase leading-none tracking-tight">
              Driving Global <br/> Standards in <span className="text-blue-700">{selectedSector.title.split(' ')[0]}</span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              {selectedSector.description} Our {selectedSector.title.toLowerCase()} division represents the pinnacle of our commitment to excellence, leveraging cutting-edge technology and human-centric design to reshape the landscape of the modern world.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-3xl font-brand font-black text-blue-700 mb-1">25+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years of Experience</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-3xl font-brand font-black text-blue-700 mb-1">Global</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Operations Reach</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-xl">
                Division Strategy
              </button>
              <button className="px-10 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all">
                Annual Report
              </button>
            </div>
          </div>

          <div className="sticky top-32">
            <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:w-40 group-hover:h-40"></div>
              <AIInsights sector={selectedSector} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
