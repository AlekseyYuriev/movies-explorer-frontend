import React, { useContext } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useInput } from '../../hooks/customHookValidation';

export default function Profile ({ loggedIn, signOut, onSubmit }) {

   const currentUser = useContext(CurrentUserContext);
   const name = useInput(currentUser.name, {isEmpty: true, minLength: 2, isName: true});
   const email = useInput(currentUser.email, {isEmpty: true, isEmail: true});

   const handleProfile = (e) => {
      e.preventDefault();
      if (!name.value || !email.value) {
         return;
      }
      onSubmit(name.value, email.value)
   }

   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <section className='profile'>
               <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
               <form onSubmit={handleProfile} className='profile__form' noValidate>
                  <fieldset className='profile__fieldset'>
                     <label className='profile__label'>
                        Имя
                        <input 
                           value={name.value}
                           onChange={e => name.onChange(e)}
                           onBlur={e => name.onBlur(e)}
                           className='profile__input' 
                           id="email"
                           name="email" 
                           type="email"
                           minLength='2'
                           maxLength='30'
                           placeholder='Виталий'
                           />
                     </label>
                     <div className='profile__input-error profile__input-error_name'>
                        {(name.isDirty && name.errors.lenght !== 0) && name.errors.map(error => (error))}
                     </div>
                     <label className='profile__label'>
                        E-mail
                        <input 
                           value={email.value}
                           onChange={e => email.onChange(e)}
                           onBlur={e => email.onBlur(e)}
                           className='profile__input' 
                           id="password"
                           name="password" 
                           type="email" 
                           placeholder='pochta@yandex.ru'
                           />
                     </label>
                     <div className='profile__input-error profile__input-error_email'>
                        {(email.isDirty && email.errors.lenght !== 0) && email.errors.map(error => (error))}
                     </div>
                     <button disabled={currentUser.name === name.value && currentUser.email === email.value} type='submit' className='profile__button'>Редактировать</button>
                     <button onClick={signOut} to='/' title='На главную' className='profile__button profile__button-signout'>Выйти из аккаунта</button>
                  </fieldset>
               </form>
            </section>
         </main>
      </>
   )
}