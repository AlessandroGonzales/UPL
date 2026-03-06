import { useParams, Link } from "react-router-dom";
import { proposals } from "../data/proposalsData";
import { ArrowLeft, CheckCircle, Share2 } from "lucide-react"; // Importamos Share2
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProposalDetails() {
  const { id } = useParams();
  const proposal = proposals.find((p) => p.id === id);

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

  // Lógica para compartir en WhatsApp
  const handleShareWhatsApp = () => {
    const shareUrl = window.location.href;
    const shareText = `¡Mirá esta propuesta de UPL para la FCEyE! \n\n*${proposal.title}*\n\nLeela completa acá: ${shareUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, "_blank");
  };

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
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
                <div className="bg-primaryDark border-l-4 border-gold p-6 mb-8 italic shadow-lg text-white font-bold text-lg">
                  "{proposal.highlight}"
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
              <div className="bg-primaryDark rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
                <img 
                  src={proposal.image} 
                  alt={proposal.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x600/1a1a1a/D4AF37?text=UPL+PROPUESTA"; }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/30 rounded-full blur-3xl z-0" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl z-0" />
            </motion.div>
          </div>

          {/* SECCIÓN COMPARTIR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-16 text-center"
          >
            <h3 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">
              ¿Te gusta esta propuesta?
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
              Compartila para que llegue a cada estudiante de la FCEyE. El cambio lo hacemos realidad entre todos.
            </p>
            
            <button
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-4 px-10 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.2)] transition-all active:scale-95 uppercase tracking-widest text-sm"
            >
              Compartir en WhatsApp
              <Share2 size={18} />
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}