/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        down: {
          '100%' : { transform: 'translateY(0)' },
        },
        upLight: {
          '0%, 100%' : { transform: 'translateY(0)' },
          '50%': { 
            transform: 'translateY(-10px)', 
            'box-shadow': '0 10px 20px rgba(0, 0, 0, 0.5)',
          },
        },
        upDark: {
          '0%, 100%' : { transform: 'translateY(0)' },
          '50%': { 
            transform: 'translateY(-10px)', 
            'box-shadow': '0 10px 20px rgba(155, 155, 155, 0.5)',
          },
        },
        wiggle: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
        fromLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
        },
        fromRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  darkMode: 'class',
}
