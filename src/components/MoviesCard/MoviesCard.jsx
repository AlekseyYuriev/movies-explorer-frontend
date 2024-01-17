import React from "react";
import './MoviesCard.css';

export default function MoviesCard ({ movie, text }) {
   return (
      <div className="card">
         <img src={movie} className="card__image" alt="Постер фильма" />
         <div className="card__info">
            <h2 className="card__name">{text}</h2>
            <button 
               type="button" 
               aria-label="сохранить фильм в избранное" 
               className="card__like-button"
               />
         </div>
         <p className="card__duration">1ч42м</p>
      </div>
   )
}