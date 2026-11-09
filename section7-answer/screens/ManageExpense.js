import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constant/styles";

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {}
  return (
    <View className="flex-1 p-6 bg-primary800">
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
