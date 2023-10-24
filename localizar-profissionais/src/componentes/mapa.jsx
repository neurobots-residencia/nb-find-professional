import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// const mapBoxApiKey = process.env.MAP_BOX_API_KEY

import * as L from 'leaflet/dist/leaflet'
// import 'leaflet-routing-machine'

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,  
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

// L.Routing.control({
//   waypoints: [
//     L.latLng(57.74, 11.94),
//     L.latLng(57.6792, 11.949)
//   ],
//   router: L.Routing.mapbox(`${mapBoxApiKey}`)
// }).addTo(App);

export default function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get("https://api-clinics.rj.r.appspot.com/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erro na solicitação: ", error);
      });
  }, []);

  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={[-8.059280072694094, -34.879632311984246]}
      zoom={12.5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((clinic, index) => (
        <Marker
          key={index}
          position={[parseFloat(clinic.long), parseFloat(clinic.lat)]}
        >
          <Popup>{clinic.clinica}</Popup>
        </Marker>
      ))}
    </MapContainer>
    );
}
