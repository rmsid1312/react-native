import { FlatList, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

export default function PlaceList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View className="items-center justify-center flex-1">
        <Text className="text-xl text-primary200">
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      className="m-6"
      data={places}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
}
