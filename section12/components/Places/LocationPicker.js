import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { Alert, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";

export default function LocationPicker() {
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
      const location = await getCurrentPositionAsync();
      console.log(location);
    } catch (error) {
      Alert.alert(
        "Location unavailable",
        "Please turn on location services (GPS) and try again.",
      );
    }
  }

  function pickOnMapHandler() {}
  return (
    <View>
      <View className="items-center justify-center w-full my-2 h-52 bg-primary100 rounded-xl"></View>
      <View className="flex-row items-center justify-around">
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map">Pick on map</OutlinedButton>
      </View>
    </View>
  );
}
