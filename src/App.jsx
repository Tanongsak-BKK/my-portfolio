import './App.css'
import Navbar from './layouts/navbars'
import Home from './pages/home'
import About from './pages/about'
import Education from './pages/education'
import Skills from './pages/skills'
import Contact from './pages/contact'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
    </>
  )
}

export default App
