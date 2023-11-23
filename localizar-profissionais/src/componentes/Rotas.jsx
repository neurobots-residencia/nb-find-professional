import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

const createRoutineMachineLayer = (props) => {
  const { waypoints } = props;

  const instance = L.Routing.control({
    waypoints,
    lineOptions : {
      addWaypoints: false,
      draggableWaypoints: false 
  },
    language: 'pt-BR'
  });

  if(instance != null) {
    instance.spliceWaypoints(0, 2)
  }

  console.log(instance)
  return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine