import React from "react";

const Requirements = () => {
  const requisitos = [
    "Folder con gancho",
    "2 Fotos 3x4",
    "Fotocopia de la cédula de ciudadanía",
    "Para enfermería tener más de 17 años",
    "Fotocopia diploma de bachiller y acta de grado",
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Como ser parte de{" "}
            <span className="text-yellow-500">FUNDSAN?</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Para iniciar tu formación académica con nosotros solo debes traer a nuestras oficinas la siguiente lista de requisitos:
          </p>

          <div className="mt-8 space-y-4">
            {requisitos.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                {/* Ícono Check SVG */}
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-green-600 animate-[pulse_2s_infinite]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Número y texto */}
                <span className="text-sm font-bold text-[#2A0A73] mr-3">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 bg-[#2A0A73] hover:bg-[#1e0754] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
            Solicitar Inscripción
          </button>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src=""
            alt="Estudiantes Fundación"
            className="rounded-2xl shadow-2xl max-h-[450px] object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Fondo decorativo con gradiente circular */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[#2A0A73]/20 to-green-500/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-gradient-to-r from-green-500/20 to-[#2A0A73]/20 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default Requirements;
