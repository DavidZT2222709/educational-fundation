import React, { useState } from "react";
import logo from "../../assets/logof.png";
import "./Navbar.css";
import {
  FiHome,
  FiBook,
  FiUsers,
  FiPhone,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaChild } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const carreras_tecnicas = [
    "Auxiliar en Enfermería",
    "Auxiliar de Farmacia",
    "Auxiliar Administrativo en Salud",
  ];

  const cursos_cortos = [
    "Maquillaje Profesional",
    "Uñas Acrílicas",
    "Logística y Bodegaje",
    "Manipulación de Alimentos",
    "Inglés para Niños",
  ];

  const cursos_certificados = [
    "Combo BLS + ACLS",
    "AIEPI",
    "Humanización",
    "Gestión del Duelo",
  ];

  return (
    <nav className="bg-[#004AAD] text-white shadow-md relative z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO + NOMBRE */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo Fundación" className="h-16 w-16 rounded-full" />
          <span className="font-bold text-xl md:text-2xl tracking-wide leading-tight">
            <span className="hidden md:inline">
              Fundación Social Educativa <br /> Sueños de Amor
            </span>
            <span className="block md:hidden">
              Fundación Social Educativa <br /> Sueños de Amor
            </span>
          </span>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center space-x-10 text-lg font-semibold relative">
          {/* INICIO */}
          <a href="/" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiHome className="text-lg" />
            <span className="font-bold uppercase">Inicio</span>
          </a>

          {/* EDUCACIÓN BÁSICA */}
          <a href="/Basiceducation" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FaChild className="text-lg" />
            <span className="font-bold uppercase">Educación Básica</span>
          </a>

          {/* PROGRAMAS */}
          <div className="group relative">
            <a
              href="/AllCourses"
              className="nav-link flex items-center space-x-2 hover:text-gray-200"
            >
              <FiBook className="text-lg" />
              <span className="font-bold uppercase">Programas</span>
            </a>

            {/* MEGA MENÚ */}
            <div
              className="fixed left-1/2 top-[100px] -translate-x-1/2 
              w-[90vw] max-w-[700px] bg-white text-[#004AAD] shadow-2xl rounded-xl 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-300 ease-in-out p-6 grid grid-cols-2 md:grid-cols-3 gap-6 z-50"
            >
              {/* Carreras */}
              <div>
                <h3 className="font-bold mb-3 border-b pb-1 text-[#004AAD]">Carreras Técnicas</h3>
                <ul className="space-y-2 text-sm">
                  {carreras_tecnicas.map((t, i) => (
                    <li key={i}>
                      <a
                        href={`/AllCourses?tipo=tecnicas&curso=${encodeURIComponent(t)}`}
                        className="hover:text-yellow-500 transition"
                      >
                        {t}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm underline">
                  <li>
                    <a
                      href={'/AllCourses'}
                      className="hover:text-yellow-500 transition"
                    >
                      Mas Carreras Tecnicas ➝
                    </a>
                  </li>
                </ul>
              </div>

              {/* Cortos */}
              <div>
                <h3 className="font-bold mb-3 border-b pb-1 text-[#004AAD]">Cursos Cortos</h3>
                <ul className="space-y-2 text-sm">
                  {cursos_cortos.map((t, i) => (
                    <li key={i}>
                      <a
                        href={`/AllCourses?tipo=cortos&curso=${encodeURIComponent(t)}`}
                        className="hover:text-yellow-500 transition"
                      >
                        {t}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm underline">
                  <li>
                    <a
                      href={'/AllCourses'}
                      className="hover:text-yellow-500 transition"
                    >
                      Mas Cursos Cortos ➝
                    </a>
                  </li>
                </ul>
              </div>

              {/* Certificados */}
              <div>
                <h3 className="font-bold mb-3 border-b pb-1 text-[#004AAD]">Cursos Certificados</h3>
                <ul className="space-y-2 text-sm">
                  {cursos_certificados.map((t, i) => (
                    <li key={i}>
                      <a
                        href={`/AllCourses?tipo=certificados&curso=${encodeURIComponent(t)}`}
                        className="hover:text-yellow-500 transition"
                      >
                        {t}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-sm underline">
                  <li>
                    <a
                      href={'/AllCourses'}
                      className="hover:text-yellow-500 transition"
                    >
                      Mas Certificados ➝
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FUNDACIÓN */}
          <div className="group relative">
            <a href="/Nosotros" className="nav-link flex items-center space-x-2 hover:text-gray-200">
              <FiUsers className="text-lg" />
              <span className="font-bold uppercase">Fundación</span>
            </a>

            <div
              className="absolute left-0 mt-4 w-72 bg-white text-[#004AAD] shadow-2xl rounded-xl 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-300 ease-in-out p-6 flex flex-col space-y-3 z-50"
            >
              <a href="/nosotros?seccion=quienes-somos" className="hover:text-yellow-500 transition">Nosotros</a>
              <a href="/nosotros?seccion=mision-vision" className="hover:text-yellow-500 transition">Misión y Visión</a>
              <a href="/nosotros?seccion=valores" className="hover:text-yellow-500 transition">Valores</a>
              <a href="/nosotros?seccion=certificados" className="hover:text-yellow-500 transition">Certificados</a>
              <a href="/nosotros?seccion=calidad" className="hover:text-yellow-500 transition">Política de Calidad</a>
            </div>
          </div>

          {/* CONTACTO */}
          <a href="/Contact" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiPhone className="text-lg" />
            <span className="font-bold uppercase">Contacto</span>
          </a>
        </div>

        {/* MENU MOBILE */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-3xl p-2 z-50"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`fixed top-0 right-0 h-full w-3/5 max-w-xs bg-[#004AAD] text-white flex flex-col items-center justify-center space-y-10 text-2xl font-semibold transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <button onClick={closeMenu} className="absolute top-4 right-4 text-3xl">
            <FiX />
          </button>

          <a onClick={closeMenu} href="/" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiHome /> <span className="font-bold uppercase">Inicio</span>
          </a>
          <a onClick={closeMenu} href="/Basiceducation" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiBook /> <span className="font-bold uppercase">Educación Básica</span>
          </a>
          <a onClick={closeMenu} href="/AllCourses" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiBook /> <span className="font-bold uppercase">Programas</span>
          </a>
          <a onClick={closeMenu} href="/Nosotros" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiUsers /> <span className="font-bold uppercase">Nosotros</span>
          </a>
          <a onClick={closeMenu} href="/Contact" className="nav-link flex items-center space-x-2 hover:text-gray-200">
            <FiPhone /> <span className="font-bold uppercase">Contacto</span>
          </a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
