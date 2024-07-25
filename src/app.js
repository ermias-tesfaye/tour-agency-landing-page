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

  

  // Function to initialize the animations
  function initAnimations() {
    const box = document.querySelector('.box');
    const leftBox = document.querySelector('.left-box');
    const centerBox = document.querySelector('.center-box');

    gsap.fromTo(
      box,
      { x: '20%' }, // Start position (off the screen to the right)
      {
        x: '0%', // End position (its normal position)
        duration: 1,
        markers: true,
        scrollTrigger: {
          trigger: box, // The element that triggers the animation
          start: 'top 65%', // When the top of the box hits 70% of the viewport height
          end: 'top 40%', // When the top of the box hits 60% of the viewport height
          scrub: true, // Smoothly animate on scroll
        },
      }
    );

    gsap.fromTo(
      leftBox,
      { x: '-20%' }, // Start position (off the screen to the left)
      {
        x: '0%', // End position (its normal position)
        duration: 1,
        scrollTrigger: {
          trigger: leftBox, // The element that triggers the animation
          start: 'top 65%', // When the top of the box hits 70% of the viewport height
          end: 'top 40%', // When the top of the box hits 60% of the viewport height
          scrub: true, // Smoothly animate on scroll
        },
      }
    );

    gsap.fromTo(
      centerBox,
      { y: '20%' }, // Start position (off the screen to the bottom)
      {
        y: '0%', // End position (its normal position)
        duration: 1,
        markers: true,
        scrollTrigger: {
          trigger: centerBox, // The element that triggers the animation
          start: 'top 65%', // When the top of the box hits 70% of the viewport height
          end: 'top 40%', // When the top of the box hits 60% of the viewport height
          scrub: true, // Smoothly animate on scroll
        },
      }
    );
  }

  // Function to kill all ScrollTrigger instances
  function killAnimations() {
    gsap.killTweensOf('.box, .left-box, .center-box');
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }

  // Check the screen size and initialize or kill animations accordingly
  function checkScreenSize() {
    if (window.matchMedia('(min-width: 850px)').matches) {
      initAnimations();
    } else {
      killAnimations();
    }
  }

  // Initial check
  checkScreenSize();

  // Listen for window resize events to enable/disable the animations dynamically
  window.addEventListener('resize', checkScreenSize);

  // const box = document.querySelector('.box');
  // const leftBox = document.querySelector('.left-box');
  // const centerBox = document.querySelector('.center-box');

  // gsap.fromTo(
  //   box,
  //   { x: '20%' }, // Start position (off the screen to the right)
  //   {
  //     x: '0%', // End position (its normal position)
  //     duration: 1,
  //     markers: true, // Duration of the animation
  //     scrollTrigger: {
  //       trigger: box, // The element that triggers the animation
  //       start: 'top 70%', // When the top of the box hits 80% of the viewport height
  //       end: 'top 60%', // When the top of the box hits 60% of the viewport height
  //       scrub: true,
  //         // Smoothly animate on scroll
  //     },
  //   }
  // );

  //   gsap.fromTo(
  //     leftBox,
  //     { x: '-20%' }, // Start position (off the screen to the right)
  //     {
  //       x: '0%', // End position (its normal position)
  //       duration: 1,
  //       // Duration of the animation
  //       scrollTrigger: {
  //         trigger: box, // The element that triggers the animation
  //         start: 'top 70%', // When the top of the box hits 80% of the viewport height
  //         end: 'top 60%', // When the top of the box hits 60% of the viewport height
  //         scrub: true,
  //          // Smoothly animate on scroll
  //       },
  //     }
  //   );

  // gsap.fromTo(
  //   centerBox,
  //   { y: '20%' }, // Start position (off the screen to the right)
  //   {
  //     y:'0%', // End position (its normal position)
  //     duration: 1,
  //     markers: true, // Duration of the animation
  //     scrollTrigger: {
  //       trigger: box, // The element that triggers the animation
  //       start: 'top 70%', // When the top of the box hits 80% of the viewport height
  //       end: 'top 60%', // When the top of the box hits 60% of the viewport height
  //       scrub: true, // Smoothly animate on scroll
  //     },
  //   }
  // );

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
