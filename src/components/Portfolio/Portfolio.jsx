import './Portfolio.css';

export default function Portfolio () {
   return (
      <section className='portfolio'>
         <h2 className='portfolio__title'>Портфолио</h2>
         <ul className='portfolio__content'>
            <li className='portfolio__info'>
               <a className='portfolio__link' href='https://github.com/AlekseyYuriev/how-to-learn' target='_blank' rel='noopener noreferrer'>
                  Статичный сайт
                  <span className='portfolio__arrow'>↗</span>
               </a>
            </li>
            <li className='portfolio__info'>
               <a className='portfolio__link' href='https://github.com/AlekseyYuriev/russian-travel' target='_blank' rel='noopener noreferrer'>
                  Адаптивный сайт
                  <span className='portfolio__arrow'>↗</span>
               </a>
               
            </li>
            <li className='portfolio__info'>
               <a className='portfolio__link' href='https://github.com/AlekseyYuriev/react-mesto-api-full-gha' target='_blank' rel='noopener noreferrer'>
                  Одностраничное приложение
                  <span className='portfolio__arrow'>↗</span>
               </a>               
            </li>
         </ul>
      </section>
   )
}