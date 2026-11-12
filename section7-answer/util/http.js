const BASE_URL = "http://localhost:8080/expense";
export function storeExpense(expenseData) {
  axios.post(BASE_URL, expenseData);
}

export function updateExpense() {}

export async function getExpenses() {
  const response = await axios.get(BASE_URL);
}

export function deleteExpense() {}
