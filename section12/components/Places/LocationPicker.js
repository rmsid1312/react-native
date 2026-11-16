import { View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";

export default function LocationPicker() {
  function getLocationHandler() {}
  function pickOnMapHandler() {}
  return (
    <View>
      <View className="items-center justify-center w-full my-2 h-52 bg-primary100 rounded-xl"></View>
      <View className="flex-row items-center justify-around">
        <OutlinedButton icon="location">Locate User</OutlinedButton>
        <OutlinedButton icon="map">Pick on map</OutlinedButton>
      </View>
    </View>
  );
}
