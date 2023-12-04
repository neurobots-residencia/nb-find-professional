export const getDistance = ({ position, destination }) => {
  const deg2rad = (val) => val * (Math.PI / 180);

  const radius = 6371;

  const dLat = deg2rad(destination.lat - position.lat);
  const dLng = deg2rad(destination.lng - position.lng);

  const auxDistance =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(position.lat)) *
      Math.cos(deg2rad(position.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(auxDistance), Math.sqrt(1 - auxDistance));
  const distancia = (radius * c);
  return distancia
};


export function convertLength(length) {
  if (length >= 1000) {
    // Convert to kilometers
    const kilometers = length / 1000;
    return `${kilometers.toFixed(3)} km`;
  } else {
    // Convert to meters
    return `${length.toFixed(3)} m`;
  }
}