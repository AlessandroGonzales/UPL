// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProposalsTeaser() {
  const pillars = [
    {
      icon: <Star className="text-gold w-8 h-8" />,
      title: "Mérito",
      desc: "Premiar el rendimiento académico y la excelencia."
    },
    {
      icon: <Zap className="text-gold w-8 h-8" />,
      title: "Esfuerzo",
      desc: "Valorar el camino de quien trabaja y estudia."
    },
    {
      icon: <ShieldCheck className="text-gold w-8 h-8" />,
      title: "Transparencia",
      desc: "Cuentas claras y gestión abierta para todos."
    }
  ];

  return (
    <section id="propuestas" className="bg-primary py-24 px-6 relative overflow-hidden">
      {/* Círculo decorativo de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
            UN PLAN PARA <br />
            <span className="text-gold ">TRANSFORMAR LA FCEyE</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16">
            Nuestras propuestas para la facultad apoyan al <span className="text-white font-bold">mérito, esfuerzo y transparencia</span>. 
            Estamos acá para acompañar a cada estudiante con grandes aspiraciones a realizar un cambio real.
          </p>
        </motion.div>

        {/* Pilares Visuales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primaryDark/45 border border-white/5 p-6 rounded-2xl hover:border-gold/30 transition-all group"
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-white font-bold text-xl uppercase tracking-wider mb-2">{pillar.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Botón de Acción */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link 
            to="/propuestas" 
            className="flex items-center gap-3 bg-gold hover:bg-yellow-600 text-primaryDark font-black py-5 px-10 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition-all uppercase tracking-widest text-sm"
          >
            Ver propuestas en detalle
            <ArrowRight size={20} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}