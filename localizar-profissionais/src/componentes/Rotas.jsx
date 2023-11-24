import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// const routing = ({ pointBLat, pointBLng }) => {
//   const createRoutineMachineLayer = () => {
    
//     const instance = L.Routing.control({
//       waypoints: [
//         L.latLng(-8.095500365761255, -34.911881534373244), 
//         L.latLng(pointBLat, pointBLng)
//       ],
//     });
//     return instance;
//   };  
//  const RoutingMachine = createControlComponent(createRoutineMachineLayer);
//  return <RoutingMachine />
// }

// export default routing



// const createRoutineMachineLayer = () => {
  
//   const instance = L.Routing.control({ 
//     waypoints: [
//       L.latLng(-8.095500365761255, -34.911881534373244), 
//       L.latLng(-8.121001691028944, -34.914051191947905)
//     ],
//   });
//   return instance;
// };  
// const RoutingMachine = createControlComponent(createRoutineMachineLayer);
// export default RoutingMachine



const createRoutineMachineLayer = (props) => {
  const { waypoints } = props;
  const instance = L.Routing.control({
    waypoints
  });

  return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine