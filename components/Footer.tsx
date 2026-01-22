
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M20 50 Q 50 10 80 50 Q 50 90 20 50" fill="none" stroke="#22c55e" strokeWidth="6" />
                  <path d="M20 50 Q 50 40 80 50" fill="none" stroke="#3b82f6" strokeWidth="6" />
                </svg>
              </div>
              <span className="text-2xl font-brand font-black tracking-tighter">ARNN GROUP</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A global conglomerate dedicated to building legacies and empowering futures through sustainable innovation across diverse industrial sectors.
            </p>
          </div>

          <div>
            <h5 className="font-brand font-bold uppercase tracking-widest text-sm mb-6">Divisions</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Real Estate Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ICT Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Healthcare Access</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agro-Aquaculture</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-brand font-bold uppercase tracking-widest text-sm mb-6">Company</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Our Journey</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Impact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-brand font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h5>
            <p className="text-slate-400 text-sm mb-4">Stay updated with our latest global ventures.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm flex-grow focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-r-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">
          <p>© 1996 - {new Date().getFullYear()} ARNN GROUP. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
