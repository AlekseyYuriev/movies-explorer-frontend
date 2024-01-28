import React, { useCallback, useEffect, useState } from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import { getSavedMovies } from "../../utils/MoviesApi";
import { DURATION_SHORT_MOVIES } from "../../utils/constants";

export default function SavedMovies ({ loggedIn }) {

   const [movies, setMovies] = useState([]);
   const [savedMovies, setSavedMovies] = useState([]);
   const [text, setText] = useState('');
   const [filterActive, setFilterActive] = useState(false);

   const filterMovies = useCallback((text, filterActive) => {

      let filteredMovies = savedMovies;

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
   
   }, [savedMovies]);

   const onTextSearch = useCallback((newText) => {
      setText(newText);
      filterMovies(newText,filterActive);
   }, [filterMovies, filterActive]);

   const onDurationSearch = useCallback((newFilterActive) => {
      setFilterActive(newFilterActive);
      filterMovies(text, newFilterActive);
   }, [filterMovies, text]);

   useEffect(() => {
      async function getAllSavedMovies() {
         const savedFilms = await getSavedMovies();
         setSavedMovies(savedFilms);
         setMovies(savedFilms);
      }
      getAllSavedMovies();
   }, [])

   const onMovieDeleted = useCallback((id) => {
      const updatedMovies = [...savedMovies];
      const deletedMovie = updatedMovies.filter(movie => movie._id !== id);
      setSavedMovies(deletedMovie);
   }, [savedMovies])

   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <SearchForm
               onTextSearch={onTextSearch}
               onDurationSearch={onDurationSearch}
            />
            <section className="savedmovies">
               <div className="savedmovies__list">
                  {movies.map(savedMovie => 
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
                  )}
               </div>
            </section>
            </main>
         <Footer />
      </>
   )
}