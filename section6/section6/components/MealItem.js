import { Image, Platform, Pressable, Text, View } from "react-native";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  return (
    <View className="m-4 overflow-hidden bg-white rounded-lg shadow-md elevation-md ">
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed && Platform.OS === "ios" ? { opacity: 0.5 } : null
        }
      >
        <View className="overflow-hidden rounded-lg">
          <View>
            <Image source={{ uri: imageUrl }} className="w-full h-[200]" />
            <Text className="m-2 text-lg font-bold text-center">{title}</Text>
          </View>
          <View className="flex-row items-center justify-center p-2">
            <Text className="mx-1 text-xs">{duration}</Text>
            <Text className="mx-1 text-xs">{complexity.toUpperCase()}</Text>
            <Text className="mx-1 text-xs">{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
