import axios from "axios";

const BASE_URL = "http://172.30.1.52:8080/expense";
export async function storeExpense(expenseData) {
  const response = await axios.post(BASE_URL, expenseData);
  const id = response.data.id;
  return id;
}

export function updateExpense() {}

export async function fetchExpenses() {
  const response = await axios.get(BASE_URL + "/all");
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
