import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// 1. IMPORTAR LA LIBRERÍA SEO
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Statical components
import Navbar from './components/staticelements/Navbar.jsx'
import Footer from './components/staticelements/Footer.jsx'
import WhatsAppButton from './components/staticelements/WhatsAppButton.jsx'
import ScrollToTopButton from './components/staticelements/ScrollToTopButtom.jsx'
import Chat from './components/staticelements/Chat.jsx'

//Sections
import Hero from './components/inicio/Hero.jsx'
import Programas from './components/inicio/Programas.jsx'
import Testimonials from './components/inicio/Testimonials.jsx'
import Requirements from './components/inicio/Requirements.jsx'
import Reasons from './components/inicio/Reasons.jsx'
import Stats from './components/inicio/Stats.jsx'
import Mapa from './components/inicio/Mapa.jsx'
import News from './components/inicio/News.jsx'

// Pages
import AllCourses from './components/pages/AllCourses.jsx'
import Contact from './components/pages/Contact.jsx'
import Nosotros from './components/pages/Nosotros.jsx'
import Basiceducation from './components/pages/Basiceducation.jsx'

function App() {
  return (
    // 2. ENVOLVER TODA LA APP EN EL PROVIDER
    <HelmetProvider>
      <Router basename='/'>
        <main>
          
          {/* 3. AQUI ESTÁ LA MAGIA DEL SEO (Lo que lee Google) */}
          <Helmet>
            <title>Fundsam - Fundación Sueños de Amor y Motivos | Barranquilla</title>
            <meta 
              name="description" 
              content="Bienvenidos a Fundsam (Fundación Sueños de Amor y Motivos) en Barranquilla. Transformamos vidas a través de la educación básica, cursos y bienestar social." 
            />
            {/* Palabras clave extra para ayudar al robot */}
            <meta name="keywords" content="Fundsam, Fundación Sueños de Amor, Barranquilla, Educación, Cursos, Fundación en Barranquilla, Ayuda Social" />
          </Helmet>

          <Navbar />

          <Routes>
            {/* Principal Pages */}
            <Route path='/' element={
              <>
                <Hero />
                <News />
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
            <Route path='/Basiceducation' element={<Basiceducation />} />
          </Routes>

          <Footer />
          <ScrollToTopButton />
          <Chat />
          <WhatsAppButton />
        </main>
      </Router>
    </HelmetProvider>
  )
}

export default App