/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs:"320px",
        sm:"500px",
        sd:"770px",
        md:"900px",
        lg:"1120px",
      },
      fontFamily:{
        poppins:["Arial","sans-serif"]
      },
      colors:{
        home:"#FCD469",
        feature:"#9BAED9",
        back:"#EFEFEF",
        footer:"#292D33",
        sidebar:"#1E293D",
      }
    },
  },
  plugins: [],
}