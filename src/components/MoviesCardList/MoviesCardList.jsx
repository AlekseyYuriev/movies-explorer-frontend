import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIES_URL } from '../../utils/constants';

export default function MoviesCardList ({ movies }) {



   return (
      <section className='cards'>
         <div className='cards__list'>
            {movies.map(movie => 
               <MoviesCard 
                  movie={`${MOVIES_URL}/${movie.image.url}`} 
                  text={movie.nameRU} 
                  key={movie.id} 
                  saved={true} 
                  alt={movie.nameRU}
                  duration={movie.duration}
                  />
            )}
         </div>
         <button type='button' className='cards__button'>Ещё</button>
      </section>
   )
}