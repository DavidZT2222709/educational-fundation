import React from "react";
import { motion } from "framer-motion"; 
import { FaUserTie, FaBullseye, FaEye, FaCertificate, FaBalanceScale } from "react-icons/fa";
import fondo from "../../../public/fondo.jpg";

const Nosotros = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* HERO */}
      <section 
        className="relative h-[60vh] flex items-center justify-center text-center bg-gray-300"
        style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
       
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#004AAD]/70"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Fundación Social Educativa Sueños de Amor
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto">
            Educación que transforma vidas y construye futuro
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 space-y-20">
        {/* QUIÉNES SOMOS */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Espacio para imagen */}
          <div className="bg-gray-300 h-72 rounded-2xl shadow-lg flex items-center justify-center">
            <span className="text-gray-600">Imagen Aquí</span>
          </div>

          <div>
            <FaUserTie className="text-[#004AAD] text-5xl mb-4" />
            <h2 className="text-3xl font-bold text-[#004AAD] mb-4">Quiénes Somos</h2>
            <p className="text-lg leading-relaxed">
              Somos una institución comprometida con la formación integral,
              ofreciendo programas técnicos y académicos que aportan al
              desarrollo social y profesional de nuestra comunidad.
            </p>
          </div>
        </motion.div>

        {/* MISIÓN Y VISIÓN */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* MISIÓN */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
          >
            <FaBullseye className="text-[#004AAD] text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#004AAD] mb-4">Misión</h2>
            <p>
              Formar ciudadanos íntegros y competentes, con valores humanos y
              capacidades técnicas, que contribuyan a la transformación de la sociedad.
            </p>
          </motion.div>

          {/* VISIÓN */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-xl rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
          >
            <FaEye className="text-[#004AAD] text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#004AAD] mb-4">Visión</h2>
            <p>
              Ser una institución educativa reconocida a nivel regional y nacional,
              destacada por la excelencia académica y el compromiso social.
            </p>
          </motion.div>
        </div>

        {/* VALORES */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <FaBalanceScale className="text-[#004AAD] text-5xl mb-4" />
            <h2 className="text-3xl font-bold text-[#004AAD] mb-4">Nuestros Valores</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-[#004AAD]">Calidez Humana</h3>
                <p className="text-sm">Amabilidad y afecto en un ambiente cordial.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-[#004AAD]">Excelencia</h3>
                <p className="text-sm">Calidad y compromiso en todo lo que hacemos.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-[#004AAD]">Lealtad</h3>
                <p className="text-sm">Fidelidad y gratitud hacia nuestra institución.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-[#004AAD]">Respeto</h3>
                <p className="text-sm">Valorar y aceptar a los demás con sus diferencias.</p>
              </div>
            </div>
          </div>

          {/* Espacio para imagen */}
          <div className="bg-gray-300 h-72 rounded-2xl shadow-lg flex items-center justify-center">
            <span className="text-gray-600">Imagen Aquí</span>
          </div>
        </motion.div>

        {/* CERTIFICADOS */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <FaCertificate className="text-[#004AAD] text-5xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#004AAD] mb-6">Certificados</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-8 py-3 bg-[#004AAD] text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-blue-700 transition">
              Certificado MinEducación
            </button>
            <button className="px-8 py-3 bg-[#004AAD] text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-blue-700 transition">
              Certificado RUT
            </button>
          </div>
        </motion.div>

        {/* POLÍTICA DE CALIDAD */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#004AAD] to-blue-600 text-white rounded-2xl p-12 text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Política de Calidad</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Estamos comprometidos con la calidad educativa, generando alternativas en el
            medio ocupacional con talento humano calificado, mediante la mejora continua
            y la satisfacción de nuestros estudiantes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Nosotros;
