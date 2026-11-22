import { Image, ScrollView, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { useEffect } from "react";

export default function PlaceDetails({ route }) {
  function showOnMapHandler() {}

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {}, [selectedPlaceId]);
  return (
    //className="items-center"
    <ScrollView>
      <Image className="h-1/3 min-h-[300] w-full" />
      <View className="items-center justify-center">
        <View className="p-5">
          <Text className="text-lg text-center text-primary500 text-bold">
            Address
          </Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}
