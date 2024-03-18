/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text01: '#111729',
        text02: '#909193',
        textButton: '#FFFFFF',
        backg: '#F2F9FE',
        green01: '#4CA154',
        blue01: '#2A4DD0',
        gray01: '#223344'
      }
    },
  },
  plugins: [],
}

