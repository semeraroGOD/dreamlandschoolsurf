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

// Scroll reveal animations
const animatedSections = document.querySelectorAll('[data-animate]');
if (animatedSections.length > 0) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedSections.forEach(section => observer.observe(section));
}

// Auto slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dots button');
let currentSlide = 0;
let sliderInterval;

const goToSlide = index => {
  if (!slides.length) return;
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
};

const startSlider = () => {
  if (slides.length <= 1) return;
  sliderInterval = setInterval(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }, 6000);
};

if (slides.length) {
  goToSlide(0);
  startSlider();
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      if (sliderInterval) {
        clearInterval(sliderInterval);
        startSlider();
      }
    });
  });
}
