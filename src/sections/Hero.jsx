import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ZapIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay },
    }),
  };

  const socialProof = [
    'GPS en tiempo real',
    'Sin papel',
    'App offline',
  ];

  return (
    <section className="relative overflow-hidden bg-[#030617]">
      {/* ── Gradient blobs ── */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-80 h-80 bg-cyan-400/10 blur-[90px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 -right-10 w-64 h-64 bg-[#00e5ff]/8 blur-[80px] rounded-full" />

      {/* ── Mobile layout ── */}
      <div className="section-container flex flex-col
                      pt-24 pb-16
                      sm:pt-32 sm:pb-24
                      md:hidden">

        {/* Badge */}
        <motion.div
          variants={fadeUp} custom={0}
          initial="hidden" animate="visible"
          className="flex items-center gap-2 self-start
                     px-3.5 py-1.5 mb-8
                     rounded-full bg-slate-900 border border-cyan-500/30"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
            Hacia el Futuro de la Seguridad
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp} custom={0.1}
          initial="hidden" animate="visible"
          className="font-display font-extrabold tracking-tight leading-[1.1]
                     text-3xl sm:text-4xl text-white mb-4"
        >
          Tecnología para Empresas de{' '}
          <span className="bg-gradient-to-r from-[#00e5ff] to-blue-400 bg-clip-text text-transparent">
            Seguridad Privada
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp} custom={0.2}
          initial="hidden" animate="visible"
          className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-md"
        >
          Control total, menos costos operativos y cero papeleo. Digitalizamos tu empresa — desde la app de rondas para el guardia hasta la gestión inteligente en tu oficina.
        </motion.p>

        {/* Social proof pills */}
        <motion.div
          variants={fadeUp} custom={0.3}
          initial="hidden" animate="visible"
          className="flex flex-wrap gap-2 mb-8"
        >
          {socialProof.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 px-3 py-1
                         text-xs font-semibold text-cyan-300
                         bg-cyan-950/40 border border-cyan-500/20 rounded-full"
            >
              <CheckIcon className="w-3 h-3 text-cyan-400" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          variants={fadeUp} custom={0.4}
          initial="hidden" animate="visible"
          href="#contacto"
          className="inline-flex items-center justify-center gap-2
                     w-full sm:w-auto py-3.5 px-6 rounded-xl
                     bg-[#00e5ff] text-[#030617]
                     text-sm font-black tracking-tight
                     shadow-[0_0_24px_rgba(0,229,255,0.4)]
                     active:scale-[0.98] transition-transform"
        >
          Más Información
          <ArrowRightIcon className="w-4 h-4 shrink-0" />
        </motion.a>


      </div>

      {/* ── Desktop layout (md+) ── */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-16 md:items-center
                      section-container
                      pt-36 pb-28 lg:pt-44 lg:pb-36 md:min-h-screen">

        {/* Left */}
        <div>
          <motion.div
            variants={fadeUp} custom={0}
            initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                       bg-slate-900 border border-cyan-500/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Hacia el Futuro de la Seguridad
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} custom={0.1}
            initial="hidden" animate="visible"
            className="font-display font-extrabold tracking-tight leading-[1.08]
                       text-5xl lg:text-[3.75rem] text-white mb-6"
          >
            Tecnología para Empresas de{' '}
            <span className="bg-gradient-to-r from-[#00e5ff] to-blue-400 bg-clip-text text-transparent">
              Seguridad Privada
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp} custom={0.2}
            initial="hidden" animate="visible"
            className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl"
          >
            Control total, menos costos operativos y cero papeleo. Digitalizamos tu empresa: desde la app de rondas para el guardia en el objetivo, hasta la gestión inteligente en tu oficina.
          </motion.p>

          <motion.div
            variants={fadeUp} custom={0.3}
            initial="hidden" animate="visible"
            className="flex flex-wrap gap-2 mb-10"
          >
            {socialProof.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 px-3 py-1
                           text-xs font-semibold text-cyan-300
                           bg-cyan-950/40 border border-cyan-500/20 rounded-full"
              >
                <CheckIcon className="w-3 h-3 text-cyan-400" />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp} custom={0.4}
            initial="hidden" animate="visible"
            className="flex items-center gap-4"
          >
            <a
              href="#contacto"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl
                         bg-[#00e5ff] text-[#030617] text-base font-black tracking-tight
                         shadow-[0_0_28px_rgba(0,229,255,0.35)]
                         hover:bg-[#00c4cc] hover:shadow-[0_0_36px_rgba(0,229,255,0.5)]
                         transition-all duration-200"
            >
              Más Información <ArrowRightIcon className="w-5 h-5" />
            </a>

          </motion.div>
        </div>

        {/* Right — Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.3 }}
          className="relative"
        >
          <div className="relative z-10 p-4 bg-slate-900/40 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm overflow-hidden">
            <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
              <div className="h-8 bg-slate-900 border-b border-slate-800 px-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="p-6 space-y-4">
                <div className="h-4 w-1/3 bg-slate-800 rounded animate-pulse" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 bg-cyan-950/30 border border-cyan-500/20 rounded-xl" />
                  <div className="h-20 bg-[#00e5ff]/10 border border-[#00e5ff]/10 rounded-xl" />
                  <div className="h-20 bg-slate-800/50 rounded-xl" />
                </div>
                <div className="h-28 bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-end">
                  <div className="h-2 w-full bg-slate-800 mb-2 rounded" />
                  <div className="h-2 w-2/3 bg-slate-800 rounded" />
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-lg"
            >
              <ShieldCheckIcon className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -left-4 p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-lg flex items-center gap-2"
            >
              <ZapIcon className="w-5 h-5 text-[#00e5ff]" />
              <div>
                <p className="text-[10px] font-bold text-white tracking-wider uppercase">Tiempo Real</p>
                <p className="text-[9px] text-slate-400">Monitoreo Activo</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
