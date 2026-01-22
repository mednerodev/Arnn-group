
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="relative w-12 h-12 flex items-center justify-center">
             {/* Logo Placeholder - Representing the user's logo style */}
             <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20 50 Q 50 10 80 50 Q 50 90 20 50" fill="none" stroke="#22c55e" strokeWidth="6" />
                <path d="M20 50 Q 50 40 80 50" fill="none" stroke="#1d4ed8" strokeWidth="6" />
                <path d="M50 20 L 50 80" fill="none" stroke="#1d4ed8" strokeWidth="6" strokeDasharray="5,5" />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-brand font-black text-slate-900 tracking-tighter leading-none group-hover:text-blue-700 transition-colors">
              ARNN
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none">
              Group
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About Us', 'Our Businesses', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-bold text-slate-600 hover:text-blue-700 uppercase tracking-widest transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-slate-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
