import { useStore } from "../scripts/controlador-estados";
export default function DistanciaInKM() {
  const { data, origem } = useStore();
  function distanciaCoord() {
    "use strict";
    {
      data.map((clinic) => {
        const position1 = { lat: origem[0], lng: origem[1] };
        const position2 = { lat: [clinic.lat], lng: [clinic.long] };

        var deg2rad = function (deg) {
            return deg * (Math.PI / 180);
          },
          R = 6371,
          dLat = deg2rad(position2.lat - position1.lat),
          dLng = deg2rad(position2.lng - position1.lng),
          a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(position1.lat)) *
              Math.cos(deg2rad(position1.lat)) *
              Math.sin(dLng / 2) *
              Math.sin(dLng / 2),
          c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distancia = [(R * c * 1000).toFixed() / 1000];
        return distancia;
      });
    }
  }
  console.log(distanciaCoord()); //(
  // {lat: -8.062427658998855, lng: -34.890897335075586}
  //));
}
