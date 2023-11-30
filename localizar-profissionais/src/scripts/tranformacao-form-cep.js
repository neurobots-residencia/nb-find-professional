// import { useStore } from "../scripts/controlador-estados";

const apiKey = '1e469ea4b5d9425c9bbe2b158852c80d';

export const LatLongFromCep = (cep) => {
  // const { armazenaOrigem } = useStore();

  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cep}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const { lat, lng } = data.results[0].geometry;  
    // armazenaOrigem(lat ,lng)
  })
  .catch(error => {
    console.error('Erro ao obter dados de geolocalização:', error);
  });
}