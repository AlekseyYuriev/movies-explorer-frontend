import React, { useCallback, useEffect, useState } from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import { filterFunction } from "../../utils/filterFunction";
import { loadAllSavedMovies, setupSavedMovies } from "../../utils/localStorageManager";

export default function SavedMovies ({ loggedIn }) {

   const [movies, setMovies] = useState([]);
   const [savedMovies, setSavedMovies] = useState([]);
   const [text, setText] = useState('');
   const [filterActive, setFilterActive] = useState(false);
   const [select, setSelect] = useState('');

   const filterMovies = useCallback((text, filterActive, select) => {

      const filteredMovies = filterFunction(savedMovies, text, filterActive, select);
      setMovies(filteredMovies);
   
   }, [savedMovies]);

   const onTextSearch = useCallback((newText) => {
      setText(newText);
      filterMovies(newText,filterActive, select);
   }, [filterMovies, filterActive, select]);

   const onDurationSearch = useCallback((newFilterActive) => {
      setFilterActive(newFilterActive);
      filterMovies(text, newFilterActive, select);
   }, [filterMovies, text, select]);

   const onSelectSearch = useCallback((newSelect) => {
      setSelect(newSelect);
      filterMovies(text, filterActive, newSelect);
   }, [filterMovies, text, filterActive]);

   useEffect(() => {
      async function getAllSavedMovies() {
         const savedFilms = await loadAllSavedMovies();
         setSavedMovies(savedFilms);
         setMovies(savedFilms);
      }
      getAllSavedMovies();
   }, [])

   useEffect(() => {
      filterMovies(text, filterActive, select);
   }, [filterActive, filterMovies, text, select])

   const onMovieDeleted = useCallback((id) => {
      const updatedMovies = [...savedMovies];
      const deletedMovie = updatedMovies.filter(movie => movie._id !== id);
      setSavedMovies(deletedMovie);
      setupSavedMovies(deletedMovie);
   }, [savedMovies])

   let movieCountriesSaved = [];

   savedMovies.map((film) => {
      movieCountriesSaved.push(film.country)
      return movieCountriesSaved;
   })

   const allMoviesSavedSet = new Set(movieCountriesSaved);

   const allCountriesSaved = Array.from(allMoviesSavedSet)

   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <SearchForm
               onTextSearch={onTextSearch}
               onDurationSearch={onDurationSearch}
               allCountries={allCountriesSaved}
               onSelectSearch={onSelectSearch}
            />
            <section className="savedmovies">
               <div className="savedmovies__list">
               {movies.length===0 ? (<span className='savedcards__empty'>Ничего не найдено</span>) :
               movies.map(savedMovie => 
                  <MoviesCard 
                     image={savedMovie.image}
                     text={savedMovie.nameRU} 
                     key={savedMovie._id}
                     alt={savedMovie.nameRU}
                     saved={false} 
                     duration={savedMovie.duration}
                     country={savedMovie.country}
                     director={savedMovie.director}
                     year={savedMovie.year}
                     description={savedMovie.description}
                     trailerLink={savedMovie.trailerLink}
                     thumbnail={savedMovie.thumbnail}
                     movieId={savedMovie.movieId}
                     nameEN={savedMovie.nameEN}
                     id={savedMovie._id}
                     onMovieDeleted={onMovieDeleted}
                  />
                  )
               }
               </div>
            </section>
            </main>
         <Footer />
      </>
   )
}