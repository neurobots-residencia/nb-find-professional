import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useStore } from "../scripts/controlador-estados";
import * as turf from '@turf/turf'
import {icon} from 'leaflet'
import RoutingMachine from "./Rotas"
import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";

// const mapBoxApiKey = 'pk.eyJ1IjoiYXJ0dXJwYXoiLCJhIjoiY2xvOHhrYWdlMDQ2YzJqbnY0dHF6czljbSJ9.P8Gfn_n1_abgrFm4ygkcSg'

// import 'leaflet-routing-machine'

// L.Routing.Mapbox({
//   waypoints: [
//     L.latLng(57.74, 11.94),
//     L.latLng(57.6792, 11.949)   
//   ],
//   router: L.Routing.mapbox(`${mapBoxApiKey}`)
// }).addTo(MapContainer);
/*var from = turf.point([23,702222 - 22,903333]);
  var to = turf.point([-46,658889 - -46,666667]);
    var options = {units: 'miles'};
    
    var distance = turf.distance(from, to, {units: 'kilometers'});
    console.log(distance.toFixed(2));*/
    // fórmula da distância entre duas coordenadas.

export default function Map() {

  const { idMarcador, setMarkerId } = useStore();

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
      style={{ position: "relative" , width: "100%", height: "100%  "}}
      center={[-8.1428754,-34.9112595]}
      zoom={12.5}
      scrollWheelZoom={true}
    >
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {data.map((clinic, index) => {
        
  
      <RoutingMachine/>
        
        if (true) {
          return (
            <>
              <RoutingMachine origin="teste" destination="teste2" />
              <Marker
              key={index}
              position={[parseFloat(clinic.long), parseFloat(clinic.lat)]}
              icon= {
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
                click: (event) => {
                  console.log(index)
                  setMarkerId(index)
                }
              }}
              >
                <Popup>{clinic.clinica}</Popup>
              </Marker>
              
            </>
          );
          
        }
      })}
   
     
    </MapContainer>
   
    );
}
