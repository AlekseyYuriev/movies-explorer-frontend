import './Footer.css';

export default function Footer () {
   return (
      <footer className='footer'>
         <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
         <div className='footer__content'>
            <p className='footer__year'>© 2024</p>
            <ul className='footer__links'>
               <li>
                  <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel='noopener noreferrer'>Яндекс.Практикум</a>
               </li>
               <li>
                  <a className='footer__link' href='https://github.com/AlekseyYuriev' target='_blank' rel='noopener noreferrer'>Github</a>
               </li>
            </ul>
         </div>
      </footer>
   )
}