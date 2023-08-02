/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#D87D4A',
        'black-near': '#101010',
        'orange-pale': '#fbaf85',
        'gray-base': '#F1F1F1',
        'gray-dark': '#4C4C4C',
        'gray-light': '#FAFAFA',
        'red-primary': '#CD2C2C',
        'black-opaque': 'rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'circle-pattern': "url('/home/desktop/pattern-circles.svg')",
        'speaker-banner-mobile': "url('/home/mobile/image-speaker-zx7.jpg')",
        'speaker-banner-tablet': "url('/home/tablet/image-speaker-zx7.jpg')",
        'speaker-banner-desktop': "url('/home/desktop/image-speaker-zx7.jpg')",
      },
    },
    screens: {
      md: '768px',
      lg: '1200px',
    },
  },
  plugins: [],
}
