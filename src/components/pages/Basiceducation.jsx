import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaPencilAlt,
  FaStar,
  FaSmileBeam,
  FaBook,
  FaGraduationCap,
} from "react-icons/fa";
import preescolar from "../../assets/pre-escolar.jpg";
import bachillerato from "../../assets/nosotros-image-1.jpg";

const Basiceducation = () => {
  const niveles = [
    {
      id: 1,
      title: "Educación Preescolar",
      desc: "En el nivel preescolar, los niños dan sus primeros pasos en el aprendizaje formal. Aquí desarrollan habilidades sociales, emocionales y cognitivas a través del juego, la música, el arte y la exploración. Nuestro objetivo es que cada niño se sienta amado, seguro y motivado para aprender con alegría.",
      requisitos: [
        "Edad: 3 a 5 años",
        "Copia del registro civil",
        "Carné de vacunación actualizado",
        "Fotocopia del documento del acudiente",
      ],
      image: preescolar,
      bg: "bg-gradient-to-b from-[#E3F2FD] via-[#CFE3FF] to-[#BBD3FF]",
      decor: "🧸",
    },
    {
      id: 2,
      title: "Básica Primaria",
      desc: "Este nivel fortalece la curiosidad natural de los niños, desarrollando competencias en lectura, escritura, matemáticas, ciencias y valores. Fomentamos la creatividad, el pensamiento crítico y el trabajo en equipo en un ambiente de respeto y motivación constante.",
      requisitos: [
        "Edad: 6 a 10 años",
        "Certificado de estudios anteriores (si aplica)",
        "Documento de identidad del estudiante",
        "Fotocopia del acudiente",
      ],
      image:
        "https://cdn.pixabay.com/photo/2016/03/26/13/09/children-1284645_1280.jpg",
      bg: "bg-gradient-to-b from-[#E8F0FE] via-[#D2E3FC] to-[#C0D9FF]",
      decor: "✏️",
    },
    {
      id: 3,
      title: "Bachillerato por Ciclos",
      desc: "El programa de Bachillerato por Ciclos está diseñado para jóvenes y adultos que desean culminar sus estudios con horarios flexibles y acompañamiento personalizado. Promovemos una educación inclusiva y accesible, adaptada a los ritmos de aprendizaje de cada estudiante.",
      requisitos: [
        "Edad mínima: 13 años",
        "Documento de identidad",
        "Certificados de estudios previos (si aplica)",
        "Dos fotos tamaño documento",
      ],
      image: bachillerato,
      bg: "bg-gradient-to-b from-[#E3F2FD] via-[#C5CAE9] to-[#9FA8DA]",
      decor: "🎓",
    },
  ];

  return (
    <section className="bg-white font-system-ui">
      {/* ======== ENCABEZADO PRINCIPAL ======== */}
      <div className="relative text-center py-20 px-6 bg-gradient-to-r from-[#004AAD] to-[#1976D2] text-white overflow-hidden shadow-lg">
        {/* Íconos decorativos */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-10 top-10 text-yellow-300 text-5xl opacity-80"
        >
          <FaStar />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-12 top-10 text-pink-300 text-5xl opacity-80"
        >
          <FaSmileBeam />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
        >
          Educación Básica y por Ciclos
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          En la Fundación Educativa Sueños de Amor acompañamos el desarrollo
          integral de cada niño y joven, desde sus primeros aprendizajes hasta
          el cumplimiento de sus metas académicas.
        </p>
      </div>

      {/* ======== SECCIONES POR NIVEL ======== */}
      {niveles.map((nivel, index) => (
        <div
          key={nivel.id}
          className={`${nivel.bg} py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } relative overflow-hidden`}
        >
          {/* Elementos decorativos */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute text-7xl opacity-20 top-10 left-10"
          >
            {nivel.decor}
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute text-6xl opacity-10 bottom-10 right-10"
          >
            <FaPencilAlt />
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={nivel.image}
              alt={nivel.title}
              className="rounded-[32px] shadow-2xl w-full max-w-md object-cover border-4 border-white"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD] mb-4 flex items-center gap-2">
              <FaBook className="text-[#FFC002]" /> {nivel.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {nivel.desc}
            </p>

            {/* Requisitos */}
            <div className="bg-white/80 rounded-2xl p-6 shadow-md backdrop-blur-sm border border-[#004AAD]/10">
              <div className="flex items-center gap-2 mb-3">
                <FaClipboardCheck className="text-[#FFC002] text-2xl" />
                <h3 className="text-xl font-semibold text-[#004AAD]">
                  Requisitos de inscripción
                </h3>
              </div>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                {nivel.requisitos.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      ))}

      {/* ======== FRASE FINAL ======== */}
      <div className="relative text-center py-16 bg-[#004AAD] text-white overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute left-12 top-8 text-yellow-400 text-4xl opacity-80"
        >
          <FaStar />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-16 bottom-10 text-pink-300 text-4xl opacity-80"
        >
          <FaGraduationCap />
        </motion.div>

        <h3 className="text-2xl md:text-3xl font-bold z-10 relative drop-shadow-md">
          “Educar con amor es sembrar un futuro lleno de esperanza.” 💫
        </h3>
      </div>
    </section>
  );
};

export default Basiceducation;
