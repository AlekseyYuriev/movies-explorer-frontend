import React, { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { getFilterCheckbox, getTextSearch, getSelect, loadAllMovies, loadAllSavedMovies, setupSavedMovies } from "../../utils/localStorageManager";
import { filterFunction } from "../../utils/filterFunction";

export default function Movies ({ loggedIn }) {

   const [movies, setMovies] = useState([]);
   const [allMovies, setAllMovies] = useState([]);
   const [text, setText] = useState(getTextSearch());
   const [filterActive, setFilterActive] = useState(getFilterCheckbox());
   const [select, setSelect] = useState(getSelect());
   const [isLoading, setIsLoading] = useState(false);
   const [likedMovies, setLikedMovies] = useState([]);
   const [inputError, setInputError] = useState(false);

   const filterMovies = useCallback((text, filterActive, select) => {

      const filteredMovies = filterFunction(allMovies, text, filterActive, select);
      setMovies(filteredMovies);
   
   }, [allMovies]);

   const onTextSearch = useCallback((newText) => {
      setText(newText);
      filterMovies(newText, filterActive, select);
   }, [filterMovies, filterActive, select]);

   const onDurationSearch = useCallback((newFilterActive) => {
      setFilterActive(newFilterActive);
      filterMovies(text, newFilterActive, select);
   }, [filterMovies, select, text]);

   const onSelectSearch = useCallback((newSelect) => {
      setSelect(newSelect);
      filterMovies(text, filterActive, newSelect);
   }, [filterMovies, text, filterActive]);

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
      if(localStorage.getItem('textSearch') || localStorage.getItem('filterCheckbox') || localStorage.getItem('select')) {
         filterMovies(getTextSearch(), getFilterCheckbox(), getSelect())
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

   let movieCountries = [];

   // allMovies.map((film) => {
   //    movieCountries.push(film.country)
   //    return movieCountries;
   // })

   for (let i=0; i < allMovies.length; i++) {
      movieCountries.push(allMovies[i].country)
   }

   // console.log(movieCountries);

   const allMoviesSet = new Set(movieCountries);

   const allCountries = Array.from(allMoviesSet)

   // allCountries.unshift(``);

   // console.log(allCountries);

// Найти все уникальные элементы массива ???
// Set - для зачади + Map (разобраться с коллекциями)
// Алгоритмическая сложность (О n)
// Циклы. Когда нужен return

   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <SearchForm
               onDurationSearch={onDurationSearch}
               onTextSearch={onTextSearch}
               setInputError={setInputError} 
               onSelectSearch={onSelectSearch}
               allCountries={allCountries}
            />
            {isLoading ? <Preloader /> : <MoviesCardList movies={movies} likedMovies={likedMovies} onMovieSaved={onMovieSaved} onMovieDeleted={onMovieDeleted} inputError={inputError}/>}
         </main>
         <Footer />
      </>
   )
}