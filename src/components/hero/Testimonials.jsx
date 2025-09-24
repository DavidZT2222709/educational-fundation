import React from "react";
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
    <section className="bg-[#004AAD] py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
          Testimonios
        </h2>
        <p className="text-white/80 mb-10">
          Lo que dicen algunos de nuestros Estudiantes
        </p>

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
              <div className="bg-white p-10 rounded-2xl shadow-lg relative h-[260px] md:h-[280px] flex flex-col justify-between">
                <p className="text-lg text-gray-700 italic mb-6 overflow-hidden">
                  "{t.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-[#004AAD]">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
