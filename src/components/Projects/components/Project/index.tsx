import linkIMG from '../../../../assets/images/projects/link.svg'

type ProjectProps = {
  name: string,
  description: string,
  icon: string
  icon2: string
  icon3?: string
  icon4?: string
  link: string,
  image: string
}

export function Project({ name, description, link, image, icon, icon2, icon3, icon4 }: ProjectProps) {
  return (
    <nav className='project'>
      <img src={image} alt="Project" className='image-project' />
      <h4>{name}</h4>
      <p>{description}</p>
      <h5>Tecnologias usadas no projeto</h5>
      <div className='icons-project'>
        <img src={icon} />
        <img src={icon2} />
        <img src={icon3} />
        <img src={icon4} />
      </div>
      <a href={link} target="_blank">
        <img src={linkIMG} className='icon' />
        Visualizar
      </a>
    </nav>
  )
}