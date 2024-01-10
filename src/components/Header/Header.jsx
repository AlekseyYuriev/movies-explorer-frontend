import './Header.css';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg';

export default function Header () {
   return (
      <header className='header'>
         <Link to='/' className='header__logo link' title='На главную'>
            <img src={headerLogo} alt='Логотип проекта' />
         </Link>
         <div className='header__content'>
            <button className='header__signup link'>Регистрация</button>
            <button className='header__signin link'>Войти</button>
         </div>
      </header>
   )
}