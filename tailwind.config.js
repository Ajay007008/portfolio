/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shadowPulse: 'shadowPulse 2s infinite',
      },
      keyframes: {
        shadowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 0px rgba(99, 102, 241, 0.6)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(99, 102, 241, 0.9)',
          },
        },
      },
    },
  },
};




