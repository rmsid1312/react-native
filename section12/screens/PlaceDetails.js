import { Image, ScrollView, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { useEffect, useState } from "react";
import { fetchPlaceDetails } from "../util/database";

export default function PlaceDetails({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState();

  function showOnMapHandler() {
    navigation.navigate("Map", {
      initialLat: fetchedPlace.location.lat,
      initialLng: fetchedPlace.location.lng,
    });
  }

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
    }
    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchedPlace) {
    return (
      <View className="items-center justify-center flex-1">
        <Text className="text-primary200">Loading place data...</Text>
      </View>
    );
  }

  return (
    //className="items-center"
    <ScrollView>
      <Image
        className="h-1/3 min-h-[300] w-full"
        source={{ uri: fetchedPlace.imageUri }}
      />
      <View className="items-center justify-center">
        <View className="p-5">
          <Text className="text-lg text-center text-primary500 text-bold">
            {fetchedPlace.address}
          </Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}
