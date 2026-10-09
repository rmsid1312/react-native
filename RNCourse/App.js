import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [input, setInput] = useState("");

  function goalInputHandler(enteredText) {
    setInput(enteredText);
  }
  function handleAddGoals() {
    setGoals((prevGoals) => [...prevGoals, input]);
    setInput("");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="add goals"
          onChangeText={goalInputHandler}
          defaultValue={input}
        />
        <Button title="add goal" onPress={handleAddGoals} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={true}
          data={goals}
          renderItem={(item) => {
            return (
              <View key={index} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            );
          }}
        >
          {/* {goals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))} */}
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
