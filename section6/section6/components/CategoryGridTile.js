import { Text } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
  return (
    <View
      className="flex-1 m-4 h-[150px] shadow-sm shadow-black/25 elevation-4 rounded-xl android:overflow-hidden ios:overflow-visible "
      style={{ backgroundColor: color }}
    >
      <Pressable
        className="flex-1 "
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
        onPress={onPress}
      >
        <View className="items-center justify-center flex-1 p-4">
          <Text className="text-xl font-bold">{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
