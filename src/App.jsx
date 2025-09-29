import Navbar from './components/staticelements/Navbar.jsx'
import Footer from './components/staticelements/Footer.jsx'
import Hero from './components/inicio/Hero.jsx'
import Programas from './components/inicio/Programas.jsx'
import Testimonials from './components/inicio/Testimonials.jsx'
import Requirements from './components/inicio/Requirements.jsx'
import WhatsAppButton from './components/staticelements/WhatsAppButton.jsx'
import Reasons from './components/inicio/Reasons.jsx'
import Stats from './components/inicio/Stats.jsx'

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

      {/* Stats */}
      <Stats />

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