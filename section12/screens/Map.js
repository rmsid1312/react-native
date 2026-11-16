import MapView from "react-native-maps";

export default function Map() {
  const region = {
    latitude: 37.26,
    longitude: 127.02,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView initialRegion={region} className="flex-1"></MapView>;
}
