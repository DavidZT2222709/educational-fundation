import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Hero from './components/hero/Hero.jsx'
import Inscripciones from './components/hero/Inscripciones.jsx'  
import Programas from './components/hero/Programas.jsx'
import Testimonials from './components/hero/Testimonials.jsx'
import Requirements from './components/hero/Requirements.jsx'
import WhatsAppButton from './components/staticelements/WhatsAppButton.jsx'
import Reasons from './components/hero/Reasons.jsx'

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

      {/* Por qué elegirnos */}
      <Reasons />

      {/* Requisitos */}
      <Requirements />

      {/* Footer */}
      <Footer />

      {/* Botón de WhatsApp */}
      <WhatsAppButton />
    </main>
  )
}

export default App