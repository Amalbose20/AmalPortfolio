import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Divider from './components/Divider.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import CertsAndEducation from './components/CertsAndEducation.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <CertsAndEducation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
