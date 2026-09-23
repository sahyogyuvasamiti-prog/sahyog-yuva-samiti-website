/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        ink: '#0E2545',
        navy: {
          50: '#EEF3FA',
          100: '#D6E1F0',
          600: '#1B3F6E',
          700: '#16355F',
          900: '#0E2545',
        },
        saffron: {
          50: '#FDF1EA',
          200: '#F7C4A7',
          500: '#E4611F',
          600: '#C74F13',
        },
        leaf: {
          50: '#EAF5EF',
          500: '#1B7D48',
          600: '#136036',
        },
        cream: '#FBF7F0',
        sand: '#EFE7DA',
        slateink: '#54637D',
      },
      fontFamily: {
        // display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // deva: ['"Tiro Devanagari Hindi"', 'serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        deva: ['"Tiro Devanagari Hindi"', 'serif'],
      },
      boxShadow: {
        lift: '0 18px 40px -24px rgba(14, 37, 69, 0.45)',
        edge: '0 1px 0 0 rgba(14,37,69,0.06)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
