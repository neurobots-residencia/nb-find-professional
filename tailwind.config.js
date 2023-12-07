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
        'xm': {'min': '350px', 'max': '575px'},
        'xm': {'min': '374px', 'max': '575px'},
        'sm': {'min': '576px', 'max': '767px'},
        'md': {'min': '768px', 'max': '991px'},
        'lg': {'min': '992px', 'max': '1199px'},
        'xl': {'min': '1200px'},
      },
      spacing:{
        xmHeightLocalizacao:'600px',
        xmHeightPaciente:'720px',
        xmFundoCard: '400px',
        smFundoCard: '550px',
        fundoCard: '580px',
        cardPac: '600px',
        card: '400px'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        corAzul: '#556cd6',
        azulEscuro: '#465cc1'
      }
    },
  },
  plugins: [],

}

