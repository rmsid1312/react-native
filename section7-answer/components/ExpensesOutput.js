import { Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({
  expenses,
  expensesPeriod,
  fallbackText,
}) {
  let content = (
    <Text className="mt-8 text-xl text-center text-white">{fallbackText}</Text>
  );

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View className="flex-1 p-6 bg-primary700">
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}
