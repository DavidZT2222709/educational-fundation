import React, { useState } from "react";
import logo from "../../assets/logof.png"; // Ajusta la ruta a tu logo

const Hero = () => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    programa: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", form);
    alert("Tu información fue enviada. Pronto te contactaremos.");
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
        <div className="flex flex-col justify-center space-y-10 max-w-xl mx-auto text-white">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
              Fundación Social Educativa <br />
              <span className="text-yellow-300">Sueños de Amor (FUNDSAM)</span>
            </h1>
            <p className="text-lg md:text-xl">
              Transformando vidas a través de la educación y el acompañamiento social.
            </p>
          </div>

          {/* BOTONES CON EFECTO ANIMADO */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Botón amarillo */}
            <a
              href="/inscripciones"
              className="
                relative overflow-hidden px-6 py-3 rounded-full font-semibold text-black bg-yellow-400 
                shadow-md text-center transition-transform duration-500
                hover:scale-105 hover:text-white
                before:content-[''] before:absolute before:left-[-50px] before:top-0 
                before:h-full before:w-0 before:bg-yellow-400 before:skew-x-12 before:-z-10 
                before:transition-all before:duration-700
                hover:before:w-[250%]
              "
            >
              Ir a Inscripciones
            </a>

            {/* Botón azul translúcido */}
            <a
              href="/programas"
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
          </div>

          {/* FORMULARIO */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg space-y-4 text-gray-800 max-w-md mx-auto md:mx-0"
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
            <select
              name="programa"
              value={form.programa}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="">Selecciona un programa</option>
              <option>Bachillerato por ciclos</option>
              <option>Formación en artes y oficios</option>
              <option>Programas técnicos</option>
              <option>Talleres de desarrollo personal</option>
            </select>

            {/* CAPTCHA SIMULADO */}
            <div className="bg-gray-100 p-3 rounded-lg text-sm text-center">
              [ Aquí irá el reCAPTCHA de Google ]
            </div>

            <button
              type="submit"
              className="w-full bg-[#004AAD] text-white px-6 py-3 rounded-lg hover:bg-[#003580] transition"
            >
              Enviar información
            </button>
          </form>
        </div>

        {/* COLUMNA DERECHA: LOGO CON EFECTO */}
        <div className="flex justify-center items-center">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
