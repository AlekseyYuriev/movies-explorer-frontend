import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import headerLogo from '../../images/logo.svg';
import { useInput } from '../../hooks/customHookValidation';

export default function Login ({ onSubmit }) {

   const email = useInput('', {isEmpty: true, isEmail: true});
   const password = useInput('', {isEmpty: true, minLength: 5});

   const handleLogin = (e) => {
      e.preventDefault();
      if (!email.value || !password.value) {
         return;
      }
      onSubmit(email.value, password.value)
   }

   return (
      <main>
         <section className='login'>
            <Link to='/' className='login__logo' title='На главную'>
               <img src={headerLogo} alt='Логотип проекта' />
            </Link>
            <h1 className='login__title'>Рады видеть!</h1>
            <form onSubmit={handleLogin} className='login__form' noValidate>
               <fieldset className='login__fieldset'>
                  <label className='login__label'>
                     E-mail
                     <input 
                        value={email.value}
                        onChange={e => email.onChange(e)}
                        onBlur={e => email.onBlur(e)}
                        className='login__input' 
                        id="email"
                        name="email" 
                        type="email"
                        required
                        placeholder='pochta@yandex.ru|' />
                     <span className='login__input-error'>
                        {(email.isDirty && email.errors.lenght !== 0) && email.errors.map(error => (error))}
                     </span>
                  </label>
                  <label className='login__label'>
                     Пароль
                     <input 
                        value={password.value}
                        onChange={e => password.onChange(e)}
                        onBlur={e => password.onBlur(e)}
                        className='login__input' 
                        id="password"
                        name="password" 
                        type="password"
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder='Пароль' />
                     <span className='login__input-error'>
                        {(password.isDirty && password.errors.lenght !== 0) && password.errors.map(error => (error))}
                     </span>
                  </label>
                  <button disabled={email.errors.length !==0 || password.errors.length !==0} type='submit' className='login__button'>Войти</button>
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
