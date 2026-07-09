import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0f172a',
        'primary-light': '#1e293b',
        'accent-orange': '#f97316',
        'accent-blue': '#0ea5e9',
        'accent-cyan': '#06b6d4',
        'accent-purple': '#a855f7',
        'success-green': '#22c55e',
        'warning-yellow': '#eab308',
        'danger-red': '#ef4444',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
