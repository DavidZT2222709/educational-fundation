import React from "react";
import { motion } from "framer-motion";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import logo from "../../assets/logof.png";

const Footer = () => {
  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="relative bg-gradient-to-b from-[#004AAD] via-[#005FCB] to-[#007BFF] text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 pt-16 pb-10 relative z-10">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Fundación Social Educativa Sueños de Amor
          </h2>
          <p className="text-teal-200 mt-2 italic">
            “Educación para transformar vidas y construir futuro”
          </p>
        </motion.div>

        {/* Secciones organizadas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-100 relative"
          variants={containerVariants}
        >
          {/* 🏫 SEDE PRINCIPAL */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-3 text-lg border-b border-white/20 pb-2">
              Sede Principal
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="block font-medium text-teal-300">Bucaramanga</span>
                Cll. 93 #7g-48, Las Malvinas <br />
                <span className="text-gray-300">(+57) 607 1234567</span>
              </li>
              <li>
                <span className="block font-medium text-teal-300">Piedecuesta</span>
                Cl. 10 #9-20, Centro <br />
                <span className="text-gray-300">(+57) 607 7654321</span>
              </li>
            </ul>
          </motion.div>

          {/* 🎓 EDUCACIÓN */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-3 text-lg border-b border-white/20 pb-2">
              Educación
            </h3>

            <h4 className="font-medium text-teal-300 mb-2">Carreras Técnicas</h4>
            <ul className="space-y-1 mb-4">
              <li><a href="/AllCourses?tipo=tecnicas&curso=auxiliar-enfermeria" className="hover:text-teal-300">Auxiliar en Enfermería</a></li>
              <li><a href="/AllCourses?tipo=tecnicas&curso=auxiliar-farmacia" className="hover:text-teal-300">Auxiliar en Farmacia</a></li>
              <li><a href="/AllCourses?tipo=tecnicas&curso=seguridad-ocupacional" className="hover:text-teal-300">Seguridad Ocupacional</a></li>
              <li><a href="/AllCourses?tipo=tecnicas" className="text-teal-300 hover:underline">Ver todas las carreras →</a></li>
            </ul>

            <h4 className="font-medium text-teal-300 mb-2">Educación Formal</h4>
            <ul className="space-y-1">
              <li><a href="/BasicEducation?nivel=preescolar" className="hover:text-teal-300">Educación Preescolar</a></li>
              <li><a href="/BasicEducation?nivel=primaria" className="hover:text-teal-300">Educación Básica Primaria</a></li>
              <li><a href="/BasicEducation?nivel=bachillerato" className="hover:text-teal-300">Bachillerato por Ciclos</a></li>
            </ul>
          </motion.div>

          {/* 📋 MENÚ GENERAL */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-3 text-lg border-b border-white/20 pb-2">
              Menú
            </h3>
            <ul className="space-y-2 mb-6">
              <li><a href="/nosotros" className="hover:text-teal-300">Quienes Somos</a></li>
              <li><a href="/AllCourses" className="hover:text-teal-300">Programas</a></li>
              <li><a href="/Contact" className="hover:text-teal-300">Contacto</a></li>
              <li><a href="/Contact" className="hover:text-teal-300">Inscripciones</a></li>
            </ul>
          </motion.div>

          {/* 🌟 LOGO INSTITUCIONAL ANIMADO */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={logoVariants}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-52 h-52 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute w-32 h-32 bg-white/20 rounded-full blur-xl animate-ping"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <motion.img
                src={logo}
                alt="Logo Fundación"
                className="w-64 h-64 object-contain mb-3 opacity-95 drop-shadow-[0_0_25px_rgba(0,200,255,0.4)]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <motion.p
                className="text-sm text-teal-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Formando Futuro
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          className="flex justify-center space-x-6 mt-10"
          variants={itemVariants}
        >
          <a href="https://www.facebook.com/profile.php?id=61555843080818" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-teal-400 hover:text-black transition">
            <FiFacebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/fundsamcorporacion?utm_source=ig_web_button_share_sheet&igsh=OWlmZTA2N3Q4OXIx" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-pink-400 hover:text-black transition">
            <FiInstagram className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Créditos */}
        <motion.div
          className="mt-10 pt-6 border-t border-white/20 text-center text-sm text-gray-200"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Fundación Social Educativa Sueños de Amor · Diseñado por{" "}
          <span className="text-teal-300 font-semibold">BullTech Solutions</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
