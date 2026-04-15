/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#030617',
        'neon-cyan': '#00e5ff',
        'neon-hover': '#00c4cc',
        'neon-green': '#39ff14',
      },
      boxShadow: {
        'glow': '0 0 25px rgba(0, 229, 255, 0.4)',
        'glow-sm': '0 0 15px rgba(0, 229, 255, 0.2)',
        'glow-green': '0 0 20px rgba(57, 255, 20, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
