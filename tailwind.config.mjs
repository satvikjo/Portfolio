/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#c561f6',
          DEFAULT: '#7611a6',
          dark: '#1c0056',
        },
        secondary: {
          light: '#61dafb',
          DEFAULT: '#2563eb',
          dark: '#1e40af',
        },
        dark: {
          100: '#141925',
          200: '#0f172a',
          300: '#090b11',
        },
        light: {
          100: '#f3f4f7',
          200: '#e3e6ee',
          300: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
        brand: ['Rubik', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};