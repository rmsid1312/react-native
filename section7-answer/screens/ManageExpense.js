import { useContext, useLayoutEffect } from "react";
import { Text, TextInput, View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constant/styles";
import Button from "../UI/Button";
import { ExpenseContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpenseContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "Test!!",
        amount: 19.99,
        date: new Date("2026-11-05"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 19.99,
        date: new Date("2026-11-05"),
      });
    }
    navigation.goBack();
  }

  return (
    <View className="flex-1 p-6 bg-primary800">
      <ExpenseForm />
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
