import { Link } from 'react-router-dom';
import './Register.css';
import headerLogo from '../../images/logo.svg';

export default function Register () {
   return (
      <main>
         <section className='register'>
            <Link to='/' className='register__logo' title='На главную'>
               <img src={headerLogo} alt='Логотип проекта' />
            </Link>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form' noValidate>
               <fieldset className='register__fieldset'>
                  <label className='register__label'>
                     Имя
                     <input 
                        className='register__input' 
                        id="name"
                        name="name" 
                        type="text"
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder='Виталий' />
                     <span className='register__input-error'></span>
                  </label>
                  <label className='register__label'>
                     E-mail
                     <input 
                        className='register__input' 
                        id="email"
                        name="email" 
                        type="email"
                        required
                        placeholder='pochta@yandex.ru|' />
                     <span className='register__input-error'></span>
                  </label>
                  <label className='register__label'>
                     Пароль
                     <input 
                        className='register__input register__input_password' 
                        id="password"
                        name="password" 
                        type="password"
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder='••••••••••••••' />
                     <span className='register__input-error'>Что-то пошло не так...</span>
                  </label>
                  <button type='submit' className='register__button'>Зарегистрироваться</button>
                  <p className='register__text'>
                     Уже зарегистрированы?
                     <Link to='/signin' className='register__redirect' title='На страницу авторизации'>Войти</Link>
                  </p>
               </fieldset>
            </form>
         </section>
      </main>
      
   )
}