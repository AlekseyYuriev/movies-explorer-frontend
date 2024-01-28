import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import headerLogo from '../../images/logo.svg';
import { useInput } from '../../hooks/customHookValidation';

export default function Register ({ onSubmit }) {

   const name = useInput('', {isEmpty: true, isName: true, minLength: 2});
   const email = useInput('', {isEmpty: true, isEmail: true});
   const password = useInput('', {isEmpty: true, minLength: 5});

   const handleRegister = (e) => {
      e.preventDefault();
      if (!name.value || !email.value || !password.value) {
         return;
      }
      onSubmit(name.value, email.value, password.value)
   }

   return (
      <main>
         <section className='register'>
            <Link to='/' className='register__logo' title='На главную'>
               <img src={headerLogo} alt='Логотип проекта' />
            </Link>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form onSubmit={handleRegister} className='register__form' noValidate>
               <fieldset className='register__fieldset'>
                  <label className='register__label'>
                     Имя
                     <input 
                        value={name.value}
                        onChange={e => name.onChange(e)}
                        onBlur={e => name.onBlur(e)}
                        className='register__input' 
                        id="name"
                        name="name" 
                        type="text"
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder='Виталий' />
                     <span className='register__input-error'>
                        {(name.isDirty && name.errors.lenght !== 0) && name.errors.map(error => (error))}
                     </span>
                  </label>
                  <label className='register__label'>
                     E-mail
                     <input 
                        value={email.value}
                        onChange={e => email.onChange(e)}
                        onBlur={e => email.onBlur(e)}
                        className='register__input' 
                        id="email"
                        name="email" 
                        type="email"
                        required
                        placeholder='pochta@yandex.ru|' />
                     <span className='register__input-error'>
                        {(email.isDirty && email.errors.lenght !== 0) && email.errors.map(error => (error))}
                     </span>
                  </label>
                  <label className='register__label'>
                     Пароль
                     <input 
                        value={password.value}
                        onChange={e => password.onChange(e)}
                        onBlur={e => password.onBlur(e)}
                        className='register__input register__input_password' 
                        id="password"
                        name="password" 
                        type="password"
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder='••••••••••••••' />
                     <span className='register__input-error'>
                        {(password.isDirty && password.errors.lenght !== 0) && password.errors.map(error => (error))}
                     </span>
                  </label>
                  <button 
                     type='submit' 
                     className='register__button'
                  >
                     Зарегистрироваться</button>
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