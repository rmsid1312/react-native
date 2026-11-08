import { Image, ScrollView, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
export default function MealDetailScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView className="mb-8">
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        className="w-full h-[350]"
      />
      <Text className="m-2 text-2xl font-bold text-center text-white">
        MealDetailScreen - {mealId}
      </Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={{ color: "white" }}
      />
      <View className="items-center ">
        <View className="w-4/5">
          <Subtitle title="Ingredients" />
          <List data={selectedMeal.ingredients} />
          <Subtitle title="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
