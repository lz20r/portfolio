/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sketch': ['Comic Sans MS', 'Kalam', 'Patrick Hand', 'Caveat', 'cursive'],
        'handwriting': ['Kalam', 'Patrick Hand', 'Caveat', 'Comic Sans MS', 'cursive'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'sketch-draw': 'sketch-draw 0.8s ease-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        'sketch-draw': {
          '0%': { 
            strokeDasharray: '0 100',
            opacity: '0' 
          },
          '100%': { 
            strokeDasharray: '100 0',
            opacity: '1' 
          },
        }
      },
      borderRadius: {
        'sketch': '15px 25px 20px 30px / 25px 15px 30px 20px',
        'sketch-sm': '8px 12px 10px 15px / 12px 8px 15px 10px',
        'sketch-lg': '25px 35px 30px 40px / 35px 25px 40px 30px',
      },
      boxShadow: {
        'sketch': '3px 3px 0px 0px rgba(0,0,0,0.3), 6px 6px 0px 0px rgba(59,130,246,0.2)',
        'sketch-lg': '5px 5px 0px 0px rgba(0,0,0,0.3), 10px 10px 0px 0px rgba(139,92,246,0.2)',
        'sketch-colored': '4px 4px 0px 0px rgba(59,130,246,0.6), 8px 8px 0px 0px rgba(139,92,246,0.4)',
        'sketch-dark': '3px 3px 0px 0px rgba(255,255,255,0.2), 6px 6px 0px 0px rgba(59,130,246,0.3)',
        'sketch-lg-dark': '5px 5px 0px 0px rgba(255,255,255,0.2), 10px 10px 0px 0px rgba(139,92,246,0.3)',
        'sketch-colored-dark': '4px 4px 0px 0px rgba(59,130,246,0.8), 8px 8px 0px 0px rgba(139,92,246,0.6)',
      },
      backgroundImage: {
        'paper': 'radial-gradient(circle at 20% 50%, rgba(120,119,198,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,119,198,0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120,219,255,0.1) 0%, transparent 50%)',
        'paper-dark': 'radial-gradient(circle at 20% 50%, rgba(59,130,246,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.2) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(236,72,153,0.2) 0%, transparent 50%)',
        'doodle': "url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"%3E%3Cpath d=\"m20,20 Q30,10 40,20 T60,20 T80,20\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1\" fill=\"none\"/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
