const refs = {
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
};

export const mobileMenu = () => {
  const toggleMenu = () => {
    const isMenuOpen = refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.mobileMenu.classList.toggle('is-open');
    const menu = document.querySelector('.mobile-menu__container');

    if (isMenuOpen) {
      bodyScrollLock.enableBodyScroll(menu);
    } else {
      bodyScrollLock.disableBodyScroll(menu);
    }
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1575px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.mobileMenu.classList.remove('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
};
