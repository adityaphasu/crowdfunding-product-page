/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
        "dark-gray": "hsl(0, 0%, 46%)",
        "off-white": "hsla(0,0%,98%,1)",
      },
      gradientColorStops: {
        blackish: ["hsla(270,5%,7%,0.7)"],
      },
      backgroundImage: {
        "hero-mobile": 'url("/src/assets/image-hero-mobile.jpg")',
        "hero-desktop": 'url("/src/assets/image-hero-desktop.jpg")',
      },
    },
  },
  plugins: [],
};
