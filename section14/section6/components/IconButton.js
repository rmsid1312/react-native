import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ onPress, icon, color }) {
  return (
    <Pressable onPress={onPress} className="active:opacity-70">
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}
