import React from 'react';
import { motion } from 'framer-motion';
import { ShieldIcon, TrendingDownIcon, ArrowUpRightIcon } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
});

const SuccessStories = () => {
  return (
    <section id="casos" className="relative overflow-hidden border-t border-slate-800/60
                                    py-16 sm:py-20 md:py-24 scroll-mt-20">
      <div className="section-container">

        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 {...fadeUp(0)}
            className="font-display font-extrabold tracking-tight leading-[1.1] mb-4
                       text-2xl sm:text-3xl md:text-5xl text-white">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-[#00e5ff] to-blue-400 bg-clip-text text-transparent">
              Casos de Éxito
            </span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)}
            className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Soluciones reales para problemas reales. Las herramientas que están transformando la industria de la seguridad.
          </motion.p>
        </div>

        <motion.div {...fadeUp(0.15)} className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-7 sm:p-10 overflow-hidden group
                          hover:border-cyan-500/30 transition-all duration-500">

            {/* Top line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500/60 via-blue-500/30 to-transparent" />
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            {/* Header row */}
            <div className="flex items-start justify-between mb-7">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center
                              group-hover:border-cyan-500/30 group-hover:scale-105 transition-all duration-300">
                <ShieldIcon className="w-7 h-7 text-cyan-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1
                               rounded-full bg-slate-800 border border-slate-700 text-white">
                Caso de Éxito
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight">GuardForceSegurity</h3>
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-5">Plataforma SaaS Principal</p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Plataforma integral para empresas de seguridad privada que automatiza el control de rondas, asistencia y reportes de incidencias.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-slate-800">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <TrendingDownIcon className="w-4 h-4 text-[#00e5ff]" />
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter">150%</span>
                </div>
                <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Reducción de Costos</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <ArrowUpRightIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter">0%</span>
                </div>
                <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Papel en Operaciones</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SuccessStories;
