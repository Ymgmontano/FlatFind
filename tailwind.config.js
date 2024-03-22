/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flatfind-blue': '#007bff',
        'flatfind-gray': '#f8f9fa',
        'flatfind-dark': '#343a40',
        'flatfind-light': '#e2e6ea',
        'flatfind-primary': '#563d7c',
        'flatfind-accent': '#ff385c',
      },
    },
  },
  plugins: [],
}