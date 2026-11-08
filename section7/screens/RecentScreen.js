import { useSelector } from "react-redux";
import Header from "../components/Header";

export default function RecentScreen() {
  const expenses = useSelector((state) => state.expenseList.expenses);
  return <Header title="Last 7 Days" expenses={expenses} />;
}
