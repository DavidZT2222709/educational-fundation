import React from "react";
import { motion } from "framer-motion";

const Reasons = () => {
  const items = [
    {
      gif: "/docentes.gif",
      title: "Docentes Capacitados",
      desc: "Profesionales con experiencia real en el campo que te guiarán en cada paso.",
    },
    {
      gif: "/jornadas.gif",
      title: "Jornadas Accesibles",
      desc: "Horarios flexibles y adaptados a las necesidades de nuestros estudiantes.",
    },
    {
      gif: "/practicas.gif",
      title: "Prácticas Garantizadas",
      desc: "Convenios activos que aseguran tus prácticas profesionales.",
    },
  ];

  return (
    <motion.section
      className="relative text-white py-20 px-6 overflow-hidden bg-gradient-to-b from-[#002F6C] via-[#004AAD] to-[#0066CC]"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Luz suave animada en el fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-green-400/10 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Título con animación */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
          ¿Por qué somos tu mejor opción?
        </h2>
        <p className="text-gray-200 italic">
          “Te acompañamos en cada paso hacia el conocimiento”
        </p>
      </motion.div>

      {/* Tarjetas animadas */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="group bg-white/10 border border-white/20 rounded-2xl p-8 text-center
                       hover:scale-105 hover:border-green-400 transition-all duration-300 
                       shadow-xl hover:shadow-green-400/40 backdrop-blur-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <motion.img
                src={item.gif}
                alt={item.title}
                className="w-20 h-20 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, 2, -2, 0], transition: { duration: 0.5 } }}
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-200">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Reasons;
