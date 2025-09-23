import React from "react";
import logo from "../../assets/logof.png"; 

const programas = [
  { id: 1, titulo: "Inglés Por Niveles", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Inglés+Por+Niveles" },
  { id: 2, titulo: "Atención a la Primera Infancia", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Primera+Infancia" },
  { id: 3, titulo: "Home Care (Cuidado en Casa)", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Home+Care" },
  { id: 4, titulo: "Auxiliar Contable y Financiero", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Contabilidad" },
  { id: 5, titulo: "Sistemas Básico", semanas: "20 Semanas", clases: "20 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Sistemas+Básico" },
  { id: 6, titulo: "Auxiliar en Enfermería", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Enfermería" },
  { id: 7, titulo: "Belleza y Estética", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Belleza+Estética" },
  { id: 8, titulo: "Electricidad Residencial", semanas: "28 Semanas", clases: "28 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Electricidad" },
  { id: 9, titulo: "Auxiliar Administrativo", semanas: "26 Semanas", clases: "26 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Administrativo" },
  { id: 10, titulo: "Repostería y Panadería", semanas: "22 Semanas", clases: "22 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Repostería" },
  { id: 11, titulo: "Confección y Modistería", semanas: "24 Semanas", clases: "24 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Confección" },
  { id: 12, titulo: "Mecánica de Motos", semanas: "27 Semanas", clases: "27 Clases", imagen: "https://via.placeholder.com/300x200.png?text=Mecánica+Motos" },
];

const Programas = () => {
  return (
    <section className="relative bg-gray-50">
      {/* --- División onda SVG animada (Hero -> Programas) --- */}
      <div className="absolute -top-20 w-full overflow-hidden leading-none rotate-180">
        <div className="relative w-[200%]">
          {/* Onda principal */}
          <div className="absolute top-0 left-0 w-[200%] animate-waveSlow">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-20 w-[50%] float-left"
            >
              <path
                d="M0.00,49.98 C150.00,150.00 349.99,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                className="fill-white opacity-80"
              ></path>
            </svg>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-20 w-[50%] float-left"
            >
              <path
                d="M0.00,49.98 C150.00,150.00 349.99,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                className="fill-white opacity-80"
              ></path>
            </svg>
          </div>

          {/* Onda secundaria */}
          <div className="absolute top-0 left-0 w-[200%] animate-waveSlower">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-20 w-[50%] float-left"
            >
              <path
                d="M0.00,49.98 C150.00,150.00 349.99,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                className="fill-white opacity-50"
              ></path>
            </svg>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-20 w-[50%] float-left"
            >
              <path
                d="M0.00,49.98 C150.00,150.00 349.99,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                className="fill-white opacity-50"
              ></path>
            </svg>
          </div>
        </div>
      </div>

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
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Imagen */}
            <img
              src={programa.imagen}
              alt={programa.titulo}
              className="w-full h-40 object-cover"
            />

            {/* Contenido */}
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-800">
                {programa.titulo}
              </h3>

              <div className="flex flex-col text-gray-600 mt-2 text-sm space-y-1">
                <span>{programa.semanas}</span>
                <span>{programa.clases}</span>
              </div>

              {/* Logo al final */}
              <div className="mt-4 flex items-center justify-end">
                <img src={logo} alt="Fundación" className="h-8 w-8" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Botón Mostrar Más --- */}
      <div className="text-center pb-12">
        <button
          onClick={() => window.location.href = "/programas"}
          className="bg-[#004AAD] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#00327A] transition-colors duration-300"
        >
          Mostrar más programas
        </button>
      </div>
    </section>
  );
};

export default Programas;
