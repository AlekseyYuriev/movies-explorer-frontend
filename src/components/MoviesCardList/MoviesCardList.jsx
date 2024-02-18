import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIES_URL, DEVICE_PARAMS } from '../../utils/constants';

export default function MoviesCardList ({ movies, likedMovies, onMovieSaved, onMovieDeleted, inputError }) {

   const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
   });
   const [cardLength, setCardLength] = useState(0);
   const [standartCardLength, setStandartCardLength] = useState({
      desktop: DEVICE_PARAMS.desktop.movies.total,
      tablet: DEVICE_PARAMS.tablet.movies.total,
      mobile: DEVICE_PARAMS.mobile.movies.total,
   });

   useEffect(() => {
      if (windowSize.width > DEVICE_PARAMS.desktop.width) {
         setCardLength(standartCardLength.desktop);
      } else if (windowSize.width > DEVICE_PARAMS.tablet.width) {
         setCardLength(standartCardLength.tablet);
      } else {
         setCardLength(standartCardLength.mobile);
      }
   }, [windowSize.width, standartCardLength]);

   useEffect(() => {
      const handleResize = () => {
         setWindowSize({
            width: window.innerWidth,
         });
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   if (movies.length===0) {
      return <span className='cards__empty'>{inputError ? 'Нужно ввести ключевое слово' : 'Ничего не найдено'}</span>
   }

   const openMoreCards = () => {
      if (windowSize.width > DEVICE_PARAMS.desktop.width) {
         setStandartCardLength({
            desktop: standartCardLength.desktop
            + DEVICE_PARAMS.desktop.movies.more,
            tablet: standartCardLength.desktop
            + DEVICE_PARAMS.desktop.movies.more,
            mobile: standartCardLength.desktop
            + DEVICE_PARAMS.desktop.movies.more,
         });
      } else if (windowSize.width > DEVICE_PARAMS.tablet.width) {
         setStandartCardLength({
            desktop: standartCardLength.tablet
            + DEVICE_PARAMS.tablet.movies.more,
            tablet: standartCardLength.tablet
            + DEVICE_PARAMS.tablet.movies.more,
            mobile: standartCardLength.tablet
            + DEVICE_PARAMS.tablet.movies.more,
         });
      } else {
         setStandartCardLength({
            desktop: standartCardLength.mobile
            + DEVICE_PARAMS.mobile.movies.more,
            tablet: standartCardLength.mobile
            + DEVICE_PARAMS.mobile.movies.more,
            mobile: standartCardLength.mobile
            + DEVICE_PARAMS.mobile.movies.more,
         });
      }
   };

   const likedMoviesMap = new Map();

   for (let i=0; i <= likedMovies.length - 1; i++ ) {
      likedMoviesMap.set(likedMovies[i].movieId, likedMovies[i]._id);
   }

   return (
      <section className='cards'>
         <div className='cards__list'>
            {movies.slice(0, cardLength).map(movie => 
               <MoviesCard 
                  movie={movie}
                  image={`${MOVIES_URL}/${movie.image.url}`} 
                  text={movie.nameRU} 
                  key={movie.id} 
                  saved={likedMoviesMap.has(movie.id)} 
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
                  onMovieDeleted={onMovieDeleted}
                  id={likedMoviesMap.get(movie.id)}
                  />
            )}
         </div>
         {(cardLength < movies.length) ? <button type='button' className='cards__button' onClick={openMoreCards}>Ещё</button> : ''}
      </section>
   )
}