/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-purple": "#714aff",
        "background-primary" : "#f0f4fb",
        "pBlue": "#5f6a8f",
        "project-overlay": "rgba(0, 0, 0, .7)",
      }
    },
    screens: {
      "sm": "497px",
      "md": "767px",
      "lg": "991px"
    }
  },
  plugins: [],
}
