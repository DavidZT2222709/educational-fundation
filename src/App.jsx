import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Statical components
import Navbar from './components/staticelements/Navbar.jsx'
import Footer from './components/staticelements/Footer.jsx'
import WhatsAppButton from './components/staticelements/WhatsAppButton.jsx'

//Sections
import Hero from './components/inicio/Hero.jsx'
import Programas from './components/inicio/Programas.jsx'
import Testimonials from './components/inicio/Testimonials.jsx'
import Requirements from './components/inicio/Requirements.jsx'
import Reasons from './components/inicio/Reasons.jsx'
import Stats from './components/inicio/Stats.jsx'
import Mapa from './components/inicio/Mapa.jsx'


// Pages
import AllCourses from './components/pages/AllCourses.jsx'
import Contact from './components/pages/Contact.jsx'
import Nosotros from './components/pages/Nosotros.jsx'

function App() {
  return (
    <Router>
      <main>
        <Navbar />

        <Routes>
          {/* Principal Pages */}
          <Route path='/' element={
            <>
              <Hero />
              <Programas />
              <Testimonials />
              <Requirements />
              <Reasons />
              <Stats />
              <Mapa />
            </>
          } />

          {/* All Courses Page */}
          <Route path='/AllCourses' element={<AllCourses />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Nosotros' element={<Nosotros />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </main>
    </Router>
  )
}

export default App