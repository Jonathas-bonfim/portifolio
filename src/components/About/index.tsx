import profile from '../../assets/images/about/profile.jpg'
import linkedin from '../../assets/images/about/linkedin.svg'
import github from '../../assets/images/about/github.svg'
import youtube from '../../assets/images/about/youtube.svg'
import instagram from '../../assets/images/about/instagram.svg'
import curriculumPDF from '../../assets/images/about/curriculum.svg'
import email from '../../assets/images/about/email.svg'
import curriculum from '../../assets/files/about/curriculum.pdf'

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
              Sou desenvolvedor de software apaixonado pelo que faço, dedicado e focado em alcançar as metas, busco sempre
              entregar mais do que é solicitado e executo todas as tarefas da melhor maneira possível.
            </p>
            <p>
              Em minha carreira profissional possuo histórico de ajudar a melhorar os processos internos, resolver problemas de
              forma eficiente e objetiva, desenvolver sites de acordo com o layout solicitado e refatorar códigos legados, buscando
              sempre o melhor para a equipe e para o usuário final.
            </p>
          </article>
          <article className="medias-sociais">
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