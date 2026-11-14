import axios from "axios";

const BASE_URL = "http://172.30.1.52:8080";

export async function createUser(email, password) {
  return axios.post(BASE_URL + "/user", {
    email: email,
    password: password,
  });
}
