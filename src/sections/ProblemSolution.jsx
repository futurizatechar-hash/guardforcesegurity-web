import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, CpuIcon, ArrowRightIcon } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
});

const pillars = [
  {
    id: 1,
    label: 'Disponible',
    title: 'App para Guardias y Control de Rondas',
    description: 'Controlá todo desde el celular. Rondas por GPS, presentismo y libro de actas digital. El guardia manda reportes al instante y funciona hasta sin internet.',
    icon: <ShieldCheckIcon className="w-7 h-7 text-cyan-400" />,
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    labelStyle: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/20',
    cardBorder: 'border-slate-800 hover:border-cyan-500/30',
    glow: 'from-cyan-500/10 to-transparent',
  },
  {
    id: 2,
    label: 'Disponible',
    title: 'Automatización a la Medida de tu Agencia',
    description: 'Software diseñado para cómo trabajás vos. Bots para conseguir clientes corporativos 24/7 y conexión directa a la liquidación de sueldos.',
    icon: <CpuIcon className="w-7 h-7 text-[#39ff14]" />,
    iconBg: 'bg-green-500/10 border-green-500/20',
    labelStyle: 'text-green-400 bg-green-950/40 border-green-500/20',
    cardBorder: 'border-slate-800 hover:border-green-500/30',
    glow: 'from-green-500/10 to-transparent',
  },
];

const ProblemSolution = () => {
  return (
    <section id="ecosistema" className="relative overflow-hidden border-t border-slate-800/60
                                         py-16 sm:py-24 md:py-28 scroll-mt-20 bg-slate-950/60">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 {...fadeUp(0)}
            className="font-display font-extrabold tracking-tight leading-[1.1] mb-4
                       text-2xl sm:text-3xl md:text-5xl text-white">
            Software para Empresas de{' '}
            <span className="bg-gradient-to-r from-[#00e5ff] to-blue-400 bg-clip-text text-transparent">
              Seguridad
            </span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)}
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Optimizá la gestión operativa de tus guardias. Bajá los costos fijos, terminá con los libros de papel y recuperá el control total de cada objetivo.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              {...fadeUp(i * 0.12)}
              className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col
                          bg-slate-950/60 transition-all duration-300 ${p.cardBorder} group`}
            >
              {/* Top glow */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.glow}`} />

              {/* Badge */}
              <span className={`self-start text-[10px] font-bold uppercase tracking-widest
                                px-2.5 py-1 rounded-full border mb-5 ${p.labelStyle}`}>
                {p.label}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-5 ${p.iconBg}`}>
                {p.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">{p.title}</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;
