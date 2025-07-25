/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Configuración específica para Tailwind CSS v4
  experimental: {
    optimizeUniversalDefaults: true
  }
} 