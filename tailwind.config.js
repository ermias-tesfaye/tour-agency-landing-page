/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/images/img.jpg')",
        gondar: "url('/images/gondar.jpg')",
        addis: "url('/images/addis.jpg')",
        abay: "url('/images/abay.jpg')",
        afar: "url('/images/afar.jpg')",
        lalibela: "url('/images/lalibela.jpg')",
        arbaminch: "url('/images/arbaminch.webp')",
        harar: "url('/images/harar.webp')",
        aksum: "url('/images/aksum.jpg')",
        hero: "url('/images/hero.jpg')",
        hiking: "url('/images/hiking.jpg')",
        'gradient-overlay':
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),url('/images/addis.jpg')",
      },
      fontFamily: {
        main: ['Playfair Display', 'serif'],
        secondary: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
