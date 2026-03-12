import logo from "../assets/logotipoupl.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primaryDark border-t border-white/5 pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* LOGO Y NOMBRE */}
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="UPL Logo" loading="lazy" className="h-24 w-auto mb-4 opacity-80"  />
          <h3 className="text-white font-bold tracking-widest text-sm uppercase">
            Universitarios <span className="text-gold">Por La Libertad</span>
          </h3>
          <p className="text-gray-400 text-base mt-2 text-center">Facultad de Ciencias Económicas y Estadística - UNR</p>
        </div>

        {/* REDES SOCIALES */}
        <div className="flex gap-8 mb-10">
          {/* Instagram */}
          <a href="https://www.instagram.com/upl_santafe/" className="text-gray-400 hover:text-gold transition-colors duration-300" aria-label="Instagram" target="_blanck">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          {/* X (Twitter) */}
          <a href="https://x.com/upl_santafe/media" className="text-gray-400 hover:text-gold transition-colors duration-300" aria-label="X" target="_blanck">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/>
            </svg>
          </a>

        </div>


        {/* COPYRIGHT Y TEXTO LEGAL */}
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-gray-400 text-[10px] md:text-xs uppercase tracking-[2px]">
          <p>© {currentYear} UPL - TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-6">
            <p>Hecho por <span className="text-white font-semibold">Alessandro Gonzales</span></p> 
          </div>
        </div>
      </div>
    </footer>
  );
}