/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'neuroback': "url('../public/assets/neurobots_background.jpeg')",
        'google-maps': "url('../public/assets/google_image.png')",
        'telaInicial': "url('../public/assets/fundoTelaInicial.jpg')"
      },

      screens: {
        'sm': {'min': '576px', 'max': '767px'},
        'md': {'min': '768px', 'max': '991px'},
        'lg': {'min': '992px', 'max': '1199px'},
        'xl': {'min': '1200px'},
      }
      
    },
  },
  plugins: [],
}

