import axios from "axios";

const BASE_URL = "http://192.168.219.48:8080/expense";
export function storeExpense(expenseData) {
  axios.post(BASE_URL, expenseData);
}

export function updateExpense() {}

export async function fetchExpenses() {
  const response = await axios.get(BASE_URL);
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      description: response.data[key].description,
      date: new Date(response.data[key].date),
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function deleteExpense() {}
