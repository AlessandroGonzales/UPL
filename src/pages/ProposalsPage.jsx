import { proposals } from "../data/proposalsData";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function ProposalsPage() {
  // Scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-primary min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-white text-5xl font-black mb-4 uppercase">
              Nuestras <span className="text-gold">Propuestas</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
              Un plan integral para transformar la FCEyE basado en el mérito, la transparencia y la libertad del estudiante.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proposals.map((prop, index) => (
              <motion.div 
                key={prop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-primaryDark border border-white/5 p-8 rounded-3xl flex flex-col justify-between group hover:border-gold/30 transition-all shadow-xl"
              >
                <div>
                  <span className="text-gold font-black text-4xl opacity-80">#{prop.number}</span>
                  <h3 className="text-white text-2xl font-bold mt-4 mb-3 leading-tight uppercase group-hover:text-gold transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {prop.shortDesc}
                  </p>
                </div>
                <Link 
                  to={`/propuestas/${prop.id}`}
                  className="text-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Ver detalle completo →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}