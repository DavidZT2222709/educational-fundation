import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX } from "react-icons/fi";

const faqs = [
  {
    q: "¿Cuáles son los horarios de atención?",
    a: "Atendemos de lunes a viernes de 8:00 a.m. a 6:00 p.m. y los sábados de 8:00 a.m. a 12:00 p.m. En esos horarios puedes acercarte a nuestras sedes o comunicarte con nosotros por teléfono o correo electrónico para recibir asesoría personalizada.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Nuestra sede principal se encuentra en Barranquilla, Calle 93 #7g-48, barrio Las Malvinas. También contamos con sedes en Soledad y otras zonas del área metropolitana para facilitar el acceso a la educación. Todas están debidamente señalizadas y cuentan con espacios adecuados para el aprendizaje.",
  },
  {
    q: "¿Cómo puedo inscribirme a un curso o programa?",
    a: "Puedes dirigirte a la sección 'Contacto' de nuestra página web y llenar el formulario con tus datos. También puedes acercarte directamente a cualquiera de nuestras sedes para recibir orientación. Nuestro equipo te guiará paso a paso en el proceso de inscripción según el programa que elijas.",
  },
  {
    q: "¿Qué documentos necesito para inscribirme?",
    a: "Generalmente requerimos: copia del documento de identidad, 2 fotos tamaño 3x4, y un folder con gancho. En programas específicos como Auxiliar en Enfermería o Primera Infancia pueden solicitarse documentos adicionales. Si eres menor de edad, deberás presentar el documento de tu acudiente.",
  },
  {
    q: "¿Qué tipos de programas ofrecen?",
    a: "Ofrecemos una amplia gama de programas: educación básica (preescolar, primaria y bachillerato), carreras técnicas laborales como Auxiliar en Enfermería, Farmacia, Seguridad Ocupacional, Primera Infancia, y cursos cortos certificados. Todos nuestros programas están diseñados para formar personas competentes y comprometidas con la comunidad.",
  },
  {
    q: "¿Cuál es la duración de los programas?",
    a: "Depende del tipo de programa. Las carreras técnicas suelen tener una duración entre 25 y 30 semanas, mientras que los cursos cortos pueden completarse en pocas semanas. En cada plan de estudios encontrarás la duración específica y la cantidad de clases.",
  },
  {
    q: "¿Los programas incluyen prácticas laborales?",
    a: "Sí, todos nuestros programas técnicos incluyen prácticas profesionales garantizadas gracias a nuestros convenios con instituciones del sector salud, educativo y administrativo. Estas prácticas te permitirán aplicar tus conocimientos en contextos reales y fortalecer tu experiencia laboral.",
  },
  {
    q: "¿Qué beneficios tiene estudiar en la Fundación?",
    a: "Además de la calidad académica, ofrecemos horarios flexibles, docentes altamente capacitados, formación humana con enfoque social, acompañamiento constante y prácticas garantizadas. Nuestra misión es brindar educación para transformar vidas y construir futuro.",
  },
  {
    q: "¿Puedo obtener un certificado al finalizar?",
    a: "¡Por supuesto! Todos los estudiantes que culminan su formación satisfactoriamente reciben un certificado avalado por la Fundación Social Educativa Sueños de Amor, con el respaldo del registro de la Secretaría de Educación. Este certificado acredita tus competencias laborales o académicas.",
  },
  {
    q: "¿Cómo puedo contactar directamente con la fundación?",
    a: "Puedes escribirnos desde el formulario de contacto en la web, llamarnos al  (+57) 324-416-3188 o enviarnos un correo electrónico a fundsambarranquilla@gmail.com. También puedes visitarnos en nuestras sedes durante los horarios de atención.",
  },
];

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
      >
        {open ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </motion.button>

      {/* Ventana del chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 left-6 w-80 bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-200 z-50"
          >
            <div className="bg-gradient-to-r from-[#004AAD] to-[#007BFF] text-white p-4 font-bold text-lg">
              💬 Asistente FUNDSAM
            </div>

            <div className="p-4 max-h-80 overflow-y-auto space-y-3 text-gray-700">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-2">
                  <button
                    onClick={() => setSelected(selected === index ? null : index)}
                    className="w-full text-left font-semibold flex justify-between items-center"
                  >
                    {faq.q}
                    <span className="text-blue-500">
                      {selected === index ? "–" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {selected === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-600 mt-1"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chat;
