import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logof.png";

// Datos de programas
const programas = [
  {
    id: 1,
    titulo: "Auxiliar en Enfermería",
    semanas: "30 Semanas",
    clases: "30 Clases",
    imagen:
      "https://essaeformacion.com/wp-content/uploads/2021/11/AUXILIAR-DE-ENFERMERIA.jpg",
  },
  {
    id: 2,
    titulo: "Auxiliar de Farmacia",
    semanas: "30 Semanas",
    clases: "30 Clases",
    imagen:
      "https://centroinca.com/centroinca/wp-content/uploads/2021/03/Farmacea.jpg",
  },
  {
    id: 3,
    titulo: "Auxiliar Administrativo en Salud",
    semanas: "25 Semanas",
    clases: "25 Clases",
    imagen:
      "https://global.tiffin.edu/img/article/importancia-de-la-administracion-de-los-servicios-de-salud.webp",
  },
  {
    id: 4,
    titulo: "Auxiliar en Primera Infancia",
    semanas: "25 Semanas",
    clases: "25 Clases",
    imagen:
      "https://www.comfenalcovalle.com.co/wp-content/uploads/2023/11/primera-infancia.webp",
  },
  {
    id: 5,
    titulo: "Operador en Maquinaria Pesada",
    semanas: "30 Semanas",
    clases: "30 Clases",
    imagen:
      "https://inoxidablesvictoria.com/wp-content/uploads/2023/10/operador-posando-al-frente-de-la-maquinaria-pesada-que-conduce.jpg",
  },
  {
    id: 6,
    titulo: "Auxiliar en Seguridad Ocupacional",
    semanas: "30 Semanas",
    clases: "30 Clases",
    imagen:
      "https://cdn.prod.website-files.com/6360d0b8798bc2249104a104/658b47484539bfecd2896d41_seguridad%20ocupacional.jpg",
  },
  {
    id: 7,
    titulo: "Auxiliar Administrativo",
    semanas: "20 Semanas",
    clases: "20 Clases",
    imagen:
      "https://www.polisura.edu.co/wp-content/uploads/2024/07/auxiliar-administrativo.jpg",
  },
  {
    id: 8,
    titulo: "Home Care (Cuidado en Casa)",
    semanas: "25 Semanas",
    clases: "25 Clases",
    imagen:
      "https://homecare-aid.com/wp-content/uploads/2024/04/Different-types-of-Home-Care-.jpg",
  },
];

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
};

const Programas = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* --- Título animado --- */}
      <motion.div
        className="text-center pt-16"
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">
          Nuestros Programas
        </h2>
        <p className="text-gray-600 mt-2">
          Conoce la oferta académica que tenemos para ti
        </p>
      </motion.div>

      {/* --- Grid Programas --- */}
      <motion.div
        className="container mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {programas.map((programa) => (
          <motion.div
            key={programa.id}
            variants={cardVariants}
            whileHover={{
              rotateX: 10,
              rotateY: 10,
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-full h-64 bg-white rounded-xl overflow-hidden cursor-pointer transform-gpu transition-all"
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
          </motion.div>
        ))}
      </motion.div>

      {/* --- Botón animado --- */}
      <motion.div
        className="text-center pb-12"
        variants={buttonVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/AllCourses")}
          className="bg-[#004AAD] text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300"
        >
          Mostrar más programas
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Programas;
