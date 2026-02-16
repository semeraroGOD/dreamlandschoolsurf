const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links--open');
    if (navLinks.classList.contains('nav-links--open')) {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = 'rgba(5, 26, 29, 0.95)';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '4rem';
      navLinks.style.right = '1rem';
      navLinks.style.padding = '1rem 1.5rem';
      navLinks.style.borderRadius = '1rem';
      navLinks.style.gap = '1rem';
    } else {
      navLinks.removeAttribute('style');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.removeAttribute('style');
      navLinks.classList.remove('nav-links--open');
    }
  });
}
