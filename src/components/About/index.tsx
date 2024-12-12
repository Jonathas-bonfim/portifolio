import curriculumPDF from '../../assets/files/about/curriculum.pdf'
import curriculum from '../../assets/images/about/curriculum.svg'
import email from '../../assets/images/about/email.svg'
import github from '../../assets/images/about/github.svg'
import instagram from '../../assets/images/about/instagram.svg'
import linkedin from '../../assets/images/about/linkedin.svg'
import profile from '../../assets/images/about/profile.jpg'
import youtube from '../../assets/images/about/youtube.svg'

import { FaWhatsapp } from 'react-icons/fa'

import './index.scss'

export function About() {
  return (
    <section className='about' id='about'>
      <div className="container-center">
        <aside className='image'>
          <img src={profile} alt="Foto de perfil" />
        </aside>
        <main>
          <article className="text">
            <h2>ABOUT ME</h2>
            <h3>Espirito Santo, Brazil</h3>
            <p>
              Software developer with over 3 years of programming experience and specialized in front-end development with solid expertise in React.js, Next.js, TypeScript, and advanced integrations with React Native. I contribute to the creation of high-performance and scalable solutions that positively impact thousands of users and optimize strategic operations. Throughout my career, I have participated in challenging, high-impact projects, such as robust e-commerce platforms, public health management systems, and automation tools. My work combines technical excellence, mastery of agile methodologies, and the use of modern technologies to deliver results.
            </p>
          </article>
          <article className="medias-sociais">

            <a href="https://api.whatsapp.com/send/?phone=5527996942828" target="_blank">
              {/* <img src={FaWhatsapp} alt="Linkedin" /> */}
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/jonathas-bonfim/" target="_blank">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/jonathas-bonfim" target="_blank">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.youtube.com/@jonathas.bonfim?sub_confirmation=1" target="_blank">
              <img src={youtube} alt="Youtube" />
            </a>
            <a href="https://www.instagram.com/jonathas.bonfim/" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
          </article>
          <article className='buttons'>
            <a href={curriculumPDF} className="curriculum" target="_blank">
              <img src={curriculum} alt="Currrículo" />
              Currículo
            </a>
            <a href="mailto:jonathas.santos.bonfim@gmail.com" className='email'>
              <img src={email} alt="E-mail" />
              E-mail
            </a>
          </article>
        </main>
      </div>
    </section>
  )
}