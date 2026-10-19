import { Text } from "react-native";

export function Title({ children }) {
  return (
    <Text className="p-3 text-2xl font-bold text-center text-white border-2 border-white android:border-2">
      {children}
    </Text>
  );
}
