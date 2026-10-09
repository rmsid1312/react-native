import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput({ handleAddGoals, visible }) {
  const [input, setInput] = useState("");

  function goalInputHandler(enteredText) {
    setInput(enteredText);
  }

  function addGoalHandler() {
    handleAddGoals(input);
    setInput("");
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="add goals"
          onChangeText={goalInputHandler}
          value={input}
        />
        <Button title="add goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
});
export default GoalInput;
