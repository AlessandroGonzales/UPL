import { useParams, Link } from "react-router-dom";
import { facultiesData } from "../data/facultiesData";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import {
  Target,
  AlertCircle,
  Instagram,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export default function FacultyDetail() {
  const { id } = useParams();
  const faculty = facultiesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!faculty)
    return (
      <div className="text-white text-center py-20">Facultad no encontrada</div>
    );

  return (
    <>
      <Navbar />
      <main className="bg-primary min-h-screen">
        {/* HERO DE FACULTAD (Imagen de grupo) */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src={faculty.heroImage}
            className="absolute inset-0 w-full h-full object-cover opacity-70 hover:grayscale-0 transition-all duration-1000"
            alt={faculty.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent" />

          <div className="relative z-10 text-center px-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold font-black tracking-[5px] uppercase text-xs mb-4 block"
            >
              UPL Santa Fe — Sede {faculty.short}
            </motion.span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-white text-4xl md:text-6xl font-black uppercase leading-none"
            >
              {faculty.name}
            </motion.h1>
          </div>
        </section>

        {/* SECCIÓN "POR QUÉ NOSOTROS" */}
        <section className="pb-2  px-6 max-w-6xl mx-auto">
          <div className="bg-primaryDark/50 rounded-[40px] p-8 md:p-16 border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-white text-3xl font-black mb-6 uppercase ">
                La batalla por{" "}
                <span className="text-gold">{faculty.short}</span>
              </h3>
              <p className="text-gray-400 leading-relaxed ">
                {faculty.description}
              </p>
            </div>
            <div className="space-y-4">
              {faculty.challenges.map((item, i) => (
                <div
                  key={i}
                  className="bg-primary p-6 rounded-2xl border border-white/5"
                >
                  <h4 className="text-gold font-bold text-sm uppercase mb-2 flex items-center gap-2">
                    <AlertCircle size={14} /> {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-6 max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 gap-16 items-center">
            {/* TEXTO SUPERIOR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <span className="text-gold font-black tracking-widest uppercase text-xs mb-2 block">
                Nuestra Trayectoria
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-black uppercase mb-8 leading-tight ">
                De un ideal a una <span className="text-gold">fuerza real</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light    border-l-2 border-gold/30 pl-6">
                "{faculty.historyShort?.[0]}"
              </p>
            </motion.div>

            {/* COMPOSICIÓN DE IMÁGENES ASIMÉTRICA */}
            <div className="relative grid grid-cols-12 gap-4 h-[400px] md:h-[600px]">
              {/* Imagen Principal */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="col-span-8 h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10"
              >
                <img
                  src={faculty.historyImages?.[0]}
                  alt="Historia 1"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primaryDark/80 to-transparent" />
              </motion.div>

              {/* Imagen Secundaria Flotante */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="col-span-4 h-[70%] mt-auto rounded-3xl overflow-hidden border border-gold/90 shadow-2xl relative z-20 -ml-12 md:-ml-20 mb-12"
              >
                <img
                  src={faculty.historyImages?.[1]}
                  alt="Historia 2"
                  loading="lazy"
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gold/10" />
              </motion.div>

              {/* Decoración de fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[120px] rounded-full -z-10" />
            </div>

            {/* TEXTO INFERIOR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-end"
            >
              <div className="max-w-2xl text-right">
                <p className="text-gray-400 text-lg leading-relaxed">
                  {faculty.historyShort?.[1]}
                </p>
                <div className="mt-8 flex justify-end items-center gap-4">
                  <div className="h-[1px] w-20 bg-gold/40" />
                  <span className="text-white font-black uppercase tracking-tighter text-xl">
                    UPL <span className="text-gold">{faculty.short}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-12 md:py-24 px-4 md:px-6 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-primaryDark to-primary border border-white/5 rounded-[30px] md:rounded-[40px] p-6 md:p-16 shadow-2xl"
            >
              <h2 className="text-white text-2xl md:text-4xl font-black uppercase mb-4 leading-tight">
                Conectate con <br className="block md:hidden" />
                <span className="text-gold">UPL {faculty.short}</span>
              </h2>
              <p className="text-gray-400 mb-8 md:mb-10 text-base md:text-lg max-w-2xl mx-auto">
                Seguí nuestras batallas diarias y sumate a los grupos de debate
                específicos de tu facultad.
              </p>

              {/* Contenedor de botones: Columna en mobile, Fila en desktop */}
              <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-4 md:gap-6">
                {/* Instagram */}
                <a
                  href={faculty.social?.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-6 md:px-8 py-4 rounded-2xl border border-white/10 transition-all group w-full md:w-auto"
                >
                  <Instagram
                    size={20}
                    className="text-gold group-hover:scale-110 transition-transform"
                  />
                  <span className="font-bold uppercase tracking-widest text-xs md:text-sm">
                    Instagram
                  </span>
                </a>

                {/* Linktree */}
                <a
                  href={faculty.social?.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-6 md:px-8 py-4 rounded-2xl border border-white/10 transition-all group w-full md:w-auto"
                >
                  <ExternalLink
                    size={20}
                    className="text-gold group-hover:scale-110 transition-transform"
                  />
                  <span className="font-bold uppercase tracking-widest text-xs md:text-sm">
                    Links Útiles
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={faculty.social?.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] px-6 md:px-8 py-4 rounded-2xl border border-[#25D366]/20 transition-all group w-full md:w-auto"
                >
                  <MessageCircle
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-bold uppercase tracking-widest text-xs md:text-sm">
                    WhatsApp
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 border-l-4 border-gold pl-8"
            >
              <h2 className="text-white text-4xl md:text-5xl font-black uppercase mb-4">
                Nuestras <span className="text-gold">Propuestas</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
                Plan integral de gestión para{" "}
                <span className="text-white font-bold">{faculty.name}</span>.
                Basado en la transparencia, el mérito y la libertad.
              </p>
            </motion.div>

            {/* GRID DE TARJETAS ESTILO UPL */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.proposals.map((prop, index) => (
                <motion.div
                  key={prop.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-primaryDark border border-white/5 p-8 rounded-3xl flex flex-col justify-between group hover:border-gold/40 transition-all shadow-2xl relative overflow-hidden"
                >
                  {/* Decoración sutil de fondo de tarjeta */}
                  <div className="absolute -right-4 -top-4 text-white/5 font-black text-9xl z-0 group-hover:text-gold/5 transition-colors">
                    {prop.number}
                  </div>

                  <div className="relative z-10">
                    <span className="text-gold font-black text-4xl opacity-90">
                      #{prop.number}
                    </span>
                    <h3 className="text-white text-2xl font-bold mt-4 mb-3 leading-tight uppercase group-hover:text-gold transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                      {prop.shortDesc}
                    </p>
                  </div>

                  <Link
                    to={`/propuestas/${prop.id}`}
                    className="relative z-10 text-gold font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:gap-4 transition-all border-t border-white/10 pt-6"
                  >
                    Ver detalle de la propuesta →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* SECCIÓN DE REDES SOCIALES ESPECÍFICAS */}
      </main>
      <Footer />
    </>
  );
}
