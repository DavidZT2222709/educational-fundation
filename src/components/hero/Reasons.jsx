import React from "react";

const Reasons = () => {
  const items = [
    {
      gif: "/docentes.gif", // cambia por la ruta de tu gif
      title: "Docentes Capacitados",
      desc: "Profesionales con experiencia real en el campo que te guiarán en cada paso.",
    },
    {
      gif: "/jornadas.gif", // cambia por la ruta de tu gif
      title: "Jornadas Accesibles",
      desc: "Horarios flexibles y adaptados a las necesidades de nuestros estudiantes.",
    },
    {
      gif: "/practicas.gif", // cambia por la ruta de tu gif
      title: "Prácticas Garantizadas",
      desc: "Convenios activos que aseguran tus prácticas profesionales.",
    },
  ];

  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">
      {/* Fondo degradado dinámico */}
      <div className="absolute inset-0 bg-[#004AAD]"></div>

      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">
          ¿Por qué somos tu mejor opción?
        </h2>
        <p className="text-gray-300">
          “Te acompañamos en cada paso hacia el conocimiento”
        </p>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="group bg-white/10 border border-white/20 rounded-2xl p-8 text-center
                       hover:scale-105 hover:border-green-400 transition-all duration-300 
                       shadow-xl hover:shadow-green-500/30 backdrop-blur-md"
          >
            <div className="flex justify-center mb-6">
              <img
                src={item.gif}
                alt={item.title}
                className="w-20 h-20 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;
