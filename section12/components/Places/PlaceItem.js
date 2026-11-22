import { Image, Pressable, Text, View } from "react-native";

export default function PlaceItem({ place, onSelect }) {
  return (
    <Pressable
      onPress={onSelect}
      className="flex-row items-start flex-1 my-3 rounded-xl bg-primary500 android:elevation-lg ios:shadow-xl active:opacity-90 "
    >
      <Image
        source={{ uri: place.imageUri }}
        className="flex-1 rounded-bl-xl rounded-br-xl h-[100]"
      />
      <View className="flex-[2] p-3">
        <Text className="text-xl font-bold text-gray-700">{place.title}</Text>
        <Text className="text-xs text-gray-700">{place.address}</Text>
      </View>
    </Pressable>
  );
}
