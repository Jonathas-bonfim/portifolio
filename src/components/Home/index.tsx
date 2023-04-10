import { useEffect } from 'react'
import ReactGA from 'react-ga'

import looper from '../../assets/images/home/looper.svg'
import linkedin from '../../assets/images/home/linkedin.svg'
import github from '../../assets/images/home/github.svg'
import './index.scss'


export function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  ReactGA.event({
    category: 'home',
    action: "Acesso a home"
  })

  return (
    <section className="home" id='home'>
      <div className='container-center'>
        <main className="content-left">
          <p>OLÁ, EU SOU</p>
          <h1>JÔNATHAS BONFIM</h1>
          <p className='career'>DESENVOLVEDOR FRONT-END </p>
          <div className="buttons">
            <a className='linkedin' href="https://www.linkedin.com/in/jonathas-bonfim/" target='_blank'>
              <img src={linkedin} alt="Linkedin" />
              Linkedin
            </a>
            <a className='github' href="https://github.com/Jonathas-bonfim" target='_blank'>
              <img src={github} alt="Github" />
              GitHub
            </a>
          </div>
        </main>
        <aside className='container-right'>
          <img src={looper} />
        </aside>
      </div>
    </section>
  )
}