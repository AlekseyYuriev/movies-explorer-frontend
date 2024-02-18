import { getMovies, getSavedMovies } from "./MoviesApi";

export const getFilterCheckbox = () => {
   return localStorage.getItem('filterCheckbox') === 'true' || false;
}

export const getTextSearch = () => {
   return localStorage.getItem('textSearch') || '';
}

export const getSelect = () => {
   return localStorage.getItem('select') || 'Все фильмы';
}

export const loadAllMovies = async () => {
   if (localStorage.getItem('films')) {
      return JSON.parse(localStorage.getItem('films'));
   }
   const films = await getMovies();
   localStorage.setItem('films', JSON.stringify(films));
   return films;
}

export const loadAllSavedMovies = async () => {
   if (localStorage.getItem('savedFilms')) {
      return JSON.parse(localStorage.getItem('savedFilms'));
   }
   const savedFilms = await getSavedMovies();
   localStorage.setItem('savedFilms', JSON.stringify(savedFilms));
   return savedFilms;
}

export const setupSavedMovies = (savedFilms) => {
   localStorage.setItem('savedFilms', JSON.stringify(savedFilms));
}