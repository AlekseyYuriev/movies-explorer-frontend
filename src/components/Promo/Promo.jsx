import './Promo.css';
import promoLogo from '../../images/promo-logo.svg';
import { Link } from 'react-scroll';

export default function Promo () {
   return (
      <section className="promo">
      <div className='promo__content'>
         <div className='promo__text'>
            <h1 className='promo__title'>Учебный проект студента <span className='promo__span'>факультета</span> Веб-разработки.</h1>
            <p className='promo__info'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
         </div>
         <img src={promoLogo} className='promo__logo' alt='Мир веб-разрабоки'/>
      </div>
      <Link className='promo__button' to="about-project" smooth={true}>Узнать больше</Link>
      </section>
   )
}