import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIES_URL } from '../../utils/constants';

export default function MoviesCardList ({ movies, likedMovies, onMovieSaved }) {

   if (movies.length===0) {
      return <span>Ничего не найдено</span>
   }

   const likedMoviesSet = new Set(likedMovies.map(movie => movie.movieId));

   return (
      <section className='cards'>
         <div className='cards__list'>
            {movies.map(movie => 
               <MoviesCard 
                  image={`${MOVIES_URL}/${movie.image.url}`} 
                  text={movie.nameRU} 
                  key={movie.id} 
                  saved={likedMoviesSet.has(movie.id)} 
                  alt={movie.nameRU}
                  duration={movie.duration}
                  country={movie.country}
                  director={movie.director}
                  year={movie.year}
                  description={movie.description}
                  trailerLink={movie.trailerLink}
                  thumbnail={`${MOVIES_URL}/${movie.image.formats.thumbnail.url}`}
                  movieId={movie.id}
                  nameEN={movie.nameEN}
                  onMovieSaved={onMovieSaved}
                  />
            )}
         </div>
         <button type='button' className='cards__button'>Ещё</button>
      </section>
   )
}