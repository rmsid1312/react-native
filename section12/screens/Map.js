import { useState } from "react";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState();
  const region = {
    latitude: 37.26,
    longitude: 127.02,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selecLocationHandler(event) {
    console.log(event);
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  }
  return (
    <MapView
      initialRegion={region}
      className="flex-1"
      onPress={selecLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}
