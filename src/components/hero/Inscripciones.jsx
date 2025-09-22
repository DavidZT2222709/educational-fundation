import React, { useState } from "react";
// Si usas EmailJS: import emailjs from "emailjs-com";

const Inscripciones = () => {
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
    <section id="inscripciones" className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Módulo de Inscripciones
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* PROGRAMAS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Programas disponibles</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bachillerato por ciclos</li>
              <li>Formación en artes y oficios</li>
              <li>Programas técnicos en alianza</li>
              <li>Talleres de desarrollo personal</li>
            </ul>
          </div>

          {/* FORMULARIO */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
          >
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
            <div className="bg-gray-100 p-3 rounded-lg text-sm">
              <p>[ Aquí irá el reCAPTCHA de Google ]</p>
            </div>

            <button
              type="submit"
              className="bg-[#004AAD] text-white px-6 py-3 rounded-lg hover:bg-[#003580] transition"
            >
              Enviar información
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inscripciones;
