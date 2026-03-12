import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logotipoupl.png";
import imagen1 from "../assets/uplunidos.jpg"; 
import imagen3 from "../assets/uplutn.jpeg"; 
import imagen2 from "../assets/utn.png"


export default function Hero() {
  const images = [imagen1, imagen2, imagen3];
  const [index, setIndex] = useState(0);

  // Lógica para cambiar la imagen cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="inicio"
      className="relative w-full flex flex-col md:min-h-screen md:items-center md:justify-center overflow-hidden bg-primaryDark"
    >
      {/* CONTENEDOR DE IMÁGENES CON TRANSICIÓN */}
      <div className="relative w-full h-[50vh] md:absolute md:inset-0 md:h-full z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1.0 }} // Mantenemos la opacidad baja para que el texto destaque
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8,  ease: "easeInOut" }}
            className="h-full w-full object-cover object-top md:object-center"
          />
        </AnimatePresence>

        {/* GRADIENTES DINÁMICOS (se mantienen sobre las imágenes) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primaryDark/20 to-primaryDark md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-primaryDark/30 via-primaryDark/70 to-primaryDark" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-0 -mt-16 md:mt-0 max-w-4xl">
        {/* Contenedor del Logo con sutil animación de entrada */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logo}
            alt="Logo UPL"
            className="w-64 h-auto md:w-80 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 mt-6 text-lg md:text-2xl font-light max-w-2xl"
        >
          Ideas claras. Convicciones firmes. <br className="hidden md:block" />
          El futuro del liberalismo en la{" "}
          <span className="text-white font-bold">
            Universidad Nacional de Rosario
          </span>
          .
        </motion.p>

        {/* Botones de Acción */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col md:flex-row gap-4 w-full md:w-auto"
        >
          <a
            href="#sobre-nosotros"
            className="bg-gold hover:bg-yellow-600 text-primaryDark font-black py-4 px-12 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(212,175,55,0.2)] text-center uppercase tracking-widest text-sm"
          >
            Quienes somos
          </a>
          <a
            href="/#facultades"
            className="border-2 border-white/20 hover:border-white/60 hover:bg-white/5 text-white font-bold py-4 px-12 rounded-full transition-all text-center uppercase tracking-widest text-sm"
          >
            Ver Facultades
          </a>
        </motion.div>
      </div>
      
      {/* Indicador visual de scroll (opcional, queda muy Pro) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}