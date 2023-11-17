import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";


const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(-8.1428754,-34.9112595),
      L.latLng(-8.0809241,-34.9525175)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  
    
  });
  instance.on('routesfound', function(e){
    var routes = e.routes;
    var summary = routes[0].summary;
    console.log('distância ' + summary.totalDistance / 1000 + ' km e ' + Math.round(summary.totalTime % 3600 / 60) + ' minutos');
 });
  return instance;
};

  
  const RoutingMachine = createControlComponent(createRoutineMachineLayer)

  



export default RoutingMachine;