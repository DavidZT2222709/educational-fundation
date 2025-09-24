import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import Inscripciones from './components/hero/Inscripciones.jsx'  
import Programas from './components/hero/Programas.jsx'
import Testimonials from './components/hero/Testimonials.jsx'
import Requirements from './components/hero/Requirements.jsx'

function App() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Programas */}
      <Programas />

      {/* Testimonios */}
      <Testimonials />

      {/* Requisitos */}
      <Requirements />
    </main>
  )
}

export default App