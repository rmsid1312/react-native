import { StyleSheet } from "react-native";
import { Text } from "react-native";
import Colors from "../../constants/color";

export function Title({ children }) {
  return (
    <Text className="p-3 text-2xl font-bold text-center text-white border-2 border-white">
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
