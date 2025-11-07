import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logof.png";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const Hero = () => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [captchaValido, setCaptchaValido] = useState(false);

  const handleCaptcha = (value) => {
    console.log("Captcha value:", value);
    if (value) setCaptchaValido(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValido) {
      alert("⚠️ Por favor verifica el reCAPTCHA antes de enviar.");
      return;
    }

    const serviceID = "service_muk8phf";
    const templateID = "template_hv5ydq2";
    const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      nombre: form.nombre,
      correo: form.correo,
      telefono: form.telefono,
      mensaje: form.mensaje,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (response) => {
          console.log("Correo enviado exitosamente!", response.status, response.text);
          alert("✅ Tu información fue enviada correctamente. ¡Pronto te contactaremos!");
          setForm({ nombre: "", correo: "", telefono: "", mensaje: "" });
          setCaptchaValido(false);
        },
        (err) => {
          console.error("Error al enviar el correo:", err);
          alert("❌ Hubo un error al enviar tu información. Por favor, intenta nuevamente.");
        }
      );
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* FONDO GRADIENTE EN MOVIMIENTO */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002F6C] via-[#004AAD] to-[#0066CC] animate-gradientMove"></div>

      {/* ONDAS SVG ANIMADAS */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full animate-waveMove"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.2"
            d="M0,160L40,186.7C80,213,160,267,240,282.7C320,299,400,277,480,229.3C560,181,640,107,720,101.3C800,96,880,160,960,186.7C1040,213,1120,203,1200,202.7C1280,203,1360,213,1400,218.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 container mx-auto px-8 py-12 grid md:grid-cols-2 gap-12 min-h-screen">
        {/* COLUMNA IZQUIERDA */}
        <motion.div
          className="flex flex-col justify-center space-y-10 max-w-xl mx-auto text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
              Fundación Social Educativa <br />
              <span className="text-yellow-300">Sueños de Amor (FUNDSAM)</span>
            </h1>
            <p className="text-lg md:text-xl">
              Transformando vidas a través de la educación y el acompañamiento social.
            </p>
          </motion.div>

          {/* BOTONES CON EFECTO ANIMADO */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="/Contact"
              className="
                relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white bg-yellow-500 
                shadow-md text-center transition-transform duration-500
                hover:scale-105 hover:text-white
                before:content-[''] before:absolute before:left-[-50px] before:top-0 
                before:h-full before:w-0 before:bg-blue-700 before:skew-x-12 before:-z-10 
                before:transition-all before:duration-700
                hover:before:w-[250%]
              "
            >
              Ir a Inscripciones
            </a>

            <a
              href="/AllCourses"
              className="
                relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white bg-white/20 backdrop-blur-md 
                shadow-md text-center transition-transform duration-500
                hover:scale-105 hover:text-black
                before:content-[''] before:absolute before:left-[-50px] before:top-0 
                before:h-full before:w-0 before:bg-white before:skew-x-12 before:-z-10 
                before:transition-all before:duration-700
                hover:before:w-[250%]
              "
            >
              Ver Programas
            </a>
          </motion.div>

          {/* FORMULARIO */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg space-y-4 text-gray-800 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-2 text-center text-[#004AAD]">
              Inscríbete aquí
            </h3>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre completo"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg"
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={form.correo}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg"
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Tu teléfono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg"
            />

            <div>
              <label className="block text-sm font-semibold mb-1">Mensaje</label>
              <textarea
                name="mensaje"
                placeholder="Tu mensaje"
                value={form.mensaje}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg"
              />
            </div>

            <div className="flex justify-center mt-4">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={handleCaptcha}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#004AAD] text-white px-6 py-3 rounded-lg hover:bg-[#003580] transition"
            >
              Enviar información
            </button>
          </motion.form>
        </motion.div>

        {/* COLUMNA DERECHA: LOGO */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <img
            src={logo}
            alt="Logo Fundación"
            className="
              w-[400px] md:w-[500px] lg:w-[600px] drop-shadow-2xl
              animate-float
              transform transition-transform duration-500
              hover:scale-110 hover:rotate-3
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
