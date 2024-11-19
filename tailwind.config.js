/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: { 
        lightCyan: "hsl(193, 38%, 86%)", 
        neonGreen: "hsl(150, 100%, 66%)",
        grayishBlue: "hsl(217, 19%, 38%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)"
       },
       fontFamily: {
        Manrope: "Manrope"
       },
       boxShadow: {
        'glow-blue': '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6)', 
       'glow-green': '0 0 10px rgba(34, 197, 94, 0.8), 0 0 25px rgba(34, 197, 94, 0.6)',
      },
      
    plugins: [],
  },
}
}
