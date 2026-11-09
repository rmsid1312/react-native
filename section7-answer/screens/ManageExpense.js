import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constant/styles";
import Button from "../UI/Button";

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    navigation.goBack();
  }

  return (
    <View className="flex-1 p-6 bg-primary800">
      <View className="flex-row items-center justify-center ">
        <Button
          mode="flat"
          onPress={cancelHandler}
          className="min-w-[120px] mx-2"
        >
          Cancel
        </Button>
        <Button onPress={confirmHandler} className="min-w-[120px] mx-2">
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View className="items-center pt-2 mt-4 border-t-2 border-t-primary200">
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}
