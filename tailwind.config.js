/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "976px",
      xl: "1300px",
    },

    fontFamily: {
      Poppins: ["Poppins", "serif"],
    },

    extend: {
      colors: {
        
    },
    },
  },
  plugins: [],
}

