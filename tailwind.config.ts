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
          // Claude Code warm amber / copper palette
          50:  '#fdf6ee',
          100: '#f9e5cc',
          200: '#f2c89a',
          300: '#e7a362',
          400: '#d47830',   // main accent — warm amber
          500: '#b05e18',
          600: '#864410',   // primary CTA — deep terracotta
          700: '#60300a',
          800: '#3e1e06',
          900: '#251203',
        },
        earth: {
          50:  '#fdf7f0',
          100: '#f7e8d4',
          200: '#ecd0a8',
          300: '#dbb07a',
          400: '#c78e50',
          500: '#a56e34',
          600: '#7e5122',
          700: '#5c3a16',
          800: '#3b250c',
          900: '#221506',
        },
        stone: {
          // warm stone — slightly amber-tinted
          50:  '#faf8f5',
          100: '#f2ede6',
          200: '#e5ddd2',
          300: '#cfc5b5',
          400: '#b0a490',
          500: '#8e8270',
          600: '#6e6253',
          700: '#514939',
          800: '#342f24',
          900: '#1d1a14',
        },
        zinc: {
          // inverted scale: low = dark (text), high = light (backgrounds)
          // warm beige / washi-paper palette
          50:  '#0e0c09',
          100: '#1c1a14',   // main text on light bg
          200: '#2c2920',
          300: '#40392e',
          400: '#5c5448',
          500: '#7c7268',
          600: '#9c9288',
          700: '#bcb4a8',
          800: '#d8d0c4',   // card bg, borders
          900: '#ebe6dc',   // alternating section bg
          950: '#f5f0e6',   // main page bg (warm cream)
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
