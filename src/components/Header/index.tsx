import './index.scss'

export function Header() {
  return (
    <header className="header-desktop">
      <section className="container-center-header">
        <aside>
          <button className='button'>
            Portifólio
          </button>
        </aside>
        <nav className='header-content'>
          <a href="">Home</a>
          <a href="">Sobre mim</a>
          <a href="">Experiência</a>
          <a href="">Projetos</a>
        </nav>
      </section>
    </header>
  )
}