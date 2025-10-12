import React from "react";
import { motion } from "framer-motion";
import { FaRegNewspaper } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  const noticias = [
    {
      id: 1,
      titulo: "Nueva jornada de alfabetización en la comunidad",
      descripcion:
        "La fundación realizó una jornada educativa para adultos mayores con el fin de fortalecer sus habilidades de lectura y escritura.",
      imagen:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      titulo: "Celebración del Día del Niño",
      descripcion:
        "Una tarde llena de alegría, juegos y aprendizaje para los más pequeños de la fundación.",
      imagen:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      titulo: "Capacitación docente 2025",
      descripcion:
        "Nuestros docentes participaron en una capacitación sobre metodologías innovadoras para la enseñanza inicial.",
      imagen:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      titulo: "Capacitación docente 2025",
      descripcion:
        "Nuestros docentes participaron en una capacitación sobre metodologías innovadoras para la enseñanza inicial.",
      imagen:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      titulo: "Capacitación docente 2025",
      descripcion:
        "Nuestros docentes participaron en una capacitación sobre metodologías innovadoras para la enseñanza inicial.",
      imagen:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1350&q=80",
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
          autoplay={{ delay: 4500, disableOnInteraction: false }}
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
