import React from 'react';
import { MailIcon, MapPinIcon } from 'lucide-react';
import iconLogo from '../assets/icon-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#030617] border-t border-slate-800/60 pt-14 sm:pt-20 pb-8 sm:pb-10">
      <div className="section-container">

        {/* Mobile-first Unified Grid for Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-10 sm:mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <img src={iconLogo} alt="GuardForceSegurity Logo" className="h-9 w-9 sm:h-10 sm:w-10 object-contain" width="40" height="40" loading="lazy" decoding="async" />
              <span className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">GuardForceSegurity</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Digitalizamos empresas de seguridad privada en toda la región. Tecnología operativa diseñada por profesionales del sector.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:guardforcesegurity@gmail.com"
                title="Email Corporativo"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl
                           bg-slate-900 border border-slate-800 text-slate-400
                           hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-800 transition-all"
              >
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Area */}
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-6 sm:gap-16">
            
            {/* Navegación Column */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Navegación</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Solución', href: '#saas-features' },
                  { label: 'Trayectoria', href: '#trayectoria' },
                  { label: 'Casos de Éxito', href: '#casos' },
                  { label: 'Más Información', href: '#contacto' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ubicación Column */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Ubicación</h4>
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Córdoba, Arg.<br />Hub Tecnológico
                </p>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium italic mt-3 pl-6 border-l border-slate-800 ml-1 leading-tight hidden sm:block">
                "Operaciones reales, software de primer nivel."
              </p>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3">
          <p className="text-slate-500 text-[11px] sm:text-xs font-medium text-center sm:text-left">© {new Date().getFullYear()} GuardForceSegurity. Todos los derechos reservados.</p>
          <div className="flex gap-4 sm:gap-6 justify-center">
            <a href="/privacidad.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-300 text-[11px] sm:text-xs font-medium transition-colors">Políticas de Privacidad</a>
            <a href="/terminos.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-300 text-[11px] sm:text-xs font-medium transition-colors">Términos de Servicio</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
