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
        deepBlue: '#14213d',
        gold: '#fca311',
        tertiary: '#4a5568',
        platinum: '#E5E5E5',
    },
  },
  plugins: [],
}
}
