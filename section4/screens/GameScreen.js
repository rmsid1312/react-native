import { Alert, StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { Title } from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/ui/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList } from "react-native";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    ((minBoundary = 1), (maxBoundary = 100));
  }, []);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie.", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRound((prev) => [...prev, newRndNumber]);
  }

  const guessRoundListLength = guessRound.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>
          Higher or lower?
        </InstructionText>
        <View className="flex-row ">
          <View className="flex-1 bg-[#7e0463] rounded-xl mx-2">
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View className="flex-1 bg-[#7e0463] rounded-xl mx-2">
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View className="flex-1 p-4">
        {/* {guessRound.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRound}
          renderItem={(itemData) => (
            <GuessLogItem roundNumber={guessRoundListLength - itemData.index}>
              guess={itemData.item}
              {itemData.item}
            </GuessLogItem>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  InstructionText: {
    marginBottom: 12,
  },
});
