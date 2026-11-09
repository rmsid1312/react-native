import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
export default function AllExpenses() {
  const expensesCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} />
  );
}
