import Lenis from 'lenis';

document.addEventListener('DOMContentLoaded', function () {

  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
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
