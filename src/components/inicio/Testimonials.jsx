import React, { useState, useRef, useEffect } from "react"; // 1. IMPORTA useRef y useEffect
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

// ARRAY DE VIDEOS
const videoList = [
  "/test1.mp4",
  "/test2.mp4"
];

const Testimonials = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null); // 2. CREAMOS LA REFERENCIA

  // 3. EFECTO PARA FORZAR PLAY AL CAMBIAR DE VIDEO
  useEffect(() => {
    // Pequeño timeout para asegurar que el DOM se actualizó
    const timer = setTimeout(() => {
      if (videoRef.current) {
        // Intentamos reproducir y capturamos errores (útil para ver si la ruta está mal)
        videoRef.current.play().catch((error) => {
          console.error("Error al intentar reproducir el video automáticamnete:", error);
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => {
      if (prevIndex === videoList.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <motion.section
      className="bg-gradient-to-b from-[#002F6C] via-[#004AAD] to-[#0066CC] py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
            Testimonios
          </h2>
          <p className="text-white/80 text-lg">
            Lo que dicen algunos de nuestros Estudiantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              className="w-full max-w-xl"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
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
                    {/* AQUI ESTÁ EL CAMBIO: Agregué 'text-center' */}
                    <div className="bg-white p-10 rounded-2xl shadow-lg relative h-[280px] flex flex-col justify-between text-center">
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
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-video bg-black/20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 backdrop-blur-sm flex items-center justify-center">
              
              <video
                ref={videoRef} // 4. VINCULAMOS LA REFERENCIA
                key={currentVideoIndex} 
                src={videoList[currentVideoIndex]}
                className="w-full h-full object-cover"
                controls
                muted // Obligatorio para autoplay
                playsInline // Importante para móviles (evita pantalla completa automática)
                onEnded={handleVideoEnd}
              />

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;