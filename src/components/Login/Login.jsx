import { Link } from 'react-router-dom';
import './Login.css';
import headerLogo from '../../images/logo.svg';
import { useState } from 'react';

export default function Login ({ onSubmit }) {

   const [formValue, setFormValue] = useState({
      email: '',
      password: ''
   });

   const handleChange = (e) => {
      const {name, value} = e.target;

      setFormValue({
         ...formValue,
         [name]: value
      });
   }

   const handleLogin = (e) => {
      e.preventDefault();
      if (!formValue.email || !formValue.password) {
         return;
      }
      onSubmit(formValue.email, formValue.password)
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
                        value={formValue.email}
                        onChange={handleChange}
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
                        value={formValue.password}
                        onChange={handleChange}
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
