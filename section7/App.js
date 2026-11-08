import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        NativeWind 적용 완료!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
