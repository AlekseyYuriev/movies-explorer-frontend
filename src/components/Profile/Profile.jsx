import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const useInput = (initialValue) => {
   const [value, setValue] = useState(initialValue);
   const [isDirty, setDirty] = useState(false);

   const onChange = (e) => {
      setValue(e.target.value)
   }

   const onBlur = (e) => {
      setDirty(true)
   }

   return {
      value,
      onChange,
      onBlur
   }
}

export default function Profile ({ loggedIn, signOut }) {

   const { name, email } = useContext(CurrentUserContext);
   // const email = useInput('');
   // const password = useInput('');

   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <section className='profile'>
               <h1 className='profile__title'>{`Привет, ${name}!`}</h1>
               <form className='profile__form' noValidate>
                  <fieldset className='profile__fieldset'>
                     <label className='profile__label'>
                        Имя
                        <input 
                           value={name}
                           className='profile__input' 
                           id="email"
                           name="email" 
                           type="email"
                           minLength='2'
                           maxLength='30'
                           placeholder='Виталий'
                           />
                     </label>
                     <div className='profile__input-error profile__input-error_name'></div>
                     <label className='profile__label'>
                        E-mail
                        <input 
                           value={email}
                           className='profile__input' 
                           id="password"
                           name="password" 
                           type="email" 
                           placeholder='pochta@yandex.ru'
                           />
                     </label>
                     <div className='profile__input-error profile__input-error_email'></div>
                     <button type='submit' className='profile__button'>Редактировать</button>
                     <button onClick={signOut} to='/' title='На главную' className='profile__button profile__button-signout'>Выйти из аккаунта</button>
                  </fieldset>
               </form>
            </section>
         </main>
      </>
   )
}