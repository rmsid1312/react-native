import { useSelector } from "react-redux";
import Header from "../components/Header";

export default function ExpenseScreen() {
  const expenses = useSelector((state) => state.expenseList.expenses);
  return <Header title="Total" expenses={expenses} />;
}
