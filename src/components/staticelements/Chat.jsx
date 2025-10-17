// src/components/Chat.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX } from "react-icons/fi";

const faqs = [
  {
    q: "¿Cuáles son los horarios de atención?",
    a: "Atendemos de lunes a viernes de 8:00 a.m. a 6:00 p.m. y sábados de 8:00 a.m. a 12:00 p.m.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Nuestra sede principal está en Bucaramanga, Calle 93 #7g-48, barrio Las Malvinas.",
  },
  {
    q: "¿Cómo puedo inscribirme a un curso?",
    a: "Puedes dirigirte a la sección 'Contacto' y llenar el formulario o visitar la sede para recibir asesoría personalizada.",
  },
  {
    q: "¿Qué documentos necesito para inscribirme?",
    a: "Debes presentar copia de la cédula, 2 fotos 3x4 y un folder con gancho. Algunos programas pueden requerir documentos adicionales.",
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
        className="fixed bottom-6 left-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 font-bold text-lg">
              💬 Asistente Fundación Educativa
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
