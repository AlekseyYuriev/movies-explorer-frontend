import { Link } from 'react-router-dom';
import './Register.css';
import headerLogo from '../../images/logo.svg';

export default function Register () {
   return (
      <section className='register'>
         <Link to='/' className='register__logo' title='На главную'>
            <img src={headerLogo} alt='Логотип проекта' />
         </Link>
         <h2 className='register__title'>Добро пожаловать!</h2>
         <form className='register__form' noValidate>
            <fieldset className='register__fieldset'>
               <label className='register__label'>
                  Имя
                  <input 
                     className='register__input' 
                     id="name"
                     name="name" 
                     type="text" />
                  <div className='name-error register__input-error'></div>
               </label>
               <label className='register__label'>
                  E-mail
                  <input 
                     className='register__input' 
                     id="email"
                     name="email" 
                     type="email" />
                  <div className='email-error register__input-error'></div>
               </label>
               <label className='register__label'>
                  Пароль
                  <input 
                     className='register__input' 
                     id="password"
                     name="password" 
                     type="password" />
                  <div className='password-error register__input-error'>Что-то пошло не так...</div>
               </label>
               <button type='submit' className='register__button'>Зарегистрироваться</button>
               <p className='register__text'>
                  Уже зарегистрированы?
                  <Link to='/signin' className='register__redirect' title='На страницу авторизации'>Войти</Link>
               </p>
            </fieldset>
         </form>
      </section>
   )
}