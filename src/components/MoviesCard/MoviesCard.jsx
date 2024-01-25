import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

export default function MoviesCard ({ movie, text, saved, alt }) {

   let location = useLocation();

   return (
      <div className="card">
         <img src={movie} className="card__image" alt={alt} />
         <div className="card__info">
            <h2 className="card__name">{text}</h2>
            {location.pathname===`/movies` ? (
               <button 
               type="button" 
               aria-label="сохранить фильм в избранное" 
               className={saved ? 'card__like-button card__like-button_active' : 'card__like-button'}
               />
            ) : (
               <button 
               type="button" 
               aria-label="сохранить фильм в избранное" 
               className="card__delete-button"
               />
            )}
         </div>
         <p className="card__duration">1ч42м</p>
      </div>
   )
}