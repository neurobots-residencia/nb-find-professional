import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";

const createRoutineMachineLayer = (latDestino, longDestino) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(8.1428754,-34.9112595),
      L.latLng(latDestino, longDestino)
    ],
    
  });

  return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;