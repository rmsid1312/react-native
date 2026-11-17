import { useCallback, useLayoutEffect, useState } from "react";
import { Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

export default function Map({ navigation }) {
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

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No location picked", "You have to pick a location first!");
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

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
