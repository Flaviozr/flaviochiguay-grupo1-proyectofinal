/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Asegúrate de que las rutas sean correctas para tu proyecto
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-out": "slide-in-out 3s ease-in-out",
      },
      keyframes: {
        "slide-in-out": {
          "0%, 100%": { transform: "translateY(-20px)", opacity: "0" },
          "10%, 90%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
