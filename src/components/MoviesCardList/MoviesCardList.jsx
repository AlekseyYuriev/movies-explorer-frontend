import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movies from '../../utils/movies';

export default function MoviesCardList () {
   return (
      <section className='cards'>
         <div className='cards__list'>
            {movies.map(movie => 
               <MoviesCard movie={movie.movie} text={movie.text} key={movie.id} saved={movie.saved}/>
            )}
         </div>
         <button className='cards__button'>Ещё</button>
      </section>
   )
}