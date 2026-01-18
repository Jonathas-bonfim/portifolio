import { useEffect } from 'react'
import ReactGA from 'react-ga'

import github from '../../assets/images/home/github.svg'
import linkedin from '../../assets/images/home/linkedin.svg'
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
      <div className='home-background'>
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className='container-center'>
        <main className="content-left">
          <p className="greeting">HELLO, I AM</p>
          <h1>JÔNATHAS BONFIM</h1>
          <p className='headline'>I create digital solutions that transform businesses</p>
          <p className='subheadline'>Developer specialized in React.js, Next.js, React Native and Node.js. Turning ideas into high-impact products that reach millions of users.</p>
          <div className="cta-section">
            <div className="buttons">
              <a className='btn-primary' href="#projects">
                View Projects
              </a>
              <a className='btn-secondary' href="#about">
                About Me
              </a>
            </div>
            <div className="social-links">
              <a className='linkedin' href="https://www.linkedin.com/in/jonathas-bonfim/" target='_blank' aria-label="LinkedIn">
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a className='github' href="https://github.com/Jonathas-bonfim" target='_blank' aria-label="GitHub">
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
        </main>
        <aside className='container-right'>
          <div className="visual-element">
            <div className="code-window">
              <div className="code-window-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-text"> developer</span> = <span className="code-string">'Jônathas'</span>;
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-text"> specialty</span> = <span className="code-string">'Digital Solutions'</span>;
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-text"> result</span> = developer
                  <span className="code-operator">.</span>
                  <span className="code-function">transform</span>(business);
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}