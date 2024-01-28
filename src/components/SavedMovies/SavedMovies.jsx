import React, { useCallback, useEffect, useState } from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import { getSavedMovies } from "../../utils/MoviesApi";

export default function SavedMovies ({ loggedIn }) {

   const [savedMovies, setSavedMovies] = useState([]);

   useEffect(() => {
      async function getAllSavedMovies() {
         const savedFilms = await getSavedMovies();
         setSavedMovies(savedFilms);
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
            <SearchForm />
            <section className="savedmovies">
               <div className="savedmovies__list">
                  {savedMovies.map(savedMovie => 
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