import axios from "axios";

const BASE_URL = "http://172.30.1.52:8080";

async function authenticate(uri, email, password) {
  const response = await axios.post(BASE_URL + uri, {
    email: email,
    password: password,
  });

  const token = response.data.accessToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("/user", email, password);
}

export function login(email, password) {
  return authenticate("/auth/login", email, password);
}
