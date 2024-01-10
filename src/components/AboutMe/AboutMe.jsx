import './AboutMe.css';
import photoStudent from '../../images/photo.jpg';

export default function AboutMe () {
   return (
      <section className='about-me'>
         <h2 className='about-me__title'>Студент</h2>
         <div className='about-me__content'>
            <div className='about-me__info'>
               <h3 className='about-me__info_name'>Алексей</h3>
               <p className='about-me__info_description'>Фронтенд-разработчик, 33 года</p>
               <p className='about-me__info_text'>Я живу в Минске. Закончил факультет маркетинга в БГЭУ по специальности логистика.</p>
               <a href="https://github.com/AlekseyYuriev" target="_blank" rel="noopener noreferrer" className="about-me__info_link">Github</a>
            </div>
            <img src={photoStudent} className='about-me__photo' alt='Фото студента' />
         </div>
      </section>
   )
}