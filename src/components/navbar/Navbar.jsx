import React, { useState } from "react";
import logo from "../../assets/logof.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#004AAD] text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO + NOMBRE */}
        <div className="flex items-center space-x-4">
          <img 
            src={logo} 
            alt="Logo Fundación" 
            className="h-16 w-16 rounded-full"
          />
          <span className="font-bold text-xl md:text-2xl tracking-wide leading-tight">
            {/* Vista desktop: todo en una línea */}
            <span className="hidden md:inline">
              Fundación Social Educativa Sueños de Amor
            </span>
            {/* Vista móvil: dividido en dos líneas */}
            <span className="block md:hidden">
              Fundación Social Educativa
              <br />
              Sueños de Amor
            </span>
          </span>
        </div>

        {/* LINKS + SEARCH */}
        <div className="hidden md:flex items-center space-x-10 text-lg font-semibold">
          <a href="#" className="hover:text-yellow-400 transition">Inicio</a>
          <a href="#" className="hover:text-yellow-400 transition">Programas</a>
          <a href="#" className="hover:text-yellow-400 transition">Nosotros</a>
          <a href="#" className="hover:text-yellow-400 transition">Contacto</a>

          {/* BARRA DE BÚSQUEDA */}
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 rounded-full text-black w-40 md:w-56 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* BOTÓN MENU MOBILE */}
        <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
          <span className="material-symbols-outlined">Menú</span>
        </button>

        {/* MENU MOBILE */}
        <nav
          className={`fixed top-0 right-0 h-full w-3/5 max-w-xs bg-[#004AAD] text-white flex flex-col items-center justify-center space-y-10 text-2xl font-semibold transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          {/* Botón cerrar dentro del menú */}
          <button onClick={closeMenu} className="absolute top-4 right-4 text-3xl">
            <span className="material-symbols-outlined">X</span>
          </button>

          <a onClick={closeMenu} href="#" className="hover:text-yellow-400 transition">Inicio</a>
          <a onClick={closeMenu} href="#" className="hover:text-yellow-400 transition">Programas</a>
          <a onClick={closeMenu} href="#" className="hover:text-yellow-400 transition">Nosotros</a>
          <a onClick={closeMenu} href="#" className="hover:text-yellow-400 transition">Contacto</a>

          {/* Barra de búsqueda en móvil */}
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 rounded-full text-black w-56 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
