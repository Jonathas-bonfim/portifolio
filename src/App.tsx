import { About } from './components/About'
import { Experiences } from './components/Experiences'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import ReactGA from 'react-ga'
import { useEffect } from 'react'
import './global/styles.scss'
import './sass/_index.scss'

const MEASUREMENT_ID = "G-BLM1Y19YNK";
ReactGA.initialize(MEASUREMENT_ID)

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  ReactGA.event({
    category: 'home',
    action: "Acesso a home"
  })

  return (
    <>
      <Header />
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </>
  )
}
export default App
