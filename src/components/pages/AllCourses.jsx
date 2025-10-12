import React, { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaBookOpen,
  FaCertificate,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { motion } from "framer-motion"; // 🧠 Importamos Framer Motion

const AllCourses = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState("carreras");
  const [seleccionado, setSeleccionado] = useState(null);

  // 🧠 Detectar parámetros tipo y curso desde la URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tipo = params.get("tipo");
    const curso = params.get("curso");

    if (tipo === "tecnicas") setTipoSeleccionado("carreras");
    else if (tipo === "cortos") setTipoSeleccionado("cursos");
    else if (tipo === "certificados") setTipoSeleccionado("certificados");

    if (curso) {
      const decodedCurso = decodeURIComponent(curso).trim();
      setTimeout(() => {
        const lista =
          tipo === "tecnicas"
            ? carreras_tecnicas
            : tipo === "cortos"
            ? cursos_cortos
            : cursos_certificados;

        const encontrado = lista.find(
          (item) => item.titulo.toLowerCase() === decodedCurso.toLowerCase()
        );
        if (encontrado) {
          setSeleccionado(encontrado);
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 200);
        }
      }, 300);
    }
  }, []);

  // 🧩 Carreras Técnicas
  const carreras_tecnicas = [
    { id: 1, titulo: "Auxiliar en Enfermería", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://essaeformacion.com/wp-content/uploads/2021/11/AUXILIAR-DE-ENFERMERIA.jpg" },
    { id: 2, titulo: "Auxiliar de Farmacia", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://centroinca.com/centroinca/wp-content/uploads/2021/03/Farmacea.jpg" },
    { id: 3, titulo: "Auxiliar Administrativo en Salud", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://global.tiffin.edu/img/article/importancia-de-la-administracion-de-los-servicios-de-salud.webp" },
    { id: 4, titulo: "Auxiliar en Primera Infancia", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://www.comfenalcovalle.com.co/wp-content/uploads/2023/11/primera-infancia.webp" },
    { id: 5, titulo: "Operador en Maquinaria Pesada", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://inoxidablesvictoria.com/wp-content/uploads/2023/10/operador-posando-al-frente-de-la-maquinaria-pesada-que-conduce.jpg" },
    { id: 6, titulo: "Auxiliar en Seguridad Ocupacional", semanas: "30 Semanas", clases: "30 Clases", imagen: "https://cdn.prod.website-files.com/6360d0b8798bc2249104a104/658b47484539bfecd2896d41_seguridad%20ocupacional.jpg" },
    { id: 7, titulo: "Auxiliar Administrativo", semanas: "20 Semanas", clases: "20 Clases", imagen: "https://www.polisura.edu.co/wp-content/uploads/2024/07/auxiliar-administrativo.jpg" },
    { id: 8, titulo: "Home Care (Cuidado en Casa)", semanas: "25 Semanas", clases: "25 Clases", imagen: "https://homecare-aid.com/wp-content/uploads/2024/04/Different-types-of-Home-Care-.jpg" },
  ];

  // 🧩 Cursos Cortos
  const cursos_cortos = [
    { id: 1, titulo: "Maquillaje Profesional", semanas: "6 Semanas", clases: "6 Clases", imagen: "https://www.cursosycarreras.com.co/blog/wp-content/uploads/2022/06/curso-de-maquillaje-profesional.jpg" },
    { id: 2, titulo: "Uñas Acrílicas", semanas: "6 Semanas", clases: "6 Clases", imagen: "https://blog.solbeautyandcare.com/hubfs/un%CC%83as%20acri%CC%81licas%20colores.jpeg" },
    { id: 3, titulo: "Logística y Bodegaje", semanas: "8 Semanas", clases: "8 Clases", imagen: "https://www.enycomlogistica.com.co/wp-content/uploads/2021/07/almacen-logistica.jpg" },
    { id: 4, titulo: "Manipulación de Alimentos", semanas: "4 Semanas", clases: "4 Clases", imagen: "https://www.seguridadalimentariasegovia.es/wp-content/uploads/2021/10/manipulacion-de-alimentos.jpg" },
    { id: 5, titulo: "Inglés para Niños", semanas: "10 Semanas", clases: "10 Clases", imagen: "https://institutoamericanoingles.com.mx/wp-content/uploads/2021/06/ingles-para-ninos.jpg" },
  ];

  // 🧩 Cursos Certificados
  const cursos_certificados = [
    { id: 1, titulo: "Combo BLS + ACLS", semanas: "4 Semanas", clases: "4 Clases", imagen: "https://www.lifemedic.pe/wp-content/uploads/2023/08/bls-acls.jpg" },
    { id: 2, titulo: "AIEPI", semanas: "3 Semanas", clases: "3 Clases", imagen: "https://www.saludcapital.gov.co/ctdlm/PublishingImages/Programa%20AIEPI.jpg" },
    { id: 3, titulo: "Humanización", semanas: "3 Semanas", clases: "3 Clases", imagen: "https://tecnodidactica.com/wp-content/uploads/2022/11/HUMANIZACION-SALUD.jpg" },
    { id: 4, titulo: "Gestión del Duelo", semanas: "3 Semanas", clases: "3 Clases", imagen: "https://clinicapsicologicavillalobos.com/wp-content/uploads/2021/05/gestion-del-duelo.jpg" },
    { id: 5, titulo: "Seguridad al Paciente", semanas: "3 Semanas", clases: "3 Clases", imagen: "https://www.seguridadpaciente.com.ar/wp-content/uploads/2021/04/seguridad-del-paciente.jpg" },
    { id: 6, titulo: "Combo Primeros Auxilios", semanas: "4 Semanas", clases: "4 Clases", imagen: "https://clinicadentalgarriga.com/wp-content/uploads/2022/01/primeros-auxilios.jpg" },
    { id: 7, titulo: "Vacunación", semanas: "3 Semanas", clases: "3 Clases", imagen: "https://www.clinicainternacional.com.pe/wp-content/uploads/2023/02/vacunacion.jpg" },
    { id: 8, titulo: "Atención a Víctimas de Violencia Sexual", semanas: "3 Semanas", clases: "3 Clases", imagen: "https://cdn.euroinnova.edu.es/img/subidasEditor/atencion-victimas-violencia-sexual-online-1644316747.jpg" },
    { id: 9, titulo: "Toma de Muestras de Laboratorio Clínico", semanas: "4 Semanas", clases: "4 Clases", imagen: "https://hospitalregionalcusco.gob.pe/wp-content/uploads/2020/05/Laboratorio-clinico.jpg" },
    { id: 10, titulo: "Atención a Víctimas con Agentes Químicos", semanas: "4 Semanas", clases: "4 Clases", imagen: "https://grupokion.com/wp-content/uploads/2022/04/seguridad-laboral.jpg" },
  ];

  const datos =
    tipoSeleccionado === "carreras"
      ? carreras_tecnicas
      : tipoSeleccionado === "cursos"
      ? cursos_cortos
      : cursos_certificados;

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 pb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* 🔹 Encabezado */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-800 mb-3 flex justify-center items-center gap-2">
          <FiLayers className="text-blue-600 text-4xl" />
          Programas Académicos
        </h1>
        <p className="text-gray-600">
          Explora nuestras carreras técnicas, cursos cortos y certificados
        </p>
      </motion.div>

      {/* 🔹 Filtro */}
      <motion.div
        className="flex justify-center mb-12 gap-4 flex-wrap"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button
          onClick={() => setTipoSeleccionado("carreras")}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            tipoSeleccionado === "carreras"
              ? "bg-blue-700 text-white shadow-lg scale-105"
              : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100"
          }`}
        >
          <FaGraduationCap /> Carreras Técnicas
        </button>

        <button
          onClick={() => setTipoSeleccionado("cursos")}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            tipoSeleccionado === "cursos"
              ? "bg-blue-700 text-white shadow-lg scale-105"
              : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100"
          }`}
        >
          <FaBookOpen /> Cursos Cortos
        </button>

        <button
          onClick={() => setTipoSeleccionado("certificados")}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            tipoSeleccionado === "certificados"
              ? "bg-blue-700 text-white shadow-lg scale-105"
              : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100"
          }`}
        >
          <FaCertificate /> Cursos Certificados
        </button>
      </motion.div>

      {/* 🔹 Grid con animación */}
      <motion.div
        className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {datos.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => setSeleccionado(item)}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer border border-blue-100"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={item.imagen} alt={item.titulo} className="h-52 w-full object-cover" />
            <div className="p-6 flex flex-col justify-between h-[180px]">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{item.titulo}</h3>
              <p className="text-gray-600 flex items-center gap-2 text-sm">
                <FaClock className="text-blue-600" /> {item.semanas}
              </p>
              <p className="text-gray-600 text-sm">{item.clases}</p>
              <div className="mt-3 text-right">
                <span className="text-blue-700 font-semibold text-sm hover:underline">
                  Ver más →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔹 Modal */}
      {seleccionado && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl w-[90%] max-w-lg p-8 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => setSeleccionado(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
            >
              <FaTimesCircle size={24} />
            </button>

            <img src={seleccionado.imagen} alt={seleccionado.titulo} className="rounded-2xl mb-5 h-48 w-full object-cover" />
            <h2 className="text-2xl font-bold text-blue-800 mb-3">{seleccionado.titulo}</h2>
            <p className="text-gray-700 mb-2"><strong>Duración:</strong> {seleccionado.semanas}</p>
            <p className="text-gray-700 mb-4"><strong>Clases:</strong> {seleccionado.clases}</p>
            <p className="text-gray-600 leading-relaxed">
              Este curso está diseñado para brindarte una formación completa y certificada en{" "}
              <b>{seleccionado.titulo}</b>, con clases teórico-prácticas impartidas por profesionales expertos.
            </p>

            <div className="mt-6 text-right">
              <button
                onClick={() => setSeleccionado(null)}
                className="px-6 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-all"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default AllCourses;
