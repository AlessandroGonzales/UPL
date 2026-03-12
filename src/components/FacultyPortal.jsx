// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Microscope, Landmark, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import fceye from "../assets/fceye.png"
import derecho from "../assets/derecho.jpg"
import fpolit from "../assets/fpoli.jpeg"

export default function FacultyPortal() {
  const faculties = [
    {
      id: "fceye",
      name: "Ciencias Económicas y Estadística",
      short: "FCEyE",
      desc: "Recuperando el valor del mérito y la transparencia en la gestión de recursos.",
      icon: <Landmark className="text-gold w-6 h-6" />,
      image: fceye, 
      config: "lazy"
    },
    {
      id: "derecho",
      name: "Facultad de Derecho",
      short: "UNR Derecho",
      desc: "Defendiendo la libertad individual y la excelencia académica frente al adoctrinamiento.",
      icon: <BookOpen className="text-gold w-6 h-6" />,
      image: derecho,
      config: "lazy"
    },
    {
      id: "fpolit",
      name: "Facultad de Ciencia Política y RRII",
      short: "FCPOLIT",
      desc: "Terminar con los privilegios en la FCPOLIT y reconocer el merito, esfuerzo y dedicación ",
      icon: <Microscope className="text-gold w-6 h-6" />,
      image: fpolit,
      config: "lazy"
    },
    // Podés agregar más facultades fácilmente aquí
  ];

  return (
    <section id="facultades" className="bg-primary py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
            PRESENCIA EN <span className="text-gold">LAS FACULTADES</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Estamos presentes donde el estudiante quiere progresar. Seleccioná tu facultad para conocer nuestras batallas y propuestas específicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((fac, index) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-primaryDark rounded-3xl overflow-hidden border border-white/5 hover:border-gold/50 transition-all duration-500"
            >
              {/* Imagen de Fondo con Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={fac.image} 
                  alt={fac.name} 
                  loading={fac.config}
                  className="w-full h-full object-cover group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primaryDark  to-transparent" />
              </div>

              {/* Contenido Card */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[380px]">
                <div>
                  <div className="bg-gold/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    {fac.icon}
                  </div>
                  <span className="text-gold font-bold text-xs tracking-[3px] uppercase mb-2 block">{fac.short}</span>
                  <h3 className="text-white text-2xl font-black mb-4 leading-tight uppercase group-hover:text-gold transition-colors italic">
                    {fac.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {fac.desc}
                  </p>
                </div>

                <Link 
                  to={`/facultad/${fac.id}`} 
                  className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest border-t border-white/10 pt-6 group-hover:gap-4 transition-all"
                >
                  Ver plan de acción
                  <ArrowUpRight size={16} className="text-gold" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}