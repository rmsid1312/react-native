import {
  Accuracy,
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { Alert, Image, Text, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { useState } from "react";
import { getMapPreview } from "../../util/location";

export default function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app.",
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    try {
      const location = await getCurrentPositionAsync({
        accuracy: Accuracy.High,
      });
      console.log(location);
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (error) {
      Alert.alert(
        "Location unavailable",
        "Please turn on location services (GPS) and try again.",
      );
    }
  }

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        source={{
          uri: getMapPreview(pickedLocation),
        }}
        className="w-full h-full"
      />
    );
  }

  function pickOnMapHandler() {}
  return (
    <View>
      <View className="items-center justify-center w-full my-2 overflow-hidden h-52 bg-primary100 rounded-xl">
        {locationPreview}
      </View>
      <View className="flex-row items-center justify-around">
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map">Pick on map</OutlinedButton>
      </View>
    </View>
  );
}
