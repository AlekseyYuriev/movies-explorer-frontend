import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
import profileMovies from '../../images/profile-movies.svg';
import Navigation from '../Navigation/Navigation';

export default function Header ({ loggedIn }) {

   let location = useLocation();
   const [isOpen, setIsOpen] = useState(false);

   const burgerMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <header className={location.pathname===`/` ? 'header header-main' : 'header'} >
            <Link to='/' className='header__logo link' title='На главную'>
               <img src={headerLogo} alt='Логотип проекта' />
            </Link>
            {loggedIn === false ? (
               <nav>
                  <ul className='header__content'>
                     <li>
                        <Link to='/signup' className='header__signup link'>Регистрация</Link>
                     </li>
                     <li>
                        <Link to='/signin' className='header__signin link'>Войти</Link>
                     </li>
                  </ul>
               </nav>
            ) : (
               <>
                  <nav>
                     <ul className='header__content-movies'>
                        <li>
                           <Link 
                              to='/movies'
                              className={location.pathname===`/` ? 'header__content-movies_link link' : 'header__content-movies_link header__content-movies_link-dark link'}
                              >
                              Фильмы
                           </Link>
                        </li>
                        <li>
                           <Link 
                              to='/saved-movies'
                              className={location.pathname===`/` ? 'header__content-movies_link link' : 'header__content-movies_link header__content-movies_link-dark link'}
                              >
                              Сохранённые фильмы
                           </Link>
                        </li>
                     </ul>
                  </nav>
                  <Link to='/profile' className='header__profile link'>
                        <img src={location.pathname===`/` ? profile : profileMovies} alt='Профиль' />
                  </Link>
                  <button className={isOpen ? 'header__nav-button clicked' : 'header__nav-button'} onClick={burgerMenu}>
                     <span className={isOpen ? 'header__nav-button_icon clicked' : 'header__nav-button_icon'}></span>
                     <span className={isOpen ? 'header__nav-button_icon clicked' : 'header__nav-button_icon'}></span>
                     <span className={isOpen ? 'header__nav-button_icon clicked' : 'header__nav-button_icon'}></span>
                  </button>
               </>
            )}
         </header>
         {isOpen && (
            <Navigation />
         )}
      </>
   )
}