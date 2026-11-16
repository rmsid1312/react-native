import Ionicons from "@react-native-vector-icons/ionicons";
import { Pressable } from "react-native";

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="items-center justify-center p-2 active:opacity-70"
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}
