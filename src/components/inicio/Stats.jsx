import React from 'react'

const Stats = () => {

    const data = [
        {value:"3,000+", label: "Estudiantes Activos"},
        {value:"13+", label: "Carreras Disponibles"},
        {value:"11+", label: "Sedes de Estudio"},
        {value:"40,000+", label: "Horas de Clases"},
    ]

    return (
        <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center group"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 transition-transform duration-300 group-hover:scale-110">
              {item.value}
            </h2>
            <p className="mt-2 text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
    )
}

export default Stats
