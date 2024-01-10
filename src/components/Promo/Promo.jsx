import './Promo.css';
import promoLogo from '../../images/promo-logo.svg';

export default function Promo () {
   return (
      <section className="promo">
      <div className='promo__content'>
         <div className='promo__text'>
            <h1 className='promo__title'>Учебный проект студента факультета <br></br> Веб-разработки.</h1>
            <p className='promo__info'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
         </div>
         <img src={promoLogo} className='promo__logo' alt='Мир веб-разрабоки'/>
      </div>
      <button className='promo__button'>Узнать больше</button>
      </section>
   )
}