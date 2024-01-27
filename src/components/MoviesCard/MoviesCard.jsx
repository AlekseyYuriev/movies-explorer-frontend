import React, { useCallback } from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";
import { saveMovie } from "../../utils/MoviesApi";

export default function MoviesCard ({ 
   image, text, saved, alt, duration, country, director, year, description, trailerLink, thumbnail, movieId, nameEN }) {

   let location = useLocation();

   const durationHours = Math.floor(duration/60);
   const durationMinutes = duration%60 > 0 ? `${duration%60}м` : '';

   const handleOnClick = useCallback( async () => {
      await saveMovie({
         country,
         director,
         duration,
         year,
         description,
         image,
         trailerLink,
         thumbnail,
         movieId,
         nameRU: text,
         nameEN
      })
   }, [country, description, director, duration, image, movieId, nameEN, text, thumbnail, trailerLink, year])

   return (
      <div className="card">
         <img src={image} className="card__image" alt={alt} />
         <div className="card__info">
            <h2 className="card__name">{text}</h2>
            {location.pathname===`/movies` ? (
               <button 
               onClick={handleOnClick}
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
         <p className="card__duration">
            {durationHours > 0 ? `${durationHours}ч ${durationMinutes}` : durationMinutes}
         </p>
      </div>
   )
}