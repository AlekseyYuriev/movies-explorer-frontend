import { getResponseData } from './MainApi';
import { MOVIES_URL } from './constants';

export async function getMovies() {
   const moviesResponse = await fetch(`${MOVIES_URL}/beatfilm-movies`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   })
   return getResponseData(moviesResponse);
}


// getInitialCards() {
//    return fetch(`${this._url}/cards`, {
//       headers: {
//          authorization: 'Bearer ' + localStorage.getItem('token'),
//          'Content-Type': 'application/json',
//       }
//    }).then((response) => this._getResponseData(response));
// }

// export async function register(name, email, password) {
//    const request = await fetch(`${API_URL}/signup`, {
//       method: 'POST',
//       headers: {
//          'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, password }),
//    });
//    return getResponseData(request);
// }