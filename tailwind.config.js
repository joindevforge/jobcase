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
        "cond" :['Founders Grotesk X-Condensed','sans-sarif'],
        'FoundersA':[ 'Founders Grotesk ','sans-sarif','Arial'],

      },
      colors:{
        "bluee":"#2c04bd",
        "indigo":"#c4b5fd"
      },
      screens:{
        "lg":"1440px",
        "md":"1024px",
        "md2":"1281px",
        "sm":"832px"
      }
    },
  },
  plugins: [],
}
