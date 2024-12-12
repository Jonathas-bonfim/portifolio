import { useState } from "react";

import './index.scss';

const experiences: ExperiencesProps[] = [
  {
    id: 1,
    role: 'Software Engineer',
    time: {
      initial: 'Mai 2023',
      finally: 'Today'
    },
    company: 'RG System',
    description: 'I work on the development of innovative and scalable solutions focused on public health, benefiting millions of users and optimizing critical processes. Key projects include the implementation of a pioneering risk stratification system for hypertension and diabetes, impacting 1.5 million patients, the creation of a digital signature platform for quick and secure validation of medical and administrative documents, and a robust medication management system for healthcare facilities. The technologies and practices I use include React.js, TypeScript, Docker, microservices architecture, and Azure DevOps, always aiming to ensure high scalability and efficiency in the solutions developed.',
    assignments: 'React | React Native | Microsservices | Docker | Scrum.'
  },
  {
    id: 2,
    role: 'Software Engineer',
    time: {
      initial: 'Jun 2022',
      finally: 'Mar 2023'
    },
    company: 'Eplus Agency',
    description: 'I worked on the development of robust e-commerce platforms, collaborating directly with a multidisciplinary squad consisting of UX/UI, Product Owner, analysts, and developers. I utilized agile methodologies to align goals and prioritize high-quality deliveries, focusing on performance and usability. My key responsibilities included developing online stores with VTEX IO, implementing custom features, and optimizing interfaces for a seamless shopping experience. I also maintained legacy code in JavaScript and jQuery, ensuring stability and scalability, created responsive interfaces, and integrated with APIs to meet specific project needs. Additionally, I analyzed and improved performance to ensure efficiency and a better user experience. The experience involved technologies such as React.js, GraphQL, CMS, VTEX IO, and modern front-end development practices, always prioritizing solutions that met client and end-user expectations.',
    assignments: 'React | VTEX IO | GraphQL.'

  },
  {
    id: 3,
    role: 'Software Engineer',
    time: {
      initial: 'Ago 2023',
      finally: 'Jun 2024'
    },
    company: 'Bluwe',
    description: ' I focused on redesigning e-commerce platforms with an emphasis on user experience and performance. I led the complete redesign of Bluwe Cosméticos’ online store, creating a premium interface aligned with UX/UI best practices, resulting in modern and intuitive navigation. Additionally, I was responsible for implementing custom features, maintaining existing components, and providing support for the VTEX IO admin panel, optimizing internal operations. I also conducted detailed heuristic analysis, implementing improvements aimed at efficiency and user retention, significantly enhancing the e-commerce platform’s performance.',
    assignments: 'React | VTEX IO | GraphQL.'
  },
  {
    id: 4,
    role: 'Qualitaty Assurance Developer',
    time: {
      initial: 'Fev 2017',
      finally: 'Jun 2022'
    },
    company: 'Atual Sistemas',
    description: 'As a Quality Assurance Developer, I was responsible for planning, executing, and developing testing strategies to ensure the quality and reliability of software deliveries. I focused on improving user experience, aligning solutions with business rules and use cases identified during the planning phase. I created and implemented comprehensive test plans based on real-use scenarios, validating critical functionalities and preventing issues before deployment. Additionally, I led the project to implement automatic updates for a desktop ERP system, reducing operational costs and eliminating the need for developers to travel to client locations for updates. I also focused on automated testing, system maintenance, and managing repositories in Git, ensuring project stability and organization. My contributions were key in optimizing processes, reducing costs, and ensuring clients remained compliant with necessary updates and regulations.',
    assignments: 'React | PostgreSQL | Git'
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
    <section className="experiences" id="experiences">
      <div className="container-center">
        <h3 className="title-section">Work History</h3>
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
                    <h3 className="assignments">Assignments</h3>
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