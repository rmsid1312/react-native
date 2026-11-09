import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable onPress={onPress} className="active:opacity-40">
      <View className="p-2 mx-2 my-1 rounded-3xl">
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}
