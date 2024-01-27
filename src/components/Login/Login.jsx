import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import headerLogo from '../../images/logo.svg';
import { useInput } from '../../hooks/customHookValidation';



export default function Login ({ onSubmit }) {

   const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true});
   const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 30});

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
                     {(email.isDirty && email.isEmpty) && 'Поле не может быть пустым. '}
                     {(email.isDirty && email.minLengthError) && 'Минимальная длина символов 3. '}
                     {(email.isDirty && email.emailError) && 'Некорректный E-mail. '}
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
                     {(password.isDirty && password.isEmpty) && 'Поле не может быть пустым. '}
                     {(password.isDirty && password.minLengthError) && 'Минимальная длина символов 5. '}
                     {(password.isDirty && password.maxLengthError) && 'Максимальная длина 30 символов. '}
                     </span>
                  </label>
                  <button disabled={!email.inputValid || !password.inputValid} type='submit' className='login__button'>Войти</button>
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
