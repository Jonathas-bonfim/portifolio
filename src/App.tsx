import { About } from './components/about'
import { Experiences } from './components/Experiences'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/projects'
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
    </>
  )
}
export default App
