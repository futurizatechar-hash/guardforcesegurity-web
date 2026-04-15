import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ArrowRightIcon } from 'lucide-react';
import iconLogo from '../assets/icon-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Detect scroll state for background styling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to detect which section is currently active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      // Trigger area: a band in the middle-top of the screen.
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: 'Solución', href: '#saas-features' },
    { name: 'Ecosistema', href: '#ecosistema' },
    { name: 'Trayectoria', href: '#trayectoria' },
    { name: 'Casos', href: '#casos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#030617] border-b border-white/5 py-4' : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        
        {/* Brand */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5 shrink-0 md:w-1/4"
        >
          <img 
            src={iconLogo} 
            alt="GuardForceSegurity Logo" 
            className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]" 
            width="32" 
            height="32" 
            loading="eager" 
            decoding="async"
          />
          <span className="text-xl md:text-2xl lg:text-3xl font-display font-black text-white tracking-tighter">
            GuardForceSegurity
          </span>
        </motion.div>

        {/* Desktop Nav - Floating "Dynamic Island" Pill */}
        <div className="hidden md:flex flex-1 justify-center relative">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`flex items-center gap-1.5 p-1.5 rounded-full transition-all duration-500 ${
              isScrolled 
                ? 'bg-slate-900/60 border border-slate-700/50 shadow-2xl' 
                : 'bg-transparent'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-5 py-2 rounded-full cursor-pointer overflow-hidden group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/30 rounded-full shadow-[inset_0_0_12px_rgba(0,229,255,0.1)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span 
                    className={`relative z-10 text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive 
                        ? 'text-cyan-400' 
                        : 'text-slate-400 group-hover:text-white'
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Desktop CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex shrink-0 md:w-1/4 justify-end"
        >
          <a
            href="#contacto"
            className="group flex items-center gap-2 bg-[#00e5ff] text-[#030617] py-2.5 px-6 rounded-xl font-black text-sm
                       shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]
                       hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
          >
            Más Información <ArrowRightIcon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-cyan-400 p-2 bg-slate-900/50 rounded-lg border border-slate-800 backdrop-blur-md active:scale-95 transition-all"
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-[#030617] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-5 py-6 gap-3 border-t border-white/5 mt-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-[inset_0_0_15px_rgba(0,229,255,0.05)]' 
                        : 'bg-slate-900/40 border border-transparent text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="font-extrabold text-sm uppercase tracking-widest">{link.name}</span>
                  </a>
                );
              })}
              <a 
                href="#contacto" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="mt-3 py-3.5 flex items-center justify-center gap-2 rounded-lg bg-[#00e5ff] text-[#030617] font-black text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(0,229,255,0.3)] active:scale-95 transition-all"
              >
                Más Información <ArrowRightIcon className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
