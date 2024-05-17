import curriculum from '../../assets/files/about/curriculum.pdf'
import curriculumPDF from '../../assets/images/about/curriculum.svg'
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
            <h2>SOBRE MIM</h2>
            <h3>São Gabriel da Palha, Brasil</h3>
            <p>
              Sou desenvolvedor especialista em front-end com sólida experiência em React.js, JavaScript, Next.js e TypeScript. Tenho atuado em projetos que envolvem React Native, AWS, Azure DevOps, microsserviços e Docker, proporcionando soluções eficientes e inovadoras para os desafios técnicos.
            </p>
            <p>
              Minha trajetória profissional é marcada pela constante busca por aprimoramento e atualização nas melhores práticas do desenvolvimento web. Com um olhar atento para a usabilidade e performance, contribuo para a criação de interfaces intuitivas e funcionais que elevam a experiência do usuário.
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
            <a href={curriculum} className="curriculum" target="_blank">
              <img src={curriculumPDF} alt="Currrículo" />
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