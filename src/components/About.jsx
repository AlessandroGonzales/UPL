// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-nosotros" className="bg-primary py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* COLUMNA IZQUIERDA: TEXTO NARRATIVO */}
            <div className="space-y-6">
              <h2 className="text-white text-4xl md:text-5xl font-black leading-tight text-center">
                SOMOS UNIVERSITARIOS <br />
                <span className="text-gold ">POR LA LIBERTAD</span>
              </h2>

              <div className="space-y-2 text-gray-300 text-lg leading-relaxed text-center">
                <p>
                  Somos la única opción liberal en la universidad. Nacimos para
                  defender al estudiante y su derecho a cursar, rendir y
                  formarse sin obstáculos, presiones ni abusos de poder.
                </p>
                <p className="">
                  Hace casi un año empezamos levantando la voz en las asambleas
                  para evitar las tomas y las decisiones que perjudican a la
                  mayoría. Hoy damos un paso más: estamos acá para acompañarte,
                  representarte y defenderte cuando más se necesita.
                </p>
                <br/>
                <p className="font-semibold text-white ">
                  El país está cambiando y las universidades también tienen que
                  hacerlo.
                </p>
              </div>
            </div>
          </motion.div>
          {/* COLUMNA DERECHA: PILARES/VALORES (Diseño Minimalista) */}
          <div className="bg-primaryDark/50 p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
            {/* Decoración de fondo */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/15 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-700" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gold"></span>
                Nuestras Convicciones
              </h3>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-gold font-bold text-xl">01.</span>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                      Sin Adoctrinamiento
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Defendemos una educación de calidad enfocada en el mérito
                      y el respeto por las ideas.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold text-xl">02.</span>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                      Soluciones Concretas
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      No venimos a prometer lo imposible. Venimos a trabajar por
                      una universidad al servicio del estudiante.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold text-xl">03.</span>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                      Libertad Real
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      La libertad se cuida todos los días. Sin libertad, la
                      educación pierde su sentido.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-gold font-black text-center text-xl tracking-tighter">
                  POR UNA UNIVERSIDAD AL SERVICIO DEL ESTUDIANTE.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
