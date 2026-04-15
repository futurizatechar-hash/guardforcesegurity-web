import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, SmartphoneIcon, ClockIcon, UsersIcon, BookOpenIcon, CheckCircleIcon } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
});

const features = [
  {
    icon: <SmartphoneIcon className="w-6 h-6 text-cyan-400" />,
    title: 'App Móvil para Guardias',
    description: 'Funciona hasta sin internet en el objetivo. El guardia registra todo y la app se sincroniza sola cuando vuelve la señal.',
    accent: 'border-cyan-500/20 bg-cyan-500/5',
  },
  {
    icon: <ClockIcon className="w-6 h-6 text-[#00e5ff]" />,
    title: 'Rondas por GPS en Tiempo Real',
    description: 'Chau a las firmas falsas. Controlá el presentismo y mirá el mapa exacto por donde camina tu guardia en el objetivo.',
    accent: 'border-[#00e5ff]/20 bg-[#00e5ff]/5',
  },
  {
    icon: <BookOpenIcon className="w-6 h-6 text-cyan-400" />,
    title: 'Libro de Actas 100% Digital',
    description: 'Basta de papel. El guardia carga novedades y relevos directo desde el celu, y tu supervisor lo recibe al instante.',
    accent: 'border-cyan-500/20 bg-cyan-500/5',
  },
  {
    icon: <UsersIcon className="w-6 h-6 text-[#00e5ff]" />,
    title: 'Puesto de Control de Accesos',
    description: 'Registrá entradas y salidas de vehículos al instante. Anotá patentes y destino directo en la app de portería.',
    accent: 'border-[#00e5ff]/20 bg-[#00e5ff]/5',
  },
];

const SaasFeatures = () => {
  return (
    <section id="saas-features" className="relative overflow-hidden border-t border-slate-800/60
                                            py-16 sm:py-24 md:py-32 scroll-mt-20">
      {/* bg decoration */}
      <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-56 h-56 bg-[#00e5ff]/5 blur-[80px] rounded-full" />

      <div className="section-container">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-20">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 mb-6">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">Plataforma GuardForceSegurity</span>
          </motion.div>

          <motion.h2 {...fadeUp(0.1)} className="font-display font-extrabold tracking-tight leading-[1.1] mb-4
                                                   text-2xl sm:text-3xl md:text-5xl text-white">
            El Software B2B de Gestión para{' '}
            <span className="bg-gradient-to-r from-[#00e5ff] to-blue-400 bg-clip-text text-transparent">
              Empresas de Seguridad
            </span>
          </motion.h2>

          <motion.p {...fadeUp(0.2)} className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Conocé GuardForceSegurity, el sistema hecho por gente de la calle para empresas de seguridad. Simplificá la supervisión operativa y llevá el papel a cero en todos tus objetivos.
          </motion.p>
        </div>

        {/* Cards — stack on mobile, 2-col sm, 4-col lg */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className={`rounded-2xl border p-6 flex flex-col gap-4 ${f.accent}
                          hover:border-[#00e5ff]/40 hover:bg-white/[0.04]
                          transition-all duration-300 group`}
            >
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-2 tracking-tight">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div {...fadeUp(0.4)} className="mt-12 sm:mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 sm:px-7 py-3.5
                          rounded-2xl bg-slate-900/80 border border-cyan-500/20">
            <CheckCircleIcon className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="text-sm sm:text-base text-slate-200 font-medium">
              Tu agencia puede empezar a usar nuestro sistema hoy mismo gratis.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SaasFeatures;
