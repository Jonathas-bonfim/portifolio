import { useState } from "react";

import './index.scss'

const experiences: ExperiencesProps[] = [
  {
    id: 1,
    role: 'Freelancer',
    time: {
      initial: 'Dez 2021',
      finally: 'Atualmente'
    },
    company: 'Freelancer',
    description: 'Como freelancer fui responsável por elaborar e desenvolver projetos front-end e mobile de maneira completa, estruturando, elaborando o design, publicando e testando todas as funcionalidades.',
    assignments: 'Aplicações Web com React JS | Aplicativos com React Native e Flutter | Responsividade | Integração com API.'
  },
  {
    id: 2,
    role: 'Front-end Developer',
    time: {
      initial: 'Jun 2022',
      finally: 'Mar 2023'
    },
    company: 'Agência Eplus',
    description: 'Atuei como desenvolvedor front-end de e-commerce participando do planejamento de sprints e viabilizando funcionalidades solicitadas, integrando e desenvolvendo componentes Vtex IO. Em Vtex CMS era responsável por desenvolver features, corrigir bugs, analisar e melhorar a performance.',
    assignments: 'Desenvolvimento de e-commerce Web | Desenvolvimento de Features | Manutenção em códigos legados e minificados em JavaScript e jQuery | Scrum - Compromisso de prazo e funcionalidades definidas na sprint.'

  },
  {
    id: 3,
    role: 'Qualitaty Assurance Developer',
    time: {
      initial: '2022-06-22',
      finally: '2023-03-20'
    },
    company: 'Atual Sistemas',
    description: 'Atuei também como Qualitaty Assurance Developer, ajudei no processo de implementar testes automatizados do sistema ERP onde o tempo para disponibilizar atualizações foi reduzido em 50% e o tamanho dos arquivos em 60%, organizava o repositório no github, definia as tarefas prioritárias para a sprint e auxiliava nas demandas da equipe. Implantei um projeto onde foi possível atualizar mais de 3000 mil clientes de forma automática resultando em redução de custos consideráveis para a empresa.',
    assignments: 'Desenvolvimento de tarefas para melhorar a experiência do usuário | Criação e execução de planos de testes baseado na regra de negócio e casos de uso | Planejamento, execução e desenvolvimento de testes automatizados | Manutenção em banco de dados PostgreSQL.'
  }
];

type ExperiencesProps = {
  id: number,
  role: string,
  time: {
    initial: string,
    finally: string
  },
  company: string,
  description: string,
  assignments: string
}

export function Experiences() {
  const [activeRole, setActiveRole] = useState(1)

  function handleVisibleExperience(item: number) {
    setActiveRole(item)
  }

  return (
    <section className="experiences">
      <div className="container-center">
        <h3 className="title-section">Experiência</h3>
        <main>
          {
            experiences.map((item) => {
              return (
                <article key={item.id} className={activeRole === item.id ? 'container-open' : ''}>
                  <button className="company-title" onClick={() => handleVisibleExperience(item.id)}>{item.company}</button>
                  <section className="details">
                    <header>
                      <h3 className="title">{item.role}</h3>
                      <p className="time">{item.time.initial} - {item.time.finally}</p>
                    </header>
                    <h4 className="company">{item.company}</h4>
                    <p className="description">
                      {item.description}
                    </p>
                    <h3 className="assignments">Atribuições</h3>
                    <p className="description-assignments">{item.assignments}</p>
                  </section>
                </article>
              )
            })
          }
        </main>
      </div>
    </section>
  )
}