import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#002F6C] via-[#004AAD] to-[#0066CC] text-white">
      {/* Onda decorativa arriba */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,29,158,17.39C230,51,284,15,339,1.49,423-19.39,508,10,593,26.92c92,18.59,185,22.59,278,3.7,55-11.41,109-31.41,164-32.41s109,17,165,35V0Z"
            opacity=".25"
            className="fill-white"
          ></path>
          <path
            d="M0,0V15.81c47.79,22,103.59,29,158,17.39C230,21,284-15,339-28.51,423-49.39,508-20,593-3.08c92,18.59,185,22.59,278,3.7,55-11.41,109-31.41,164-32.41s109,17,165,35V0Z"
            opacity=".5"
            className="fill-white"
          ></path>
          <path
            d="M0,0V5.63c47.79,22,103.59,29,158,17.39C230,11,284-25,339-38.51,423-59.39,508-30,593-13.08c92,18.59,185,22.59,278,3.7,55-11.41,109-31.41,164-32.41s109,17,165,35V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-10 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Fundación Social Educativa Sueños de Amor
          </h2>
          <p className="text-teal-200 mt-2">
            “Educación para transformar vidas y construir futuro”
          </p>
        </div>

        {/* Menús */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-100">
          <div>
            <h3 className="font-semibold mb-3">Menú</h3>
            <ul className="space-y-2">
              <li><a href="/nosotros" className="hover:text-teal-300">Quienes Somos</a></li>
              <li><a href="/carreras" className="hover:text-teal-300">Carreras</a></li>
              <li><a href="/contacto" className="hover:text-teal-300">Contacto</a></li>
              <li><a href="/#inscripcion" className="hover:text-teal-300">Inscripciones</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Carreras</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-300">Auxiliar en Enfermería</a></li>
              <li><a href="#" className="hover:text-teal-300">Auxiliar en Farmacia</a></li>
              <li><a href="#" className="hover:text-teal-300">Administración en Salud</a></li>
              <li><a href="#" className="hover:text-teal-300">Seguridad Ocupacional</a></li>
              <li><a href="#" className="hover:text-teal-300">Maquinaria Pesada</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Más Carreras</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-300">Trabajo Social</a></li>
              <li><a href="#" className="hover:text-teal-300">Asistente Administrativo</a></li>
              <li><a href="#" className="hover:text-teal-300">Contable y Financiero</a></li>
              <li><a href="#" className="hover:text-teal-300">Atención a la Infancia</a></li>
              <li><a href="#" className="hover:text-teal-300">Inglés por Niveles</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Accesos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-300">Login Plataforma</a></li>
              <li><a href="#" className="hover:text-teal-300">Plataforma Q10</a></li>
              <li><a href="/contacto" className="hover:text-teal-300">Contacto</a></li>
              <li><a href="#" className="hover:text-teal-300">Políticas de Privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-6 mt-10">
          <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-teal-400 hover:text-black transition">
            {/* Facebook SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.006 3.676 9.127 8.438 9.879v-6.988h-2.54v-2.89h2.54V9.797c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.324 21.127 22 17.006 22 12z"/>
            </svg>
          </a>
          <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pink-400 hover:text-black transition">
            {/* Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07..."/>
            </svg>
          </a>
          <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-red-500 hover:text-black transition">
            {/* YouTube */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M19.615 3.184c.852.23 1.52.897..."/>
            </svg>
          </a>
        </div>

        {/* Créditos */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} Fundación Social Educativa Sueños de Amor · Diseñado por{" "}
          <span className="text-teal-300 font-semibold">BullTech Solutions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
