export function handleClickScroll(item: 'home' | 'about' | 'experiences' | 'projects') {
  const element = document.getElementById(item);
  if (element) {
    const headerHeight = document.querySelector('.header-desktop')?.clientHeight || 0;
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: offsetTop - headerHeight, behavior: 'smooth' });
  }

}