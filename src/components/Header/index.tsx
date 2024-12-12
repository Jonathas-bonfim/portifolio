import { useState } from 'react';
import hamburguer from '../../assets/images/header/menu-hamburguer.svg';

import './index.scss';

export function Header() {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)

  function handleClickScroll(item: string) {
    const element = document.getElementById(item);
    if (element) {
      const headerHeight = document.querySelector('.header-desktop')?.clientHeight || 0;
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: offsetTop - headerHeight, behavior: 'smooth' });
    }
    if (window.innerWidth <= 1024) {
      setMenuMobileOpen(!menuMobileOpen);
    }
  }


  function handleToggleMenuMobile() {
    setMenuMobileOpen(!menuMobileOpen)
  }

  return (
    <header className="header-desktop">
      <section className="container-center">
        <aside>
          <button className='button'>
            Portifólio
          </button>
        </aside>
        <button className="menu-hamburguer" onClick={() => handleToggleMenuMobile()}>
          <img src={hamburguer} alt="Menu Mobile" />
        </button>
        <nav className={menuMobileOpen ? 'header-content--open' : 'header-content'}>
          <button onClick={() => handleClickScroll('home')}>Home</button>
          <button onClick={() => handleClickScroll('about')}>About me</button>
          <button onClick={() => handleClickScroll('experiences')}>Work History</button>
          <button onClick={() => handleClickScroll('projects')}>Projects</button>
        </nav>
      </section>
    </header>
  )
}