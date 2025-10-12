import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const testimonials = [
  {
    text: "Mi experiencia estudiando como Auxiliar de Enfermería fue increíble. Aprendí habilidades vitales y adquirí conocimientos que transformaron mi perspectiva de la salud.",
    name: "Miguel Ríos",
    role: "Estudiante",
  },
  {
    text: "Estudiar Belleza y Peluquería fue una experiencia enriquecedora. Adquirí habilidades excepcionales que transformaron mi pasión en una carrera prometedora.",
    name: "Paula Vega",
    role: "Estudiante",
  },
  {
    text: "Estudiar Administración en Salud amplió mi perspectiva. Aprendí a gestionar recursos y liderar equipos, preparándome para contribuir al sector salud.",
    name: "Carlos Mendoza",
    role: "Estudiante",
  },
  {
    text: "He adquirido una base sólida en el área de Farmacia. Las clases prácticas me dieron habilidades que podré aplicar directamente en mi campo laboral.",
    name: "Valeria Torres",
    role: "Estudiante",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      className="bg-gradient-to-b from-[#002F6C] via-[#004AAD] to-[#0066CC] py-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-5xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
          Testimonios
        </h2>
        <p className="text-white/80 mb-10">
          Lo que dicen algunos de nuestros Estudiantes
        </p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            effect="fade"
            loop
            className="rounded-2xl shadow-xl"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white p-10 rounded-2xl shadow-lg relative h-[260px] md:h-[280px] flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-gray-700 italic mb-6 overflow-hidden">
                    "{t.text}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-[#004AAD]">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
