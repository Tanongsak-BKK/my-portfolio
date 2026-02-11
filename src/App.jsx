import './App.css'
import About from './components/about.jsx'
import Home from './components/home.jsx'
import Navbar from './components/navbars.jsx'
import Education from './components/education.jsx'
import Skills from './components/skills.jsx'
import Contact from './components/contact.jsx'

function App() {

  return (
    <>
      <Navbar />
     <section id="home">
      <Home />
     </section>
     <section id="about">
      <About />
     </section>
     <section id="education">
      <Education />
     </section>
     <section id="skills">
      <Skills />
     </section>
     <section id="contact">
      <Contact />
     </section>
    </>
  )
}

export default App
