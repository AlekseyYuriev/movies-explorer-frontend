import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useInput } from '../../hooks/customHookValidation';
import { EMAIL_DATA_ERROR_MESSAGE, USER_DATA_ERROR_MESSAGE, USER_DATA_SUCCESS_MESSAGE } from '../../utils/constants';

export default function Profile ({ loggedIn, signOut, onSubmit, isLoading }) {

   const currentUser = useContext(CurrentUserContext);
   const name = useInput(currentUser.name, {isEmpty: true, minLength: 2, isName: true});
   const email = useInput(currentUser.email, {isEmpty: true, isEmail: true});
   const [serverMessage, setServerMessage] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   const handleProfile = async (e) => {
      e.preventDefault();
      if (name.errors.length !== 0 || email.errors.length !== 0) {
         return;
      }
      try {
         await onSubmit(name.value, email.value)
         setServerMessage(USER_DATA_SUCCESS_MESSAGE)
      } catch (error) {
         if (error.statusCode === 409) {
            setErrorMessage(EMAIL_DATA_ERROR_MESSAGE)
         } else {
            setErrorMessage(USER_DATA_ERROR_MESSAGE)
         }
      }
   }

   const handleNameChange = (e) => {
      name.onChange(e);
      setServerMessage(''); 
      setErrorMessage('');
   }

   const handleEmailChange = (e) => {
      email.onChange(e);
      setServerMessage('');
      setErrorMessage('');
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
                           onChange={handleNameChange}
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
                        {(name.isDirty && name.errors.length !== 0) && name.errors.map(error => (error))}
                     </div>
                     <label className='profile__label'>
                        E-mail
                        <input 
                           value={email.value}
                           onChange={handleEmailChange}
                           onBlur={e => email.onBlur(e)}
                           className='profile__input' 
                           id="password"
                           name="password" 
                           type="email" 
                           placeholder='pochta@yandex.ru'
                           />
                     </label>
                     <div className='profile__input-error profile__input-error_email'>
                        {(email.isDirty && email.errors.length !== 0) && email.errors.map(error => (error))}
                     </div>
                     <div className='profile__show-message'>
                     {serverMessage &&                         
                     (<div className='profile__server-message'>
                           {serverMessage}
                     </div>)}
                     {errorMessage &&                         
                     (<div className='profile__error-message'>
                           {errorMessage}
                     </div>)}
                        <button disabled={(currentUser.name === name.value && currentUser.email === email.value) || email.errors.length !==0 || name.errors.length !==0 || isLoading} type='submit' className='profile__button'>Редактировать</button>
                        <button onClick={signOut} to='/' title='На главную' className='profile__button profile__button-signout'>Выйти из аккаунта</button>
                     </div>
                  </fieldset>
               </form>
            </section>
         </main>
      </>
   )
}