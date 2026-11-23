import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, Text, View } from "react-native";
import MealDetails from "../MealDetails";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }
  return (
    <View className="m-4 overflow-hidden bg-white rounded-lg shadow-md elevation-md ">
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed && Platform.OS === "ios" ? { opacity: 0.5 } : null
        }
        onPress={selectMealItemHandler}
      >
        <View className="overflow-hidden rounded-lg">
          <View>
            <Image source={{ uri: imageUrl }} className="w-full h-[200]" />
            <Text className="m-2 text-lg font-bold text-center">{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
