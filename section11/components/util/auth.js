import axios from "axios";

const BASE_URL = "http://172.30.1.52:8080";

export function createUser(email, password) {
  return axios.post(BASE_URL + "/user", { email, password });
}

export async function login(email, password) {
  const response = await axios.post(BASE_URL + "/auth/login", {
    email,
    password,
  });
  return response.data.accessToken;
}

export async function fetchList(token) {
  const response = await axios.get(BASE_URL + "/user/all", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
