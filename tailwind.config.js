module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    
    screens:{
      'mobile': '320px',
      'tablet': '481px',
      'desktop': '830px',
    },
    extend: {
      margin: {
        '355px': '355px',
        '30px': '30px',
        '96px':'96px'

      }
    },
  },
  plugins: [],
}
