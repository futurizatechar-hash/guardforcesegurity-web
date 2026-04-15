import React from 'react';
import { motion } from 'framer-motion';
import { AwardIcon, CodeIcon, BuildingIcon, UserCheckIcon } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
});

const stats = [
  {
    icon: <BuildingIcon className="w-5 h-5 text-cyan-400" />,
    value: '15',
    unit: 'años',
    label: 'de Campo',
    sub: 'Experiencia directa en operaciones de seguridad privada.',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: <CodeIcon className="w-5 h-5 text-[#00e5ff]" />,
    value: '7',
    unit: 'años',
    label: 'de Desarrollo',
    sub: 'Armando sistemas que no se cuelgan ni fallan.',
    iconBg: 'bg-[#00e5ff]/10 border-[#00e5ff]/20',
  },
];

const Authority = () => {
  return (
    <section id="trayectoria" className="relative overflow-hidden border-y border-slate-800/60
                                          py-16 sm:py-20 md:py-24 scroll-mt-20 bg-slate-900/40">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          {/* Left */}
          <motion.div {...fadeUp(0)} className="md:w-1/2 w-full">
            <h2 className="font-display font-extrabold tracking-tight leading-[1.1] mb-5
                           text-2xl sm:text-3xl md:text-5xl text-white">
              Donde la Experiencia{' '}
              <span className="bg-gradient-to-r from-[#00e5ff] to-blue-400 bg-clip-text text-transparent">
                Encuentra la Innovación
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              Conocemos la realidad operativa de una empresa de seguridad desde adentro. Por eso creamos GuardForceSegurity — combinamos 15 años de experiencia en el rubro con 7 años de desarrollo de software especializado.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.1 + i * 0.1)}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 flex flex-col gap-3
                             hover:border-slate-700 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${s.iconBg}`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-2xl leading-none">
                      {s.value}<span className="text-base ml-1 text-slate-400 font-normal">{s.unit}</span>
                    </p>
                    <p className="text-sm font-semibold text-white mt-0.5">{s.label}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">{s.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Quote card */}
          <motion.div {...fadeUp(0.2)} className="md:w-1/2 relative w-full">
            <div className="relative z-10 rounded-2xl border border-slate-700 bg-slate-950/80 p-6 sm:p-8 md:p-10">
              {/* Top glow line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500/60 to-transparent" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center border-2 border-slate-700 shrink-0">
                  <UserCheckIcon className="w-7 h-7 text-slate-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-base">Liderazgo Dual</p>
                  <p className="text-cyan-400 text-xs mt-0.5">Operaciones de Seguridad e Ingeniería de Software</p>
                </div>
              </div>

              <blockquote className="text-slate-300 text-base sm:text-lg leading-relaxed italic
                                     border-l-4 border-cyan-500 pl-5 mb-6">
                "Creamos esta plataforma porque conocemos de primera mano lo que necesita un supervisor para que la empresa sea más eficiente y competitiva."
              </blockquote>

              <div className="flex items-center gap-2.5">
                <AwardIcon className="w-4 h-4 text-[#00e5ff] shrink-0" />
                <span className="text-slate-400 text-xs sm:text-sm">Especialistas en digitalización del sector de seguridad privada</span>
              </div>
            </div>
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-10 blur-2xl -z-10 translate-x-2 translate-y-2 rounded-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Authority;
