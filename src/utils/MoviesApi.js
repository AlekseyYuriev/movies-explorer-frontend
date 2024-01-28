import { getResponseData } from './MainApi';
import { API_URL, MOVIES_URL } from './constants';

const headerDefault = {
   'Content-Type': 'application/json',
} 

export async function getMovies() {
   const moviesResponse = await fetch(`${MOVIES_URL}/beatfilm-movies`, {
      method: 'GET',
      headers: headerDefault
   })
   return getResponseData(moviesResponse);
}

export async function saveMovie(movie) {
   const savedMovieResponse = await fetch(`${API_URL}/movies`, {
      method: 'POST',
      headers: {
         ...headerDefault,
         authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(movie)
   })
   if (savedMovieResponse.status !== 201) {
      return Promise.reject(new Error(`Ошибка: ${savedMovieResponse.status}`));
   }
}

export async function getSavedMovies() {
   const savedMoviesResponse = await fetch(`${API_URL}/movies`, {
      method: 'GET',
      headers: {
         ...headerDefault,
         authorization: 'Bearer ' + localStorage.getItem('token')
      },
   })
   return getResponseData(savedMoviesResponse);
}

export async function deleteMovie(movieId) {
   const deleteMovieResponse = await fetch(`${API_URL}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
         ...headerDefault,
         authorization: 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({ movieId })
   })
   return getResponseData(deleteMovieResponse);
}