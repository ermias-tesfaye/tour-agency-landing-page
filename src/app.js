import Lenis from 'lenis';

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.gsap-text', {
    opacity: 0,
    y: 100,
    duration: 1,
  });

  gsap.from('.gsap-p', {
    opacity: 0,
    y: 100,
    duration: 1.3,
  });

  gsap.from('.gsap-b', {
    opacity: 0,
    y: 100,
    duration: 1.5,
  });

  gsap.from('.gsap-h', {
    opacity: 0,
    y: -100,
    duration: 1.5,
  });

  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const year = new Date();
  document.querySelector('#year').textContent = year.getFullYear();

  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', function () {
    mobileMenu.style.display = 'flex';
  });

  closeMenu.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
  });
});
