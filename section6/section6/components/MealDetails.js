import { Text, View } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View className="flex-row items-center justify-center p-2" style={style}>
      <Text className="mx-1 text-xs" style={textStyle}>
        {duration}
      </Text>
      <Text className="mx-1 text-xs" style={textStyle}>
        {complexity.toUpperCase()}
      </Text>
      <Text className="mx-1 text-xs" style={textStyle}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}
