import { Text, View } from "react-native";
import Button from "./Button";

export default function ErrorOverlay({ message, onConfirm }) {
  return (
    <View className="items-center justify-center flex-1 p-6 bg-primary700">
      <Text className="mb-2 text-xl font-bold text-center text-white">
        An error occured !
      </Text>
      <Text className="mb-2 text-center text-white">{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}
