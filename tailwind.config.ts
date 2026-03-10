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
          // Natural forest green palette
          50:  '#f1f7ee',
          100: '#dcefd4',
          200: '#b8dca8',
          300: '#8ac47c',
          400: '#5aaf48',   // main accent — natural green
          500: '#3d8a2a',
          600: '#2a6b1a',   // primary CTA — deep forest green
          700: '#1d4d12',
          800: '#12330a',
          900: '#0a1e06',
        },
        earth: {
          // Moss / sage green
          50:  '#f3f7f1',
          100: '#e0ecda',
          200: '#c1d9b4',
          300: '#96be88',
          400: '#6ba05c',
          500: '#4c803e',
          600: '#38612d',
          700: '#284620',
          800: '#1a2e15',
          900: '#0f1c0c',
        },
        stone: {
          // Cool stone — slightly green-tinted
          50:  '#f6f8f5',
          100: '#edf1ea',
          200: '#dae3d5',
          300: '#bfcfb8',
          400: '#9db494',
          500: '#7b9672',
          600: '#5e7658',
          700: '#455740',
          800: '#2d3a2a',
          900: '#1a2218',
        },
        zinc: {
          // inverted scale: low = dark, high = light backgrounds
          // cool sage-tinted palette
          50:  '#0c0f0b',
          100: '#181e16',   // main text on light bg
          200: '#262e23',
          300: '#374033',
          400: '#505c4a',
          500: '#6e7a67',
          600: '#8e9a86',
          700: '#b0baa8',
          800: '#cfd8c8',   // card bg, borders
          900: '#e4ebe0',   // alternating section bg
          950: '#f0f5ee',   // main page bg (light sage)
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
