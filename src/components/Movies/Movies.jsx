import React, { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { getMovies } from "../../utils/MoviesApi";
import { DURATION_SHORT_MOVIES } from "../../utils/constants";

export default function Movies ({ loggedIn }) {

   const [movies, setMovies] = useState([]);
   const [allMovies, setAllMovies] = useState([]);
   const [text, setText] = useState('');
   const [filterActive, setFilterActive] = useState(false);

   const filterMovies = useCallback((text, filterActive) => {

      let filteredMovies = allMovies;

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
      setMovies(filteredMovies);
   
   }, [allMovies]);

   const onTextSearch = useCallback((newText) => {
      setText(newText);
      filterMovies(newText,filterActive);
   }, [filterMovies, filterActive]);

   const onDurationSearch = useCallback((newFilterActive) => {
      setFilterActive(newFilterActive);
      filterMovies(text, newFilterActive);
   }, [filterMovies, text]);

   useEffect(() => {
      async function getAllMovies () {
         const films = await getMovies();
         setAllMovies(films);
      }
      getAllMovies();
   }, [])

   useEffect(() => {
      if(localStorage.getItem('textSearch') || localStorage.getItem('filterCheckbox')) {
         filterMovies(localStorage.getItem('textSearch'), localStorage.getItem('filterCheckbox'))
      }
   }, [filterMovies])

   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <SearchForm
               onDurationSearch={onDurationSearch}
               onTextSearch={onTextSearch} 
            />
            <MoviesCardList
               movies={movies} />
         </main>
         <Footer />
      </>
   )
}