import './AboutProject.css';

export default function AboutProject () {
   return(
      <section className='about-project'>
         <h2 className='about-project__title'>О проекте</h2>
         <div className='about-project__content'>
            <h3 className='about-project__content-title'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <h3 className='about-project__content-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
         </div>
         <div className='about-project__duration'>
            <p className='about-project__duration-title about-project__duration-title_backend'>1 неделя</p>
            <p className='about-project__duration-title'>4 недели</p>
            <p className='about-project__duration-text'>Back-end</p>
            <p className='about-project__duration-text'>Front-end</p>
         </div>
      </section>
   )
}