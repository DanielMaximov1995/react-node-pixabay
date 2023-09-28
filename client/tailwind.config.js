/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        xxl : '1650px'
      },
      extend: {
        colors : {
          primary: '#ffd426',  
        secondary: '#26c6ff',
        accent: '#ff5722',   
        success: '#4caf50',  
        danger: '#f44336',   
        warning: '#ff9800',  
        info: '#2196f3',     
        dark: '#333',
        }
      }
  },
  plugins: [],
}

