import { MapContainer, Popup, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useStore } from "../scripts/controlador-estados";
import { icon } from "leaflet";
import RoutingMachine from "./Rotas";
import { useRef } from "react";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 12.5);
}
export default function Map() {
  const { data, origem, destino } = useStore();
  const rMachine = useRef(null);
  const pointsToUse = [origem, destino];  

  return (
    <MapContainer
      id="mapa"
      style={{ position: "relative", width: "100%", height: "100%" }}
      center={origem}
      zoom={12.5}
      scrollWheelZoom={false}
      dragging={false}
    >
      <ChangeView center={origem} zoom={12.5} /> 
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((clinic, index) => {
        return (
          <>
            <Marker
              alt={`marcador${index}`}
              key={index}
              position={[parseFloat(clinic.long), parseFloat(clinic.lat)]}
              icon={
                new icon({
                  iconUrl:
                    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
                  shadowUrl:
                    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41],
                })
              }
              eventHandlers={{
                click: () => {
                  rMachine.current.setWaypoints(pointsToUse);
                },
              }}
            >
              <Popup>{clinic.clinica}</Popup>
            </Marker>
          </>
        );
      })}
      <RoutingMachine ref={rMachine} waypoints={pointsToUse} />
    </MapContainer>
  );
}
