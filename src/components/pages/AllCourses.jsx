import React, { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaBookOpen,
  FaCertificate,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { motion } from "framer-motion";

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

  // 🩺 Carreras Técnicas
  const carreras_tecnicas = [
    {
      id: 1,
      titulo: "Auxiliar en Enfermería",
      semanas: "30 Semanas",
      clases: "30 Clases",
      imagen:
        "https://essaeformacion.com/wp-content/uploads/2021/11/AUXILIAR-DE-ENFERMERIA.jpg",
      descripcion:
        "El Auxiliar en Enfermería está capacitado para brindar apoyo en la atención integral del paciente, aplicando procedimientos básicos de enfermería bajo supervisión profesional. Participa en la promoción de la salud, prevención de enfermedades y cuidado humanizado en instituciones hospitalarias y comunitarias.",
    },
    {
      id: 2,
      titulo: "Auxiliar de Farmacia",
      semanas: "30 Semanas",
      clases: "30 Clases",
      imagen:
        "https://centroinca.com/centroinca/wp-content/uploads/2021/03/Farmacea.jpg",
      descripcion:
        "El Auxiliar de Farmacia domina los procesos de dispensación, control y almacenamiento de medicamentos, siguiendo las normas sanitarias y de seguridad vigentes. Está preparado para trabajar en farmacias, droguerías, IPS, EPS y otros establecimientos de salud, garantizando una atención ética y responsable al usuario.",
    },
    {
      id: 3,
      titulo: "Auxiliar Administrativo en Salud",
      semanas: "25 Semanas",
      clases: "25 Clases",
      imagen:
        "https://global.tiffin.edu/img/article/importancia-de-la-administracion-de-los-servicios-de-salud.webp",
      descripcion:
        "El Técnico Laboral en Auxiliar Administrativo en Salud gestiona los procesos administrativos y de atención al usuario en instituciones del sector salud. Apoya la admisión de pacientes, el manejo de historias clínicas, la facturación y la afiliación al sistema general de seguridad social en salud.",
    },
    {
      id: 4,
      titulo: "Auxiliar en Primera Infancia",
      semanas: "25 Semanas",
      clases: "25 Clases",
      imagen:
        "https://www.comfenalcovalle.com.co/wp-content/uploads/2023/11/primera-infancia.webp",
      descripcion:
        "El Auxiliar en Atención a la Primera Infancia contribuye al desarrollo integral de niños y niñas en edad preescolar, atendiendo sus necesidades educativas, afectivas y nutricionales. Promueve entornos de aprendizaje seguros y enriquecedores, en articulación con docentes y profesionales de apoyo.",
    },
    {
      id: 5,
      titulo: "Operador en Maquinaria Pesada",
      semanas: "30 Semanas",
      clases: "30 Clases",
      imagen:
        "https://inoxidablesvictoria.com/wp-content/uploads/2023/10/operador-posando-al-frente-de-la-maquinaria-pesada-que-conduce.jpg",
      descripcion:
        "El Técnico Laboral en Operación de Maquinaria Pesada desarrolla habilidades para operar de forma segura y eficiente equipos como retroexcavadoras, bulldozers, motoniveladoras y cargadores frontales, cumpliendo con las normas de seguridad industrial y mantenimiento básico de los equipos.",
    },
    {
      id: 6,
      titulo: "Auxiliar en Seguridad Ocupacional",
      semanas: "30 Semanas",
      clases: "30 Clases",
      imagen:
        "https://cdn.prod.website-files.com/6360d0b8798bc2249104a104/658b47484539bfecd2896d41_seguridad%20ocupacional.jpg",
      descripcion:
        "El Técnico Laboral en Seguridad Ocupacional promueve ambientes de trabajo seguros, identifica factores de riesgo y aplica medidas preventivas frente a accidentes y enfermedades laborales. Está preparado para fomentar la salud ocupacional y apoyar la gestión de la seguridad en cualquier entorno laboral.",
    },
    {
      id: 7,
      titulo: "Asistente Administrativo",
      semanas: "20 Semanas",
      clases: "20 Clases",
      imagen:
        "https://www.polisura.edu.co/wp-content/uploads/2024/07/auxiliar-administrativo.jpg",
      descripcion:
        "El Asistente Administrativo es pieza clave en la gestión organizacional. Desarrolla competencias en manejo de agendas, correspondencia, archivo, atención al cliente y uso de herramientas ofimáticas. Su formación le permite apoyar procesos administrativos en empresas públicas y privadas.",
    },
    {
      id: 8,
      titulo: "Home Care (Cuidado en Casa)",
      semanas: "25 Semanas",
      clases: "25 Clases",
      imagen:
        "https://homecare-aid.com/wp-content/uploads/2024/04/Different-types-of-Home-Care-.jpg",
      descripcion:
        "El Técnico Laboral en Home Care se especializa en el cuidado integral de pacientes en su entorno domiciliario. Está capacitado para asistir en la administración de medicamentos, control de signos vitales, movilización, higiene y apoyo emocional, garantizando un servicio humanizado y seguro.",
    },
    {
      id: 9,
      titulo: "Auxiliar Contable y Financiero",
      semanas: "25 Semanas",
      clases: "25 Clases",
      imagen:
        "https://servicioscaja.comfenalcovalle.com.co/wp-content/uploads/2024/04/Auxiliar-administrativo-1024x683.png",
      descripcion:
        "El Auxiliar Contable y Financiero adquiere competencias en el manejo de ciclos contables, normativa tributaria, facturación y software financiero. Está preparado para apoyar la gestión de tesorería, liquidación de impuestos y análisis de costos en diversos sectores empresariales.",
    },
    {
      id: 10,
      titulo: "Tecnico en Recreación y Deportes",
      semanas: "25 Semanas",
      clases: "25 Clases",
      imagen:
        "https://static.wixstatic.com/media/bf3f9c_85eff494d3c44f55aa5c108880baaeb6~mv2.jpg/v1/fill/w_4803,h_2430,al_c,q_90/tecnicooendeportes.jpg",
      descripcion:
        "El Técnico en Recreación y Deportes adquiere competencias en el manejo de técnicas recreativas, entrenamiento básico y primeros auxilios. Está preparado para apoyar la formación deportiva, gestionar escenarios recreativos y promover el bienestar físico en clubes, gimnasios y cajas de compensación.",
    },
  ];

  // 💄 Cursos Cortos
  const cursos_cortos = [
    {
      id: 1,
      titulo: "Maquillaje Profesional",
      semanas: "6 Semanas",
      clases: "6 Clases",
      imagen:
        "https://www.cemcanarias.es/wp-content/uploads/2023/02/maquillaje-y-maquillaje-profesional-1-scaled.jpg",
      descripcion:
        "El curso de Maquillaje Profesional enseña técnicas de aplicación de productos cosméticos para resaltar la belleza natural. Aprenderás maquillaje social, artístico y para medios audiovisuales, con prácticas enfocadas en la estética, el color y la creatividad.",
    },
    {
      id: 2,
      titulo: "Uñas Acrílicas",
      semanas: "6 Semanas",
      clases: "6 Clases",
      imagen:
        "https://media.istockphoto.com/id/528708841/es/foto/azul-rosa-sesi%C3%B3n-de-manicura.jpg?s=612x612&w=0&k=20&c=r4IvFj8uJzC78fls_SJcYmFUp1nWkz--0o2fUHtIFVc=",
      descripcion:
        "Aprende la técnica profesional de aplicación y diseño de uñas acrílicas. Este curso te capacita en el manejo de materiales, estructura de la uña, decoración y tendencias en manicura moderna.",
    },
    {
      id: 3,
      titulo: "Logística y Bodegaje",
      semanas: "8 Semanas",
      clases: "8 Clases",
      imagen:
        "https://www.polisura.edu.co/wp-content/uploads/2023/03/estudia-logistica.jpg",
      descripcion:
        "Este curso te prepara para gestionar eficientemente procesos de almacenamiento, inventario, distribución y transporte de mercancías. Desarrolla habilidades para desempeñarte en el área logística de empresas públicas o privadas.",
    },
    {
      id: 4,
      titulo: "Manipulación de Alimentos",
      semanas: "4 Semanas",
      clases: "4 Clases",
      imagen:
        "https://colombianadecursos.com/wp-content/uploads/2023/03/manipulacion-de-alimentos.jpg",
      descripcion:
        "Aprende las normas y prácticas de higiene que garantizan la inocuidad en la preparación, transporte y conservación de alimentos, cumpliendo la reglamentación sanitaria vigente.",
    },
    {
      id: 5,
      titulo: "Inglés para Niños",
      semanas: "10 Semanas",
      clases: "10 Clases",
      imagen:
        "https://selecciones.com.mx/wp-content/uploads/2023/10/razones-del-por-que-aprender-ingles-desde-ninos.png",
      descripcion:
        "Este curso introduce a los niños al idioma inglés de forma divertida y dinámica, fomentando la pronunciación, el vocabulario básico y la comprensión oral mediante juegos, canciones y actividades interactivas.",
    },
    {
      id: 6,
      titulo: "Belleza y Peluquería",
      semanas: "25 Semanas",
      clases: "25 Clases",
      imagen:
        "https://img.freepik.com/fotos-premium/salon-belleza-peluqueria-mujeres_170532-2138.jpg",
      descripcion:
        "El programa en Belleza y Peluquería forma profesionales en técnicas de corte, coloración, estilismo, cuidado capilar y estética facial. Desarrolla habilidades artísticas y de atención al cliente para desempeñarse en salones de belleza o como emprendedores del sector.",
    },
  ];

  // 📜 Cursos Certificados
  const cursos_certificados = [
    {
      id: 1,
      titulo: "Combo BLS + ACLS",
      semanas: "4 Semanas",
      clases: "4 Clases",
      imagen:
        "https://www.bupasalud.com/sites/default/files/styles/640_x_400/public/articulos/2024-11/fotos/que-son-primeros-auxilios-1.jpg?itok=veqNGtyW",
      descripcion:
        "Certifícate en soporte vital básico (BLS) y avanzado (ACLS), aprendiendo protocolos actualizados para la atención de emergencias cardiovasculares y respiratorias en pacientes adultos.",
    },
    {
      id: 2,
      titulo: "AIEPI",
      semanas: "3 Semanas",
      clases: "3 Clases",
      imagen:
        "https://www.upb.edu.co/es/imagenes/img-estrategia-aiepi-clinico-virtual-1464270287344.jpg",
      descripcion:
        "El curso AIEPI (Atención Integral a las Enfermedades Prevalentes de la Infancia) capacita al estudiante en el manejo adecuado de enfermedades comunes en niños, bajo un enfoque integral de salud preventiva.",
    },
    {
      id: 3,
      titulo: "Humanización",
      semanas: "3 Semanas",
      clases: "3 Clases",
      imagen:
        "https://enlinea.santotomas.cl/web/wp-content/uploads/sites/2/2021/06/team-spirit-2447163_1920-1-744x465.jpg",
      descripcion:
        "Desarrolla competencias para brindar atención humanizada, basada en el respeto, la empatía y la comunicación efectiva con pacientes, familiares y equipos de salud.",
    },
    {
      id: 4,
      titulo: "Gestión del Duelo",
      semanas: "3 Semanas",
      clases: "3 Clases",
      imagen:
        "https://coreservicios.com.co/wp-content/uploads/2021/01/Manejo-y-acompan%CC%83amiento-del-duelo-por-muerte-1024x683.jpg",
      descripcion:
        "Aprende herramientas psicológicas y emocionales para acompañar a personas que atraviesan procesos de pérdida, con sensibilidad y respeto por sus emociones.",
    },
    {
      id: 5,
      titulo: "Seguridad al Paciente",
      semanas: "3 Semanas",
      clases: "3 Clases",
      imagen: "https://ipscines.com/wp-content/uploads/2022/05/seguridad-del-paciente1.jpg",
      descripcion:
        "Este curso fortalece las competencias para prevenir eventos adversos y garantizar la seguridad del paciente dentro de los servicios de salud, siguiendo estándares nacionales e internacionales.",
    },
    {
      id: 6,
      titulo: "Combo Primeros Auxilios",
      semanas: "4 Semanas",
      clases: "4 Clases",
      imagen: "https://escuelaelbs.com/wp-content/uploads/tecnicas-primeros-auxilios.jpg",
      descripcion:
        "Capacítate en técnicas de primeros auxilios para la atención inicial de emergencias. Aprende a actuar ante situaciones de riesgo, hemorragias, fracturas o reanimación cardiopulmonar.",
    },
    {
      id: 7,
      titulo: "Vacunación",
      semanas: "3 Semanas",
      clases: "3 Clases",
      imagen:
        "https://www.bucaramanga.gov.co/wp-content/uploads/2021/08/Vacuna-ninos.jpg",
      descripcion:
        "El curso de Vacunación te prepara para aplicar biológicos siguiendo las normas del esquema nacional, garantizando la cadena de frío, el manejo seguro y el registro adecuado de dosis.",
    },
    {
      id: 8,
      titulo: "Atención a Víctimas de Violencia Sexual",
      semanas: "3 Semanas",
      clases: "3 Clases",
      imagen:
        "https://eldiariodesalud.com/sites/default/files/inline-images/atencion-integral-victima-sexual_0.jpg",
      descripcion:
        "Brinda conocimientos esenciales para la atención integral y humanizada de víctimas de violencia sexual, con enfoque ético, legal y psicosocial.",
    },
    {
      id: 9,
      titulo: "Toma de Muestras de Laboratorio Clínico",
      semanas: "4 Semanas",
      clases: "4 Clases",
      imagen:
        "https://www.medicenterips.com/wp-content/uploads/2022/08/DSC_1144_1.jpg",
      descripcion:
        "Aprende técnicas de recolección, conservación y transporte de muestras biológicas, aplicando normas de bioseguridad y asegurando la calidad en los procesos de laboratorio.",
    },
    {
      id: 10,
      titulo: "Atención a Víctimas con Agentes Químicos",
      semanas: "4 Semanas",
      clases: "4 Clases",
      imagen:
        "https://www.lacardio.org/wp-content/uploads/2024/08/atencion-integral-a-victimas.webp",
      descripcion:
        "Desarrolla habilidades para la atención inmediata y manejo adecuado de personas expuestas a sustancias químicas, priorizando la estabilización y descontaminación del paciente.",
    },
  ];

  // Selección dinámica
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
          visible: { transition: { staggerChildren: 0.1 } },
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
            <img
              src={item.imagen}
              alt={item.titulo}
              className="h-52 w-full object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-[180px]">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {item.titulo}
              </h3>
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

            <img
              src={seleccionado.imagen}
              alt={seleccionado.titulo}
              className="rounded-2xl mb-5 h-48 w-full object-cover"
            />
            <h2 className="text-2xl font-bold text-blue-800 mb-3">
              {seleccionado.titulo}
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Duración:</strong> {seleccionado.semanas}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Clases:</strong> {seleccionado.clases}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {seleccionado.descripcion}
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
