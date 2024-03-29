import { API_URL } from "./constants";

export async function getResponseData(res) {
   if (res.ok) {
      return res.json();
   }
   const error = new Error(`Ошибка: ${res.status}`)
   error.statusCode = res.status;
   return Promise.reject(error);
}

export async function register(name, email, password) {
   const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
   });
   return getResponseData(response);
}

export async function login(email, password) {
   const response = await fetch(`${API_URL}/signin`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
   });
   return getResponseData(response);
}

export async function checkToken(token) {
   const response = await fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
      },
   });
   return getResponseData(response);
}

export async function updateUser(name, email) {
   const response = await fetch(`${API_URL}/users/me`, {
      method: 'PATCH',
      headers: {
         "Content-Type": "application/json",
         "Authorization": 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({ name, email }),
   });
   return getResponseData(response);
}