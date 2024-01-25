import React from "react";
import './Navigation.css';
import { Link } from "react-router-dom";
import profileMovies from '../../images/profile-movies.svg';

export default function Navigation () {
   return (
      <div className='header-nav'>
      <nav className='header-nav__list'>
         <ul className='header-nav__items'>
            <li>
               <Link to='/' className='header-nav__link'>Главная</Link>
            </li>
            <li>
               <Link to='/movies' className='header-nav__link'>Фильмы</Link>
            </li>
            <li>
               <Link to='/saved-movies' className='header-nav__link'>Сохранённые фильмы</Link>
            </li>
         </ul>
         <Link to='/profile' className='header-nav__profile'>
               <img src={profileMovies} alt='Профиль' />
         </Link>
      </nav>
   </div>
   )
}