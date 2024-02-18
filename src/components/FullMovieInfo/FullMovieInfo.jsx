import React, { useCallback, useEffect, useState } from "react";
import './FullMovieInfo.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../utils/MoviesApi";
import { MOVIES_URL } from "../../utils/constants";

export default function FullMovieInfo ({ loggedIn }) {

   const params = useParams();
   const [movie, setMovie] = useState(null);
   const [isLoadingMovie, setIsLoadingMovie] = useState(false);

   async function getFilmById(id) {
      setIsLoadingMovie(true);
      const film = await getMovieById(id);
      setMovie(film);
      setIsLoadingMovie(false);
   }

   // const getFilmById = async () => {
   //    setIsLoadingMovie(true)
   //    const films = await JSON.parse(localStorage.getItem('films'))
   //    const film = films[params.id-1];
   //    setMovie(film);
   //    setIsLoadingMovie(false)
   // }

   useEffect(() => {
      getFilmById(params.id);
   }, [params.id])

   return (
      <>
         <Header loggedIn={loggedIn}/>
         {isLoadingMovie || movie===null ? <Preloader /> : (
            <div className="fullmovie__info">
                  <img 
                     className="movie__image" 
                     src={`${MOVIES_URL}/${movie.image.url}`}
                     alt={movie.nameRU} />
                  <div className="movie__info">
                     <p className="movie__text">Страна</p>
                     <p className="movie__text">{movie.country}</p>
                     <p className="movie__text">Описание</p>
                     <p className="movie__text">{movie.description}</p>
                     <p className="movie__text">Режиссёр</p>
                     <p className="movie__text">{movie.director}</p>
                     <p className="movie__text">Продолжительность</p>
                     <p className="movie__text">{movie.duration} мин</p>
                     <p className="movie__text">Название EN</p>
                     <p className="movie__text">{movie.nameEN}</p>
                     <p className="movie__text">Название RU</p>
                     <p className="movie__text">{movie.nameRU}</p>
                     <p className="movie__text">Смотреть трейлер</p>
                     <a className="movie__text" href={movie.trailerLink} target="_blank" rel="noreferrer">{movie.trailerLink}</a>
                     <p className="movie__text">Год выпуска</p>
                     <p className="movie__text">{movie.year}</p>
                  </div>
               </div>)  
         }
         <Footer />
      </>
   )
}