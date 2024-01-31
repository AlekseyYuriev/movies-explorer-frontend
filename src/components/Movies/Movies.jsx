import React, { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { getFilterCheckbox, getTextSearch, loadAllMovies, loadAllSavedMovies, setupSavedMovies } from "../../utils/localStorageManager";
import { filterFunction } from "../../utils/filterFunction";

export default function Movies ({ loggedIn }) {

   const [movies, setMovies] = useState([]);
   const [allMovies, setAllMovies] = useState([]);
   const [text, setText] = useState(getTextSearch());
   const [filterActive, setFilterActive] = useState(getFilterCheckbox());
   const [isLoading, setIsLoading] = useState(false);
   const [likedMovies, setLikedMovies] = useState([]);
   const [inputError, setInputError] = useState(false);

   const filterMovies = useCallback((text, filterActive) => {

      const filteredMovies = filterFunction(allMovies, text, filterActive);
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
      const films = await loadAllMovies();
      const savedFims = await loadAllSavedMovies();
      setAllMovies(films);
      setLikedMovies(savedFims);
      setIsLoading(false);
      }, []) 

   useEffect(() => {

      getAllMovies();
   }, [getAllMovies])

   useEffect(() => {
      if(localStorage.getItem('textSearch') || localStorage.getItem('filterCheckbox')) {
         filterMovies(getTextSearch(), getFilterCheckbox())
      }
   }, [filterMovies])

   const onMovieSaved = useCallback((newMovie) => {
      const newLikedMovies = [...likedMovies];
      newLikedMovies.push(newMovie);
      setupSavedMovies(newLikedMovies);
      setLikedMovies(newLikedMovies);
   }, [likedMovies])

   const onMovieDeleted = useCallback((id) => {
      const updatedMovies = [...likedMovies];
      const deletedMovie = updatedMovies.filter(movie => movie._id !== id);
      setLikedMovies(deletedMovie);
      setupSavedMovies(deletedMovie);
   }, [likedMovies])


   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <SearchForm
               onDurationSearch={onDurationSearch}
               onTextSearch={onTextSearch}
               setInputError={setInputError} 
            />
            {isLoading ? <Preloader /> : <MoviesCardList movies={movies} likedMovies={likedMovies} onMovieSaved={onMovieSaved} onMovieDeleted={onMovieDeleted} inputError={inputError}/>}
         </main>
         <Footer />
      </>
   )
}