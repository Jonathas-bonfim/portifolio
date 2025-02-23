import { useEffect, useState } from 'react';
import hamburguer from '../../assets/images/header/menu-hamburguer.svg';

import { handleClickScroll } from '../handleClickScroll';
import './index.scss';

export function Header() {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)

  function handleToggleMenuMobile() {
    setMenuMobileOpen(!menuMobileOpen)
  }

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setMenuMobileOpen(!menuMobileOpen);
    }
  }, [window.innerWidth])

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