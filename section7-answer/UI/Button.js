import { Pressable, Text, View } from "react-native";

export default function Button({ children, onPress, mode, className }) {
  const isFlat = mode === "flat";
  return (
    <View className={className}>
      <Pressable
        onPress={onPress}
        className="active:opacity-75 active:rounded-lg active:bg-primary400"
      >
        <View
          className={`p-2 rounded-lg  ${isFlat ? "bg-transparent" : "bg-primary500"}`}
        >
          <Text
            className={`text-center ${isFlat ? "text-primary200" : "text-white"}`}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
