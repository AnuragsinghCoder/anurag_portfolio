import React from 'react'
import Navbar from './layout/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Footer from './layout/Footer.jsx'
import Contact from './sections/Contact.jsx'

const App = () => {
  return (
    <div className=' min-screen-h overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Experience />
        <Testimonials /> */}
        <Contact />
      </main>
        <Footer /> 
    </div>
  )
}

export default App