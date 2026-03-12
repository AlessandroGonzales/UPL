import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/#sobre-nosotros" },
    { name: "Facultades", href: "/#facultades" },
    { name: "Súmate", href: "/#mensaje", highlight: true },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primaryDark/90 backdrop-blur-md py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a href="/">
            <span className="text-white font-bold tracking-tight text-xl sm:text-xl">
              UPL <span className="text-gold">FCEyE</span>
            </span>
          </a>
        </div>

        {/* MENU DESKTOP (DERECHA) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${
                link.highlight
                  ? "bg-gold text-primaryDark px-5 py-2.5 rounded-full font-bold hover:scale-105 active:scale-95"
                  : "text-gray-200 hover:text-gold"
              } transition-all duration-200 text-sm lg:text-base font-medium`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* BOTÓN HAMBURGUESA (solo mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 -mr-2 "
          aria-label="Toggle menú"
        >
          <div className="w-7 flex flex-col gap-1.5 ">
            <span
              className={`h-0.5 w-full bg-gold transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-gold transition-all duration-300 ${
                isOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-gold transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <div
        className={`absolute top-full left-0 w-full bg-primaryDark transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 py-6 " : "max-h-0 opacity-0 py-0 "
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center gap-6 px-4 ">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg sm:text-xl transition-colors ${
                link.highlight
                  ? "text-gold font-bold hover:text-gold/80 "
                  : "text-white hover:text-gold "
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
