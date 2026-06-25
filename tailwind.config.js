/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1F40',
          light: '#1E5FA6',
          dark: '#051021',
        },
        secondary: {
          DEFAULT: '#1E5FA6',
          light: '#D9EAF8',
          dark: '#051021',
        },
        accent: {
          DEFAULT: '#ED1C24',
          light: '#FF5E66',
          dark: '#A80E14',
          hover: '#FF5E66',
        },
        marine: {
          navy: '#0A1F40',
          blue: '#1E5FA6',
          sky: '#D9EAF8',
          mist: '#F5F7FA',
        },
        techbg: '#040d1a',
        techcard: '#0a1f40',
        techborder: 'rgba(30, 95, 166, 0.22)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Outfit', 'sans-serif'],
        syne: ['Outfit', 'sans-serif'],
        aspekta: ['Outfit', 'sans-serif'],
        plex: ['Outfit', 'sans-serif'],
        times: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'micro': '10px',
        'tiny': '12px',
        'small': '12.8px',
        'base': '14px',
        'base-lg': '14.4px',
        'md': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '22.4px',
        '3xl': '24px',
        '4xl': '28px',
        '4xl-lg': '28.8px',
        '5xl': '30px',
        '6xl': '48px',
        '7xl': '51.2px',
        '8xl': '60.8px',
        '9xl': '68px',
        '10xl': '80px',
      },
      boxShadow: {
        'eco': 'rgba(0, 0, 0, 0.2) 0px 2px 5px 0px',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Turn off preflight to prevent conflicts with MUI
  }
}
