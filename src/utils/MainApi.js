import { API_URL } from "./constants";

export async function getResponseData(res) {
   if (res.ok) {
      return res.json();
   }

   return Promise.reject(new Error(`Ошибка: ${res.status}`));
}

export async function register(name, email, password) {
   const request = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
   });
   return getResponseData(request);
}

export async function login(email, password) {
   const request = await fetch(`${API_URL}/signin`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
   });
   return getResponseData(request);
}

export async function checkToken(token) {
   const request = await fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
      },
   });
   return getResponseData(request);
}

export async function updateUser({ name, email }) {
   const request = await fetch(`${API_URL}/users/me`, {
      method: 'PATCH',
      headers: {
         "Content-Type": "application/json",
         "Authorization": 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({ name, email }),
   });
   return getResponseData(request);
}