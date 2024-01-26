import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'theme': '0px 20px 30px rgba(0, 101, 175, 0.2)'
      },
      boxShadow: {
        'card': '0 35px 60px -15px rgba(119, 101, 243, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-light": "#0065af",
        "primary-dark": "#001a2f"
      }
    },
  },
  plugins: [],
}
export default config
