import { Text, View } from "react-native";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View className="flex-row items-center justify-between p-2 bg-primary50 rounded-xl">
      <Text className="text-md text-primary400">{periodName}</Text>
      <Text className="text-lg font-bold text-primary500">
        ${expensesSum.toFixed(2)}
      </Text>
    </View>
  );
}
