import { Link } from 'react-router-dom';
import './Login.css';
import headerLogo from '../../images/logo.svg';

export default function Login () {
   return (
      <main>
         <section className='login'>
            <Link to='/' className='login__logo' title='На главную'>
               <img src={headerLogo} alt='Логотип проекта' />
            </Link>
            <h1 className='login__title'>Рады видеть!</h1>
            <form className='login__form' noValidate>
               <fieldset className='login__fieldset'>
                  <label className='login__label'>
                     E-mail
                     <input 
                        className='login__input' 
                        id="email"
                        name="email" 
                        type="email"
                        required
                        placeholder='pochta@yandex.ru|' />
                     <span className='login__input-error'></span>
                  </label>
                  <label className='login__label'>
                     Пароль
                     <input 
                        className='login__input' 
                        id="password"
                        name="password" 
                        type="password"
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder='Пароль' />
                     <span className='login__input-error'></span>
                  </label>
                  <button type='submit' className='login__button'>Войти</button>
                  <p className='login__text'>
                     Ещё не зарегистрированы?
                     <Link to='/signup' className='login__redirect' title='На страницу регистрации'>Регистрация</Link>
                  </p>
               </fieldset>
            </form>
         </section>
      </main>
   )
}
