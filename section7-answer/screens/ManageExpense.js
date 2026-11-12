import { useContext, useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../UI/IconButton";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { GlobalStyles } from "../constant/styles";
import { ExpenseContext } from "../store/expense-context";
import { storeExpense } from "../util/http";

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpenseContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId,
  );

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

  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      storeExpense(expenseData);
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  return (
    <View className="flex-1 p-6 bg-primary800">
      <ExpenseForm
        onCancel={cancelHandler}
        subitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
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
