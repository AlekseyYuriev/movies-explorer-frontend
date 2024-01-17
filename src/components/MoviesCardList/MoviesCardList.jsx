import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movieOne from '../../images/movieOne.jpg';

export default function MoviesCardList () {
   return (
      <section className='cards'>
         <div className='cards__list'>
            <MoviesCard text='33 слова о дизайнене' movie={movieOne}/>
            <MoviesCard text='33 слова о дизайнене' movie={movieOne}/>
            <MoviesCard text='33 слова о дизайнене' movie={movieOne}/>
            <MoviesCard text='33 слова о дизайнене' movie={movieOne}/>
            <MoviesCard text='33 слова о дизайнене' movie={movieOne}/>
            <MoviesCard text='33 слова о дизайнене' movie={movieOne}/>
            <MoviesCard text='33 слова о дизайнене' movie={movieOne}/>
            <MoviesCard text='33 слова о дизайнене' movie={movieOne}/>
         </div>
         <button className='cards__button'>Ещё</button>
      </section>
   )
}