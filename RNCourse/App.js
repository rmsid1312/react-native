import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function handleModalVisible() {
    setModalVisible(true);
  }

  function handleAddGoals(input) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: input, id: Math.random().toString() },
    ]);
  }

  function deleteItemHandler(id) {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  }
  return (
    <View style={styles.appContainer}>
      <Button title="add goal" color="#5e0acc" onPress={handleModalVisible} />
      {modalVisible && (
        <GoalInput handleAddGoals={handleAddGoals} visible={modalVisible} />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteItemHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
  goalsContainer: {
    flex: 5,
  },
});
