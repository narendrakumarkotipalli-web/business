import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warmIvory: '#FFF8E7',
        softCream: '#FFFDF5',
        espresso: '#2F2923',
        oliveGreen: {
          DEFAULT: '#4F6F3A',
          hover: '#3D592D',
          light: '#EEF4EC',
        },
        forestGreen: '#3D592D',
        mustardGold: {
          DEFAULT: '#D6A21E',
          light: '#FBF5E3',
          dark: '#B08314',
        },
        chiliRed: {
          DEFAULT: '#B94732',
          light: '#FDF0ED',
          dark: '#943523',
        },
        warmTaupe: {
          DEFAULT: '#6F675D',
          light: '#8D8479',
          muted: '#A8A096',
        },
        pureWhite: '#FFFFFF',
        deepBrown: '#2F2923',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        heading: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

