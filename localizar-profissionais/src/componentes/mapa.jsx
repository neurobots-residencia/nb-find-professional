import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useStore } from "../scripts/controlador-estados";
import {icon} from 'leaflet'
import RoutingMachine from "./Rotas"
import { useEffect, useState } from "react";

export default function Map() {

  const { data, fetch } = useStore();
  const [ setMap ] = useState(null);
  
  useEffect(() => {
    fetch();
  }, []);

  
  return (
    <MapContainer
      whenCreated={setMap}
      id="mapa"
      style={{ position: "relative" , width: "100%", height: "100%" }}
      center={[-8.095500365761255, -34.911881534373244]}
      zoom={12.5}
      scrollWheelZoom={true}
    >
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       {data.map((clinic, index) => {
          return (
            <>
              <RoutingMachine origin="teste" destination="teste2" />
              <Marker
                setMarkerId={index}
                key={index}
                position={[parseFloat(clinic.long), parseFloat(clinic.lat)]}
                icon={
                  new icon ({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                  })
                }
                eventHandlers={{
                  click: () => {
                    console.log(index)
                  }
                }}
              >
                <Popup>{clinic.clinica}</Popup>
              </Marker>

            </>
          )
        })
      } 
    </MapContainer> 
  )
}
