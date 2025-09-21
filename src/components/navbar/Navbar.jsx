import React from "react";
import logo from "../../assets/logof.png";

const Navbar = () => {
  return (
    <nav className="bg-[#004AAD] text-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo Fundación" className="h-12 w-12 rounded-full" />
          <span className="font-bold text-lg tracking-wide">Fundación Social Educativa Sueños de Amor</span>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex space-x-8 text-base font-medium">
          <a href="#" className="hover:text-yellow-400 transition">Inicio</a>
          <a href="#" className="hover:text-yellow-400 transition">Programas</a>
          <a href="#" className="hover:text-yellow-400 transition">Nosotros</a>
          <a href="#" className="hover:text-yellow-400 transition">Contacto</a>
        </div>

        {/* SEARCH + TOGGLE */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-full text-black w-40 md:w-56 focus:outline-none"
            />
          </div>
          <button className="p-2 rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition">
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
