/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gr-very-light-red": "hsl(13, 100%, 72%)",
        "gr-light-red": "hsl(353, 100%, 62%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "text-primary": "#5E5F60",
        "gr-very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "gr-very-dark-desaturated-blue": "hsl(237, 23%, 32%)",
        "heading": "hsl(208, 49%, 24%)",
        'footerBg': 'hsl(240, 10%, 16%)'
      },
      backgroundImage: {
        "circles-pattern": "url('./images/bg-pattern-circles.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
