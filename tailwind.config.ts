import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f4f8f5',
          100: '#e3ede6',
          200: '#c8dbcb',
          300: '#a2c2a8',
          400: '#75a37e',
          500: '#4e835a',
          600: '#3d6b4a',   // primary CTA
          700: '#2f5438',
          800: '#274430',
          900: '#1e3525',
        },
        earth: {
          50:  '#faf8f5',
          100: '#f0ebe2',
          200: '#dfd6c8',
          300: '#c4b49a',
          400: '#a8926e',
          500: '#8b7350',
          600: '#6e5b3d',
          700: '#53452e',
          800: '#3a2f1f',
          900: '#231c12',
        },
        stone: {
          // override for warmer stone
          50:  '#faf9f7',
          100: '#f3f1ed',
          200: '#e8e4dc',
          300: '#d4cfc5',
          400: '#b5afa3',
          500: '#948f83',
          600: '#736d62',
          700: '#55514a',
          800: '#38352f',
          900: '#1e1c18',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}

export default config
