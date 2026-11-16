import Ionicons from "@react-native-vector-icons/ionicons";
import { Pressable, Text } from "react-native";
import { Colors } from "../../constant/color";

export default function OutlinedButton({ onPress, icon, children }) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center justify-center gap-2 px-3 py-2 m-1 border-2 border-primary500 active:opacity-70"
    >
      <Ionicons
        name={icon}
        size={18}
        color={Colors.primary100}
        className="mr-2"
      />
      <Text className="text-primary500">{children}</Text>
    </Pressable>
  );
}
