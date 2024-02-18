import React, { useCallback } from "react";
import './MoviesCard.css';
import { useLocation, useNavigate } from "react-router-dom";
import { deleteMovie, saveMovie } from "../../utils/MoviesApi";

export default function MoviesCard ({ 
   movie,
   image,
   text,
   saved,
   alt,
   duration,
   country,
   director,
   year,
   description,
   trailerLink,
   thumbnail,
   movieId,
   nameEN,
   id,
   onMovieDeleted,
   onMovieSaved 
}) {

   const location = useLocation();
   let router = useNavigate();

   const handleClick = () => {
      router(`/movies/${movie.id}`)
   }

   const durationHours = Math.floor(duration/60);
   const durationMinutes = duration%60 > 0 ? `${duration%60}м` : '';

   const handleDeleteClick = useCallback( async () => {
      await deleteMovie(id);
      if(onMovieDeleted) {
         onMovieDeleted(id);
      }
   }, [id, onMovieDeleted])

   const handleSaveClick = useCallback( async () => {

      if(saved) {
         await handleDeleteClick();
         return;
      }

      const newMovie = await saveMovie({
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
      if(onMovieSaved) {
         onMovieSaved(newMovie)
      }
   }, [country, description, director, duration, handleDeleteClick, image, movieId, nameEN, onMovieSaved, saved, text, thumbnail, trailerLink, year])

   return (
      <div className="card">
      <a href={trailerLink} target="_blank" rel="noreferrer" className="card__link">
         <img src={image} className="card__image" alt={alt} />
      </a>
         <div className="card__info">
            <h2 className="card__name">{text}</h2>
            {location.pathname===`/movies` ? (
               <button 
               onClick={handleSaveClick}
               type="button" 
               aria-label="сохранить фильм в избранное" 
               className={saved ? 'card__like-button card__like-button_active' : 'card__like-button'}
               />
            ) : (
               <button 
               onClick={handleDeleteClick}
               type="button" 
               aria-label="удалить фильм" 
               className="card__delete-button"
               />
            )}
         </div>
         <div className="card__addition">
            <p className="card__duration">
               {durationHours > 0 ? `${durationHours}ч ${durationMinutes}` : durationMinutes}
            </p>
            <button 
               onClick={handleClick}
               to='/full-movie' 
               className="card__addition-button" >
                  Подробнее о фильме</button>
         </div>
      </div>
   )
}