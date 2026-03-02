import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import uno from "../assets/uno.png";
import dos from "../assets/dos.png";
import tres from "../assets/tres.png";
import cuatro from "../assets/cuatro.png";
import cinco from "../assets/cinco.png";
import seis from "../assets/seis.png";
import siete from "../assets/siete.png";
import ocho from "../assets/ocho.png";
import nueve from "../assets/nueve.png";
import diez from "../assets/diez.png";

const decalogoItems = [
  { id: 1, title: "Vida, Libertad y Propiedad", img: uno },
  { id: 2, title: "Igualdad ante la Ley", img: dos },
  { id: 3, title: "Libre Mercado", img: tres },
  { id: 4, title: "Propiedad Privada", img: cuatro },
  { id: 5, title: "Cooperación Social", img: cinco },
  { id: 6, title: "Gobierno Limitado", img: seis },
  { id: 7, title: "Responsabilidad Individual", img: siete },
  { id: 8, title: "Apertura al Mundo", img: ocho },
  { id: 9, title: "Competencia", img: nueve },
  { id: 10, title: "Proyecto de Vida", img: diez },
];

const DecalogoCard = ({ item, isSide }) => {
  if (!item)
    return <div className="hidden sm:block flex-1 bg-primaryDark/50"></div>;

  return (
    <div
      className={`relative w-full h-full overflow-hidden transition-all duration-700 ${isSide ? "opacity-30 blur-[3px] scale-90" : "opacity-100"}`}
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        /* Usamos object-contain para que la placa no se corte si el marco es muy grande */
        className="w-full h-full "
      />

      {/* Overlay sutil para mejorar el contraste en las de los lados */}
      {isSide && <div className="absolute inset-0 bg-primaryDark/40" />}
    </div>
  );
};

export default function DecalogoCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // eslint-disable-next-line react-hooks/immutability
      moveNext();
    }, 5000);
    return () => clearInterval(id);
  }, [index]);

  const moveNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % decalogoItems.length);
  };

  const movePrev = () => {
    setDirection(-1);
    setIndex(
      (prev) => (prev - 1 + decalogoItems.length) % decalogoItems.length,
    );
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, zIndex: 1 },
    exit: (dir) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0, zIndex: 0 }),
  };

  const leftIndex = (index - 1 + decalogoItems.length) % decalogoItems.length;
  const rightIndex = (index + 1) % decalogoItems.length;

  return (
    <section className="bg-primaryDark py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <div>
          <p className="text-gold font-bold tracking-[4px] uppercase text-xs mb-2 ">
            Principios Fundamentales
          </p>
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase leading-none">
            El Decálogo <br />
            <span className="text-gold ">Liberal</span>
          </h2>
        </div>
      </div>

      {/* CONTENEDOR AJUSTADO: max-w-5xl y mx-auto para que no sea tan ancho en PC */}
      <div className="relative w-full max-w-5xl mx-auto h-[60vh] md:h-[70vh]">
        {/* Proporción cambiada a 0.8fr 2fr 0.8fr para que el centro no se estire de más */}
        <div className="grid grid-cols-1 sm:grid-cols-[0.8fr_2fr_0.8fr] w-full h-full gap-4 px-1">
          {/* LADO IZQUIERDO */}
          <div className="hidden sm:block h-full rounded-2xl overflow-hidden border border-white/5 bg-primary/20">
            <DecalogoCard item={decalogoItems[leftIndex]} isSide={true} />
          </div>

          {/* CENTRO: Añadí un aspect-ratio sugerido para que mantenga forma de tarjeta */}
          <div className="relative h-full overflow-hidden rounded-2xl border-2 border-gold/40 shadow-[0_0_60px_rgba(212,175,55,0.1)] bg-primaryDark">
            {/* Imagen animada */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 260, damping: 26 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <DecalogoCard item={decalogoItems[index]} isSide={false} />
              </motion.div>
            </AnimatePresence>

            {/* Flechas – ahora dentro del contenedor central */}
            <button
              onClick={movePrev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 
               p-3 md:p-2 rounded-full bg-black/40 backdrop-blur-sm 
               text-white/80 hover:text-gold hover:bg-black/60 
               border border-white/10 transition-all duration-300 
               active:scale-90 z-20"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button
              onClick={moveNext}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 
               p-3 md:p-2 rounded-full bg-black/40 backdrop-blur-sm 
               text-white/80 hover:text-gold hover:bg-black/60 
               border border-white/10 transition-all duration-300 
               active:scale-90 z-20"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          {/* LADO DERECHO */}
          <div className="hidden sm:block h-full rounded-2xl overflow-hidden border border-white/5 bg-primary/20">
            <DecalogoCard item={decalogoItems[rightIndex]} isSide={true} />
          </div>
        </div>
      </div>

      

      {/* INDICADORES */}
      <div className="flex justify-center gap-2 mt-12">
        {decalogoItems.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`transition-all duration-500 h-1.5 rounded-full ${i === index ? "w-10 bg-gold" : "w-3 bg-white/10 hover:bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
