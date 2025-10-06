import React from "react";
import logo from "../../assets/logof.png";

const programas = [
  { id: 1, titulo: "Auxiliar en Enfermería", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://essaeformacion.com/wp-content/uploads/2021/11/AUXILIAR-DE-ENFERMERIA.jpg" },
  { id: 2, titulo: "Auxiliar de Farmacia", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://centroinca.com/centroinca/wp-content/uploads/2021/03/Farmacea.jpg" },
  { id: 3, titulo: "Auxiliar Administrativo en Salud", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://global.tiffin.edu/img/article/importancia-de-la-administracion-de-los-servicios-de-salud.webp" },
  { id: 4, titulo: "Auxiliar en Primera Infancia", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://www.comfenalcovalle.com.co/wp-content/uploads/2023/11/primera-infancia.webp" },
  { id: 5, titulo: "Operador en Maquinaria Pesada", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://inoxidablesvictoria.com/wp-content/uploads/2023/10/operador-posando-al-frente-de-la-maquinaria-pesada-que-conduce.jpg" },
  { id: 6, titulo: "Auxiliar en Seguridad Ocupacional", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://cdn.prod.website-files.com/6360d0b8798bc2249104a104/658b47484539bfecd2896d41_seguridad%20ocupacional.jpg" },
  { id: 7, titulo: "Auxiliar Administrativo", semanas: "20 Semanas", clases: "20 Clases", imagen: "https://www.polisura.edu.co/wp-content/uploads/2024/07/auxiliar-administrativo.jpg" },
  { id: 8, titulo: "Home Care (Cuidado en Casa)", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://homecare-aid.com/wp-content/uploads/2024/04/Different-types-of-Home-Care-.jpg" },
];

const Programas = () => {
  return (
    <section className="relative bg-gray-50">
      {/* --- Título --- */}
      <div className="text-center pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">
          Nuestros Programas
        </h2>
        <p className="text-gray-600 mt-2">
          Conoce la oferta académica que tenemos para ti
        </p>
      </div>

      {/* --- Grid Programas --- */}
      <div className="container mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {programas.map((programa) => (
          <div
            key={programa.id}
            className="relative w-full h-64 bg-white rounded-xl overflow-hidden cursor-pointer transform-gpu transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] 
              hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 gap-3 text-center">
              <img
                src={programa.imagen}
                alt={programa.titulo}
                className="w-full h-24 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold text-gray-800">
                {programa.titulo}
              </h3>
              <p className="text-sm text-gray-600">
                {programa.semanas} | {programa.clases}
              </p>
              <img src={logo} alt="Fundación" className="h-6 w-6 mt-2" />
            </div>
          </div>
        ))}
      </div>

      {/* --- Botón Mostrar Más --- */}
      <div className="text-center pb-12">
        <button
          onClick={() => window.location.href = "/AllCourses"}
          className="relative bg-[#004AAD] text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] 
            hover:scale-110 hover:shadow-2xl"
        >
          Mostrar más programas
        </button>
      </div>
    </section>
  );
};

export default Programas;
