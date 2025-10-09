import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const Contacto = () => {
  const formRef = useRef();
  const recaptchaRef = useRef();
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Por favor verifica el captcha antes de enviar.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_fyjolrb", // tu Service ID
        "template_hv5ydq2", // tu Template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setLoading(false);
          setForm({ nombre: "", correo: "", telefono: "", mensaje: "" });
          recaptchaRef.current.reset();
          setCaptchaToken(null);
        },
        (error) => {
          console.error("Error al enviar:", error.text);
          alert("❌ Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* ENCABEZADO */}
      <section className="bg-gradient-to-r from-[#004AAD] to-[#0066CC] text-white text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          Contáctanos
        </motion.h1>
        <p className="mt-4 text-lg opacity-90">
          Estamos aquí para ayudarte. Conoce nuestras sedes y comunícate con nosotros.
        </p>
      </section>

      {/* INFORMACIÓN DE SEDES */}
      <section className="py-16 px-6 md:px-16 grid md:grid-cols-3 gap-10 bg-white shadow-inner">
        {[
          {
            nombre: "Sede Principal",
            direccion: "Cra. 20 #45-12, Bucaramanga, Santander",
            telefono: "+57 317 245 6678",
            correo: "contacto@fundacionsuenosdeamor.edu.co",
          },
          {
            nombre: "Sede Piedecuesta",
            direccion: "Cll. 10 #7-30, Piedecuesta, Santander",
            telefono: "+57 310 456 7890",
            correo: "piedecuesta@fundacionsuenosdeamor.edu.co",
          },
          {
            nombre: "Sede Floridablanca",
            direccion: "Av. Principal #45-23, Floridablanca, Santander",
            telefono: "+57 315 777 9988",
            correo: "florida@fundacionsuenosdeamor.edu.co",
          },
        ].map((sede, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold text-[#004AAD] mb-2">{sede.nombre}</h3>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#004AAD]" /> {sede.direccion}
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaPhoneAlt className="text-[#004AAD]" /> {sede.telefono}
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaEnvelope className="text-[#004AAD]" /> {sede.correo}
            </p>
          </motion.div>
        ))}
      </section>

      {/* FORMULARIO DE CONTACTO */}
      <section className="py-20 bg-gradient-to-b from-[#004AAD]/10 via-[#E5ECFF]/60 to-white">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
          {!isSubmitted ? (
            <>
              <h2 className="text-2xl font-bold text-center text-[#004AAD] mb-6">
                Envíanos tu mensaje
              </h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004AAD]"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Correo</label>
                    <input
                      type="email"
                      name="correo"
                      value={form.correo}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004AAD]"
                      placeholder="ejemplo@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004AAD]"
                    placeholder="+57 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004AAD]"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                {/* reCAPTCHA de Google */}
                <div className="flex justify-center my-4">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lc1m-QrAAAAAM6j35VjjOHJMnhpG0b1SockghXR" // 🔑 Pega tu clave pública de reCAPTCHA aquí
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className={`w-full ${
                    loading ? "bg-gray-400" : "bg-[#004AAD] hover:bg-[#0066CC]"
                  } text-white font-semibold py-3 rounded-lg transition-all shadow-md`}
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </motion.button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-10"
            >
              <FaUser className="mx-auto text-5xl text-[#004AAD] mb-4" />
              <h3 className="text-2xl font-bold text-[#004AAD]">
                ¡Mensaje enviado con éxito!
              </h3>
              <p className="mt-2 text-gray-600">
                Gracias por contactarnos, pronto te responderemos.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contacto;
