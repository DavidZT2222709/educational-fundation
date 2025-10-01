import React from "react";
import logo from "../../assets/logof.png";

const programas = [
  { id: 1, titulo: "Inglés Por Niveles", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoSBOxVaovpdYhe0zdKlhYjL7PqSml_5FIA&s" },
  { id: 2, titulo: "Atención a la Primera Infancia", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://www.comfenalcovalle.com.co/wp-content/uploads/2023/11/primera-infancia.webp" },
  { id: 3, titulo: "Home Care (Cuidado en Casa)", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://homecare-aid.com/wp-content/uploads/2024/04/Different-types-of-Home-Care-.jpg" },
  { id: 4, titulo: "Auxiliar Contable y Financiero", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://www.fundecor.edu.co/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-20-at-8.26.43-PM.jpeg" },
  { id: 5, titulo: "Asistente administrativo", semanas: "20 Semanas", clases: "20 Clases", imagen: "https://www.polisura.edu.co/wp-content/uploads/2024/07/auxiliar-administrativo.jpg" },
  { id: 6, titulo: "Auxiliar en Enfermería", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://essaeformacion.com/wp-content/uploads/2021/11/AUXILIAR-DE-ENFERMERIA.jpg" },
  { id: 7, titulo: "Belleza y Estética", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://drtestetica.com/wp-content/uploads/2023/08/Estetica-integral-y-cosmetologia-para-la-belleza-DRT.jpg" },
  { id: 8, titulo: "Auxiliar En Enfermería", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://www.itep.es/sites/itep/files/styles/blog_desktop/public/images/blog/Img_post-blog_auxiliar_enfermeria%402x.jpg?itok=xH-reT80" },
  { id: 9, titulo: "Maquinaria Pesada", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://inoxidablesvictoria.com/wp-content/uploads/2023/10/operador-posando-al-frente-de-la-maquinaria-pesada-que-conduce.jpg"},
  { id: 10, titulo: "Seguridad Ocupacional", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://cdn.prod.website-files.com/6360d0b8798bc2249104a104/658b47484539bfecd2896d41_seguridad%20ocupacional.jpg" },
  { id: 11, titulo: "Administración en Salud", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://global.tiffin.edu/img/article/importancia-de-la-administracion-de-los-servicios-de-salud.webp" },
  { id: 12, titulo: "Auxiliar en Farmacia", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://centroinca.com/centroinca/wp-content/uploads/2021/03/Farmacea.jpg" },
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
          onClick={() => window.location.href = "/programas"}
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
