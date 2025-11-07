import React from "react";
import { motion } from "framer-motion";
import { FaRegNewspaper } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import inscripciones from "../../assets/inscripciones_2026.jpg";
import certificados from "../../assets/certificados_info.jpg";

const News = () => {
  const noticias = [
    {
      id: 1,
      titulo: "Inscripciones Abiertas!!",
      descripcion:
        "La Fundación Sueños de Amor (FUNDSAM) anuncia la apertura de inscripciones y matrículas para Preescolar, Básica Primaria (1° a 5°) y Aceleración de la Primaria. FUNDSAM sigue comprometida con una educación accesible y de calidad para el desarrollo integral de los estudiantes.",
      imagen:
        inscripciones,
    },
    {
      id: 2,
      titulo: "Certificate en Cuiados Basicos de Salud",
      descripcion:
        "La Fundación Sueños de Amor (FUNDSAM) abre inscripciones para sus cursos básicos en salud, dirigidos a quienes desean actualizar o adquirir nuevas competencias. Incluye programas como BLS + ACLS, AIEPI, Humanización, Seguridad del Paciente, Vacunación y Atención a Víctimas. ",
      imagen:
        certificados,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#E3F2FD] via-[#BBDEFB] to-[#90CAF9]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#002F6C] mb-10 flex justify-center items-center gap-3"
        >
          <FaRegNewspaper className="text-[#004AAD]" /> Noticias Recientes
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {noticias.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden"
              >
                {/* Imagen */}
                <div className="md:w-1/2 w-full h-64 md:h-[400px]">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido */}
                <div className="md:w-1/2 w-full p-8 md:p-10 text-[#002F6C] flex flex-col justify-center">
                  <motion.h3
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-semibold mb-4"
                  >
                    {item.titulo}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-700 text-justify"
                  >
                    {item.descripcion}
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default News;
