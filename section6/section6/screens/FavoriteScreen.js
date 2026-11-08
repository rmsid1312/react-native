import { Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

export default function FavoriteScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <Text className="flex-1 mt-4 text-lg text-xl font-bold text-center text-white">
        You have no favorite meals yet.
      </Text>
    );
  }
  return <MealsList items={favoriteMeals} />;
}
