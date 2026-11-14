import { ActivityIndicator, View } from "react-native";

export default function LoadingOverlay() {
  return (
    <View className="items-center justify-center flex-1 p-6 bg-primary700">
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}
