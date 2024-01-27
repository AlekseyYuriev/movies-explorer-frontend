import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';

export default function Profile ({ loggedIn, signOut }) {
   return (
      <>
         <Header loggedIn={loggedIn} />
         <main>
            <section className='profile'>
               <h1 className='profile__title'>Привет, Виталий!</h1>
               <form className='profile__form' noValidate>
                  <fieldset className='profile__fieldset'>
                     <label className='profile__label'>
                        Имя
                        <input 
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