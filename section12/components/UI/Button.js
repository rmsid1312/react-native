import { Pressable, Text } from "react-native";

export default function Button({ onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      className="px-3 py-2 m-1 active:opacity-70 bg-primary800 android:elevation-mg"
    >
      <Text className="text-center font-xl text-primary50">{children}</Text>
    </Pressable>
  );
}
