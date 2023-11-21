import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";

const routing = ({ pointBLat, pointBLng }) => {
  const createRoutineMachineLayer = () => {
    
    const instance = L.Routing.control({
      waypoints: [
        L.latLng(-8.095500365761255, -34.911881534373244), 
        L.latLng(pointBLat, pointBLng)
      ],
    });
    return instance;
  };  
 const RoutingMachine = createControlComponent(createRoutineMachineLayer);
 return <RoutingMachine />
}

export default routing