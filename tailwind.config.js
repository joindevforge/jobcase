/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'Founders':[ 'Founders Grotesk ','sans-sarif'],
        "Inter":['Inter', 'sans-serif'],
        "cond" :['Founders Grotesk X-Condensed','sans-sarif']

      },
      colors:{
        "blue":"#2c04bd"
      }
    },
  },
  plugins: [],
}
