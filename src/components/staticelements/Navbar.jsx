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
              <span className="font-bold uppercase">Programas</span>
            </a>

            {/* Mega Menú */}
            <div className="absolute left-0 mt-4 w-[700px] bg-white text-[#004AAD] shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-3 transition-all duration-500 ease-in-out p-6 grid grid-cols-2 md:grid-cols-3 gap-6 z-50">
    
              {/* Columna 1 */}
              <div>
                <h3 className="font-bold text-[#004AAD] mb-3 border-b pb-1">Carreras Técnicas</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/enfermeria" className="hover:text-yellow-500 transition">Auxiliar en Enfermería</a></li>
                  <li><a href="/farmacia" className="hover:text-yellow-500 transition">Auxiliar en Farmacia</a></li>
                  <li><a href="/salud" className="hover:text-yellow-500 transition">Administración en Salud</a></li>
                  <li><a href="/seguridad" className="hover:text-yellow-500 transition">Seguridad Ocupacional</a></li>
                </ul>
              </div>

              {/* Columna 2 */}
              <div>
                <h3 className="font-bold text-[#004AAD] mb-3 border-b pb-1">Formación Complementaria</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/computadores" className="hover:text-yellow-500 transition">Operador de Computadores</a></li>
                  <li><a href="/contable" className="hover:text-yellow-500 transition">Auxiliar Contable y Financiero</a></li>
                  <li><a href="/administrativo" className="hover:text-yellow-500 transition">Asistente Administrativo</a></li>
                  <li><a href="/ingles" className="hover:text-yellow-500 transition">Inglés por Niveles</a></li>
                </ul>
              </div>

              {/* Columna 3 */}
              <div>
                <h3 className="font-bold text-[#004AAD] mb-3 border-b pb-1">Otros Programas</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/belleza" className="hover:text-yellow-500 transition">Belleza y Peluquería</a></li>
                  <li><a href="/maquinaria" className="hover:text-yellow-500 transition">Maquinaria Pesada</a></li>
                  <li><a href="/homecare" className="hover:text-yellow-500 transition">Home Care</a></li>
                  <li><a href="/primera-infancia" className="hover:text-yellow-500 transition">Atención a la Primera Infancia</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group relative">
            <a href="/Nosotros" className="nav-link flex items-center space-x-2 hover:text-gray-200">
              <FiUsers className="text-lg" />
              <span className="font-bold uppercase">Fundación</span>
            </a>

            {/* Mega Menú */}
            <div className="absolute left-0 mt-4 w-72 bg-white text-[#004AAD] shadow-2xl rounded-xl opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-3 
                  transition-all duration-500 ease-in-out p-6 flex flex-col space-y-3 z-50">

                <a href="/Nosotros" className="hover:text-yellow-500 transition">Nosotros</a>
                <a href="/Nosotros" className="hover:text-yellow-500 transition">Misión</a>
                <a href="/Nosotros" className="hover:text-yellow-500 transition">Visión</a>
                <a href="/Nosotros" className="hover:text-yellow-500 transition">Certificados</a>
                <a href="/Nosotros" className="hover:text-yellow-500 transition">Certificado MinEducación</a>
                <a href="/Nosotros" className="hover:text-yellow-500 transition">Certificado RUT</a>
              </div>
          </div>

          <a href="/Contact" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiPhone className="text-lg" />
            <span className="font-bold uppercase">Contacto</span>
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
