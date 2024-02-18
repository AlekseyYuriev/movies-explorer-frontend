import { DURATION_SHORT_MOVIES } from "./constants";

export const filterFunction = (movieArr, text, filterActive, select) => {

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

   filteredMovies = filteredMovies.filter((movie) => {
      if (movie.country===select) {
         return true;
      } else if (select==='Все фильмы') {
         return true;
      }
      return false;
   })

   return filteredMovies;
}