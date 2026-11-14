import axios from "axios";

const BASE_URL = "http://172.30.1.52:8080/expense";

if (__DEV__) {
  axios.interceptors.request.use(
    (config) => new Promise((resolve) => setTimeout(() => resolve(config), 0)),
  );
}

export async function storeExpense(expenseData) {
  const response = await axios.post(BASE_URL, expenseData);
  const id = response.data.id;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BASE_URL + "/all");
  return response.data.map((e) => ({
    id: e.id,
    amount: e.amount,
    description: e.description,
    date: new Date(e.date),
  }));
}

export function updateExpense(id, expenseData) {
  return axios.put(BASE_URL + `/${id}`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BASE_URL + `/${id}`);
}
