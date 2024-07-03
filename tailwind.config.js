/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        padding:"20px",
        width:"1200px",
        margin:true,
      }
    },
  },
  plugins: [],
}