import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(-8.1428754,-34.9112595),
      L.latLng(-8.0809241,-34.9525175)
    ],
    
  });

  return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;