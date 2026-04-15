import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SendIcon, CheckCircleIcon, MailIcon, BuildingIcon, UserIcon, UsersIcon, PhoneIcon } from 'lucide-react';
import { supabase } from '../supabaseClient';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut', delay },
});

const inputClass = `w-full bg-slate-900/60 border border-slate-800
  focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50
  rounded-xl py-3.5 pl-11 pr-4
  text-sm text-white placeholder-slate-600
  transition-all outline-none`;

const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', teamSize: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('leads-guardforcesegurity')
        .insert([{
          nombre: formData.name.trim().toUpperCase(),
          telefono: formData.phone.trim(),
          empresa: formData.company.trim().toUpperCase(),
          email: formData.email.trim().toLowerCase(),
          estado_embudo: 'nuevo',
          resumen_chat: `[Lead Web] Tamaño de equipo/flota: ${formData.teamSize}`,
        }]);
      if (error) throw error;
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error guardando lead:', err.message);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const perks = ['Análisis de Situación Actual', 'Propuesta Tecnológica', 'Escenario Operativo Esperado'];

  return (
    <section id="contacto" className="relative overflow-hidden border-t border-slate-800/60
                                       py-16 sm:py-20 md:py-24 scroll-mt-20">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full" />

      <div className="section-container">

        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2 {...fadeUp(0)}
            className="font-display font-extrabold tracking-tight leading-[1.1] mb-3
                       text-2xl sm:text-3xl md:text-5xl text-white">
            Solicita{' '}
            <span className="bg-gradient-to-r from-[#00e5ff] to-blue-400 bg-clip-text text-transparent">
              Más Información
            </span>
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Sin compromiso. Analizamos tus procesos y te contamos exactamente cómo la tecnología puede transformar tu margen operativo.
          </motion.p>
        </div>

        {/* Card */}
        <motion.div {...fadeUp(0.15)} className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-slate-800 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500/60 via-blue-500/30 to-transparent" />

            <div className="flex flex-col md:flex-row">

              {/* Left info panel */}
              <div className="md:w-[38%] bg-slate-950/80 p-7 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-800">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight italic uppercase">
                  Solicita<br />
                  <span className="text-cyan-400">Más Información</span>
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">
                  Analizamos tus procesos actuales y detectamos fugas de eficiencia.
                </p>
                <div className="space-y-4">
                  {perks.map((p) => (
                    <div key={p} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider leading-snug">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right form */}
              <div className="flex-1 bg-slate-900/30 p-6 sm:p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Row 1 */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Nombre Completo</label>
                          <div className="relative">
                            <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" className={inputClass} />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Empresa / Razón Social</label>
                          <div className="relative">
                            <BuildingIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input required type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Nombre de la firma" className={inputClass} />
                          </div>
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Email Corporativo</label>
                          <div className="relative">
                            <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ejemplo@empresa.com" className={inputClass} />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">WhatsApp (Cód. País)</label>
                          <div className="relative">
                            <PhoneIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+54 9 351..." className={inputClass} />
                          </div>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Tamaño de Equipo / Flota</label>
                        <div className="relative">
                          <UsersIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <select required name="teamSize" value={formData.teamSize} onChange={handleChange} className={`${inputClass} appearance-none`}>
                            <option value="" disabled className="bg-slate-950">Seleccionar tamaño...</option>
                            <option value="1-20" className="bg-slate-950">1 - 20 personas</option>
                            <option value="21-50" className="bg-slate-950">21 - 50 personas</option>
                            <option value="51-100" className="bg-slate-950">51 - 100 personas</option>
                            <option value="101-250" className="bg-slate-950">101 - 250 personas</option>
                            <option value="250+" className="bg-slate-950">Más de 250 personas</option>
                          </select>
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 mt-2
                                   py-4 px-6 rounded-2xl
                                   bg-[#00e5ff] text-[#030617] text-base font-black
                                   shadow-[0_0_24px_rgba(0,229,255,0.35)]
                                   hover:bg-[#00c4cc] hover:shadow-[0_0_32px_rgba(0,229,255,0.5)]
                                   active:scale-[0.98] transition-all duration-200 group"
                      >
                        Solicitar Información
                        <SendIcon className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                      <p className="text-xs text-slate-600 text-center">Sin compromiso · Respondemos en menos de 24hs</p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
                        <CheckCircleIcon className="w-10 h-10 text-cyan-400" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-white mb-2">¡Listo, ya lo recibimos!</h3>
                      <p className="text-slate-400 text-sm max-w-xs mb-6 leading-relaxed">En menos de 24hs nos comunicamos con vos para arrancar.</p>
                      <button onClick={() => setIsSubmitted(false)} className="text-cyan-400 text-sm font-bold hover:underline">
                        Enviar otra consulta
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LeadForm;
