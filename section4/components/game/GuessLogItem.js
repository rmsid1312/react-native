import { Text } from "react-native";
import { View } from "react-native";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View className="flex-row justify-between w-full p-3 my-10 bg-yellow-500 border-2 rounded-full shadow-lg border-rose-950">
      <Text className="font-open-sans">#{roundNumber}</Text>
      <Text className="font-open-sans">Opponent's Guess: {guess}</Text>
    </View>
  );
}
