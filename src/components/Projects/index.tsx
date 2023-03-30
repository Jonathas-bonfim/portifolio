import { Project } from './components/Project'
import './index.scss'

export function Projects() {
  return (
    <main className='projects' id='projects'>
      <div className="container-center">
        <h3>PROJETOS</h3>
        <section>
          <Project
            name='Speedo'
            description='Projeto e-commerce em Vtex IO de equipamentos esportivos.'
            icon='https://img.shields.io/badge/-React-05122A?style=flat&logo=react'
            icon2='https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript'
            icon3='https://img.shields.io/badge/-Sass-05122A?style=flat&logo=sass'
            icon4='https://img.shields.io/badge/-vtex-05122A?style=flat&logo=vtex'
            image='https://firebasestorage.googleapis.com/v0/b/letmeask-87b25.appspot.com/o/speedo.png?alt=media&token=3baf6c43-2370-4a9e-9dcd-e59b37656e5a'
            link='https://www.speedo.com.br/'
          />
          <Project
            name='Jean Darrot'
            description='Projeto e-commerce em Vtex IO de moda masculina e feminina.'
            icon='https://img.shields.io/badge/-React-05122A?style=flat&logo=react'
            icon2='https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript'
            icon3='https://img.shields.io/badge/-Sass-05122A?style=flat&logo=sass'
            icon4='https://img.shields.io/badge/-vtex-05122A?style=flat&logo=vtex'
            image='https://firebasestorage.googleapis.com/v0/b/letmeask-87b25.appspot.com/o/jeandarrot.png?alt=media&token=81b7562a-8093-4653-897c-fc4ad9bc46e7'
            link='https://www.jeandarrot.com.br/'
          />
          <Project
            name='Bluwe'
            description='Projeto e-commerce em Vtex IO de cosméticos femininos.'
            icon='https://img.shields.io/badge/-React-05122A?style=flat&logo=react'
            icon2='https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript'
            icon3='https://img.shields.io/badge/-Sass-05122A?style=flat&logo=sass'
            icon4='https://img.shields.io/badge/-vtex-05122A?style=flat&logo=vtex'
            image='https://firebasestorage.googleapis.com/v0/b/letmeask-87b25.appspot.com/o/bluwe.png?alt=media&token=401043fd-7232-4d83-a7e7-acdefd13140e'
            link='https://www.bluwe.com.br/'
          />
          <Project
            name='ES Tech'
            description='Projeto e-commerce em Vtex IO de Aparelhos eletrônicos.'
            icon='https://img.shields.io/badge/-React-05122A?style=flat&logo=react'
            icon2='https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript'
            icon3='https://img.shields.io/badge/-Sass-05122A?style=flat&logo=sass'
            icon4='https://img.shields.io/badge/-vtex-05122A?style=flat&logo=vtex'
            image='https://firebasestorage.googleapis.com/v0/b/letmeask-87b25.appspot.com/o/estech.png?alt=media&token=c90fb308-0be5-4a47-b96f-9da893178fa4'
            link='https://youtu.be/eJjdyKgVYE0?list=PL54q87_dQSc5ErWIj5NVhbIoYba_jcAWJ'
          />

          <Project
            name='Atual Social'
            description='Projeto corporativo interno para funcionários da empresa.'
            icon='https://img.shields.io/badge/-React-05122A?style=flat&logo=react'
            icon2='https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript'
            icon3='https://img.shields.io/badge/-Sass-05122A?style=flat&logo=sass'
            // icon4='https://img.shields.io/badge/-firebase-05122A?style=flat&logo=firebase'
            image='https://firebasestorage.googleapis.com/v0/b/letmeask-87b25.appspot.com/o/atualsocial.png?alt=media&token=5b33bded-413f-4787-9baf-33be37bdf729'
            link='https://youtu.be/vG9A6kNlfdE?list=PL54q87_dQSc5ErWIj5NVhbIoYba_jcAWJ'
          />

          <Project
            name='GoRestaurant'
            description='Projeto de estudo simulando um cardápio de restaurante.'
            icon='https://img.shields.io/badge/-React-05122A?style=flat&logo=react'
            icon2='https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript'
            icon3='https://img.shields.io/badge/-StyledComponents-05122A?style=flat&logo=styledComponents'
            // icon4='https://img.shields.io/badge/-firebase-05122A?style=flat&logo=firebase'
            image='https://firebasestorage.googleapis.com/v0/b/letmeask-87b25.appspot.com/o/gorestaurant.png?alt=media&token=cb567ada-da82-4713-b8a5-0bc3e2dd664e'
            link='https://youtu.be/vG9A6kNlfdE?list=PL54q87_dQSc5ErWIj5NVhbIoYba_jcAWJ'
          />
        </section>
      </div>
    </main>
  )
}