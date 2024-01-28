import React, { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { getMovies, getSavedMovies } from "../../utils/MoviesApi";
import { DURATION_SHORT_MOVIES } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

export default function Movies ({ loggedIn }) {

   const [movies, setMovies] = useState([]);
   const [allMovies, setAllMovies] = useState([]);
   const [text, setText] = useState('');
   const [filterActive, setFilterActive] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [likedMovies, setLikedMovies] = useState([]);

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

   const getAllMovies = useCallback(async () => {
      setIsLoading(true);
      const films = await getMovies();
      const savedFims = await getSavedMovies();
      setLikedMovies(savedFims);
      setAllMovies(films);
      setIsLoading(false);
      }, []) 

   useEffect(() => {

      getAllMovies();
   }, [getAllMovies])

   useEffect(() => {
      if(localStorage.getItem('textSearch') || localStorage.getItem('filterCheckbox')) {
         filterMovies(localStorage.getItem('textSearch'), localStorage.getItem('filterCheckbox'))
      }
   }, [filterMovies])

   const onMovieSaved = useCallback((newMovie) => {
      const newLikedMovies = [...likedMovies];
      newLikedMovies.push(newMovie);
      setLikedMovies(newLikedMovies);
   }, [likedMovies])

   const onMovieDeleted = useCallback((id) => {
      const updatedMovies = [...likedMovies];
      const deletedMovie = updatedMovies.filter(movie => movie._id !== id);
      setLikedMovies(deletedMovie);
   }, [likedMovies])


   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <SearchForm
               onDurationSearch={onDurationSearch}
               onTextSearch={onTextSearch} 
            />
            {isLoading ? <Preloader /> : <MoviesCardList movies={movies} likedMovies={likedMovies} onMovieSaved={onMovieSaved} onMovieDeleted={onMovieDeleted} />}
         </main>
         <Footer />
      </>
   )
}