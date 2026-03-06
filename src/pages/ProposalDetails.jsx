import { useParams, Link } from "react-router-dom";
import { proposals } from "../data/proposalsData";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProposalDetails() {
  const { id } = useParams();
  const proposal = proposals.find((p) => p.id === id);

  // Scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!proposal) {
    return (
      <>
        <Navbar />
        <div className="bg-primary min-h-screen flex items-center justify-center">
          <p className="text-white text-xl uppercase tracking-widest">Propuesta no encontrada</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-primary min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/propuestas" 
            className="text-gray-400 hover:text-gold flex items-center gap-2 mb-10 transition-colors uppercase text-xs font-bold tracking-widest group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Volver a propuestas
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="bg-gold/10 text-gold font-black py-2 px-4 rounded-lg text-sm mb-6 inline-block">
                PROPUESTA #{proposal.number}
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-black mb-8 leading-tight uppercase">
                {proposal.title}
              </h2>
              
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
                {proposal.fullDesc}
              </p>

              {proposal.highlight && (
                <div className="bg-primaryDark border-l-4 border-gold p-6 mb-8 italic shadow-lg">
                  <p className="text-white font-bold text-lg">"{proposal.highlight}"</p>
                </div>
              )}

              <div className="flex items-center gap-3 text-gold/80 font-semibold border-t border-white/5 pt-6">
                <CheckCircle size={20} className="text-gold" />
                <span className="uppercase tracking-widest text-xs">Compromiso UPL — FCEyE</span>
              </div>
            </motion.div>

            {/* IMAGEN */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className=" bg-primaryDark rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
                <img 
                  src={proposal.image} 
                  alt={proposal.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x600/1a1a1a/D4AF37?text=UPL+PROPUESTA"; }}
                />
              </div>
              {/* Decoración de fondo */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/30 rounded-full blur-3xl z-0" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl z-0" />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}