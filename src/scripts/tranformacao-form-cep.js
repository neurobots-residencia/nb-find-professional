const apiKey = '1e469ea4b5d9425c9bbe2b158852c80d';

const latLongFromCep = (cep) => {
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cep}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const { lat, lng } = data.results[0].geometry;
      var origem = [lat, lng]
      console.log(origem)
    })
    .catch(error => {
      console.error('Erro ao obter dados de geolocalização:', error);
    });
}

export default latLongFromCep