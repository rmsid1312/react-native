import { FlatList, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

export default function PlaceList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View className="items-center justify-center flex-1">
        <Text className="text-xl">
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
}
