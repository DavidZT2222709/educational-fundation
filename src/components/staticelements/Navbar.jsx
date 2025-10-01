import React, { useState } from "react";
import logo from "../../assets/logof.png";
import "./Navbar.css"; // Importamos los estilos personalizados
import { FiHome, FiBook, FiUsers, FiPhone, FiMenu, FiX, FiSearch } from "react-icons/fi";
{/*import AllCourses from "../../AllCourses";*/}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#004AAD] text-white shadow-md relative z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO + NOMBRE */}
        <div className="flex items-center space-x-4">
          <img 
            src={logo} 
            alt="Logo Fundación" 
            className="h-16 w-16 rounded-full"
          />
          <span className="font-bold text-xl md:text-2xl tracking-wide leading-tight">
            {/* Vista desktop */}
            <span className="hidden md:inline">
              Fundación Social Educativa 
              <br/>
              Sueños de Amor
            </span>
            {/* Vista móvil */}
            <span className="block md:hidden">
              Fundación Social Educativa
              <br />
              Sueños de Amor
            </span>
          </span>
        </div>

        {/* LINKS + SEARCH (Desktop) */}
        <div className="hidden md:flex items-center space-x-10 text-lg font-semibold relative">
          <a href="/" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiHome className="text-lg" />
            <span className="font-bold uppercase">Inicio</span>
          </a>

          {/* Dropdown Programas */}
          <div className="group relative">
            <a href="/AllCourses" className="nav-link flex items-center space-x-2 hover:text-gray-200">
              <FiBook className="text-lg" />
              <span className="font-bold uppercase">PROGRAMAS</span>
            </a>

            {/* Submenú principal */}
            <div className="absolute left-0 mt-2 w-56 bg-white text-[#004AAD] shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              
              {/* Bachillerato */}
              <div className="group relative">
                <a href="/AllCourses" className="dropdown-link">Bachillerato ▸</a>
                {/* Submenú de Bachillerato */}
                <div className="absolute left-full top-0 w-56 bg-white text-[#004AAD] shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <a href="/curso1" className="dropdown-item">Curso 1</a>
                  <a href="/curso2" className="dropdown-item">Curso 2</a>
                  <a href="/curso3" className="dropdown-item">Curso 3</a>
                </div>
              </div>

              {/* Carreras técnicas */}
              <div className="group relative">
                <a href="/AllCourses" className="dropdown-link">Carreras Técnicas ▸</a>
                {/* Submenú de Carreras Técnicas */}
                <div className="absolute left-full top-0 w-56 bg-white text-[#004AAD] shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <a href="/carrera1" className="dropdown-item">Carrera 1</a>
                  <a href="/carrera2" className="dropdown-item">Carrera 2</a>
                  <a href="/carrera3" className="dropdown-item">Carrera 3</a>
                </div>
              </div>
            </div>
          </div>

          <a href="/Nosotros" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiUsers className="text-lg" />
            <span className="font-bold uppercase">NOSOTROS</span>
          </a>
          
          <a href="/Contact" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiPhone className="text-lg" />
            <span className="font-bold uppercase">CONTACTO</span>
          </a>

          {/* BARRA DE BÚSQUEDA */}
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 rounded-full text-black w-40 md:w-56 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* BOTÓN MENU MOBILE */}
        <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
          <FiMenu />
        </button>

        {/* MENU MOBILE */}
        <nav
          className={`fixed top-0 right-0 h-full w-3/5 max-w-xs bg-[#004AAD] text-white flex flex-col items-center justify-center space-y-10 text-2xl font-semibold transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          {/* Botón cerrar */}
          <button onClick={closeMenu} className="absolute top-4 right-4 text-3xl">
            <FiX />
          </button>

          <a onClick={closeMenu} href="/" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiHome className="text-lg" />
            <span className="font-bold uppercase">Inicio</span>
          </a>

          <a onClick={closeMenu} href="/AllCourses" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiBook className="text-lg" />
            <span className="font-bold uppercase">Programas</span>
          </a>

          <a onClick={closeMenu} href="/Nosotros" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiUsers className="text-lg" />
            <span className="font-bold uppercase">Nosotros</span>
          </a>

          <a onClick={closeMenu} href="/Contact" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiPhone className="text-lg" />
            <span className="font-bold uppercase">Contacto</span>
          </a>

          {/* Búsqueda en móvil */}

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
