/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundImg': "url('C:/Users/User/Desktop/Repos/About-Me-Website/personalportfollio/react-pp/pages/pexels-bich-tran-669996.jpg')",
      }
    },

  },
  plugins: [],
}