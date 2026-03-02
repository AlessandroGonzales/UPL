// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function ContactCTA() {
  const email = "jamancapiero85@gmail.com"; // Reemplazalo por el mail de UPL
  const subject = "Propuesta / Inquietud de un estudiante - FCEyE";

  return (
    <section id="mensaje" className="bg-primaryDark py-24 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Elemento visual de fondo: Símbolo de libertad difuminado */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gold/10 rounded-2xl border border-gold/20">
              <Mail className="text-gold w-10 h-10" />
            </div>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
            LA UNIVERSIDAD SE <br />
            <span className="text-gold ">CONSTRUYE ESCUCHANDO</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
            No somos un grupo cerrado; somos una herramienta al servicio de tus ideas. 
            Si tenés una propuesta para mejorar la facultad, una inquietud sobre el cursado o simplemente querés 
            formar parte de la nueva FCEyE, envia tu mensaje.
          </p>

          <div className="flex flex-col items-center gap-4">
            <motion.a
              href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gold hover:bg-yellow-600 text-primaryDark font-black py-5 px-10 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition-all uppercase tracking-widest text-sm"
            >
              Hablemos ahora
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
            
            <p className="text-gray-500 text-xs uppercase tracking-[3px] mt-4">
              Respondemos cada mensaje
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}