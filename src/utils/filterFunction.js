import { DURATION_SHORT_MOVIES } from "./constants";

export const filterFunction = (movieArr, text, filterActive) => {

   let filteredMovies = movieArr;

   if (filterActive) {
      filteredMovies = filteredMovies.filter((movie) => {
         if(movie.duration <= DURATION_SHORT_MOVIES) {
            return true;
         }
         return false;
      })
   }

   filteredMovies = filteredMovies.filter((movie) => {
      if (movie.nameRU.toLowerCase().includes(text.toLowerCase()) || movie.nameEN.toLowerCase().includes(text.toLowerCase())) {
         return true;
      }
      return false;
   })
   return filteredMovies;
}



export const filterFunctionBySelect = (movieArr, select) => {

   let selectedMovies = movieArr;

   selectedMovies = selectedMovies.filter((movie) => {
      if (movie.country===select) {
         return true;
      }
      return false;
   })

   return selectedMovies;
}
