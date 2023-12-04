import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const createRoutineMachineLayer = (props) => {
  const { waypoints } = props;

  const instance = L.Routing.control({
    waypoints,
    lineOptions: {
      addWaypoints: false,
      draggableWaypoints: false,
    },
    language: "pt-BR",
   
  });

  if (instance != null) {
    instance.spliceWaypoints(0, 2);
  }

  console.log(instance);
  return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
