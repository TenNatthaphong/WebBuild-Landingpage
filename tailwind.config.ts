import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#66bb6a',
          500: '#43a047',
          600: '#2e7d32',
          700: '#1b5e20',
          800: '#145214',
          900: '#0d3b0d',
        },
        pink: {
          50:  '#fff0f6',
          100: '#fce4ec',
          200: '#f8bbd0',
          300: '#f48fb1',
          400: '#f06292',
          500: '#e91e63',
          600: '#c2185b',
          700: '#ad1457',
          800: '#880e4f',
        },
      },
      animation: {
        blob:           'blob 14s infinite ease-in-out',
        'blob-slow':    'blob 20s infinite ease-in-out',
        marquee:        'marquee 28s linear infinite',
        'gradient-x':   'gradient-x 8s ease infinite',
        float:          'float 4s ease-in-out infinite',
        'float-slow':   'float 6s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'pulse-green':  'pulse-green 2s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '25%':     { transform: 'translate(40px,-60px) scale(1.08)' },
          '50%':     { transform: 'translate(-30px,25px) scale(0.92)' },
          '75%':     { transform: 'translate(55px,15px) scale(1.04)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-x': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        'pulse-green': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(67,160,71,0.4)' },
          '50%':     { boxShadow: '0 0 0 12px rgba(67,160,71,0)' },
        },
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
}
export default config
