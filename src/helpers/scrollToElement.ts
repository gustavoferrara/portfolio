const scrollToElement = (element: Element | string) => {
  if (typeof element === 'string') {
    element = document.querySelector(`#${element}`)!;
    if (!element) return;
  }

  const desktopNavbar = window.innerWidth >= 1000;

  const navbarOffset = desktopNavbar ? 60 : 60;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - navbarOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export default scrollToElement;
