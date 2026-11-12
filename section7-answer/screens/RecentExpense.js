import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
export default function RecentExpenses() {
  const expenseCtx = useContext(ExpenseContext);
  useEffect(() => {
    async function getExpense() {
      const expenses = await fetchExpenses();
      expenseCtx.setExpenses(expenses);
    }

    getExpense();
  }, []);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days"
    />
  );
}
