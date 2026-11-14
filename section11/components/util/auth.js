import axios from "axios";

const BASE_URL = "http://172.30.1.52:8080";

async function authenticate(uri, email, password) {
  const response = await axios.post(BASE_URL + uri, {
    email: email,
    password: password,
  });

  console.log("==================");
  console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate("/user", email, password);
}

export async function login(email, password) {
  await authenticate("/auth/login", email, password);
}
