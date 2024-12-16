import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D8FF76',
      },
      fontSize: {
        xs: ['12px', 'unset'],
        sm: ['14px', 'unset'],
        base: ['16px', 'unset'],
        lg: ['18px', 'unset'],
        xl: ['20px', 'unset'],
        '2xl': ['24px', 'unset'],
        '3xl': ['28px', 'unset'],
        '4xl': ['32px', 'unset'],
        '5xl': ['36px', 'unset'],
        '6xl': ['40px', 'unset'],
      },
      screens: {
        ...defaultTheme.screens,
        mobile: { max: '991.99px' },
      },
      opacity: {
        3: '0.03',
        4: '0.04',
        6: '0.06',
        8: '0.08',
        12: '0.12',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('child', '&>*')
      addVariant('child-hover', '& > *:hover')
    }),
  ],
}
export default config
