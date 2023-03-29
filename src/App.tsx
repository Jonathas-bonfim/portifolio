import { About } from './components/About'
import { Experiences } from './components/Experiences'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import './global/styles.scss'
import './sass/_index.scss'

function App() {
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
