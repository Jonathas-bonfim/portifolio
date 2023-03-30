import './index.scss'

export function Header() {
  function handleClickScroll(item: string) {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log({ item, element })
  }
  return (
    <header className="header-desktop">
      <section className="container-center">
        <aside>
          <button className='button'>
            Portifólio
          </button>
        </aside>
        <nav className='header-content'>
          <button onClick={() => handleClickScroll('home')}>Home</button>
          <button onClick={() => handleClickScroll('about')}>Sobre mim</button>
          <button onClick={() => handleClickScroll('experiences')}>Experiência</button>
          <button onClick={() => handleClickScroll('projects')}>Projetos</button>
        </nav>
      </section>
    </header>
  )
}