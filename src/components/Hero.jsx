import logo from "../assets/logotipoupl.png"
import grupo from "../assets/grupounr.jpg"

export default function Hero() {
  return (
    /* Cambiamos min-h-screen por flex-col en mobile para que el contenido fluya hacia abajo */
    <section className="relative w-full flex flex-col md:min-h-screen md:items-center md:justify-center overflow-hidden bg-primaryDark">
      
      {/* CONTENEDOR DE IMAGEN */}
      <div className="relative w-full h-[45vh] md:absolute md:inset-0 md:h-full z-0">
        <img 
          src={grupo} 
          alt="Grupo UPL" 
          /* En mobile usamos object-top para priorizar las caras, en desktop center */
          className="h-full w-full object-cover object-top md:object-center opacity-50 animate-fade-in"
        />
        
        {/* GRADIENTES DINÁMICOS */}
        {/* Este overlay en mobile hace que la foto se funda con el fondo oscuro antes de llegar al texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primaryDark/20 to-primaryDark md:hidden" />
        
        {/* Este es el overlay clásico para Desktop */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-primaryDark/30 via-primaryDark/70 to-primaryDark" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      {/* Agregamos un padding top negativo en mobile para que el logo suba un poco sobre la imagen */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-8 md:py-0 -mt-20 md:mt-0 max-w-4xl">
        
        {/* Contenedor del Logo */}
        <div className=" animate-fade-in">
          <img
            src={logo}
            alt="Logo UPL"
            /* Reducimos un poco el tamaño en mobile para que no empuje todo hacia abajo */
            className="w-72 h-auto md:w-80 "
          />
        </div>

        <p className="text-gray-300 mt-2 text-lg md:text-2xl font-light max-w-2xl animate-fade-in">
          Ideas claras. Convicciones firmes. <br className="hidden md:block" />
          Un nuevo futuro para la <span className="text-white font-semibold">Universidad Nacional de Rosario</span>.
        </p>

        {/* Botones de Acción */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 w-full md:w-auto animate-fade-in">
          <button className="bg-gold hover:bg-yellow-600 text-primaryDark font-bold py-4 px-10 rounded-full transition-all transform active:scale-95 shadow-lg">
            Quienes somos
          </button>
          <button className="border-2 border-white/20 hover:border-white text-white font-medium py-4 px-10 rounded-full transition-all">
            Nuestras propuestas
          </button>
        </div>
      </div>
    </section>
  )
}