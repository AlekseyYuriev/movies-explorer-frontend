import './Techs.css';

export default function Techs () {
   return (
      <section className='techs'>
         <h2 className='techs__title'>Технологии</h2>
         <div className='techs__content'>
            <h3 className='techs__content_title'>7 технологий</h3>
            <p className='techs__content_subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__list'>
               <li className='techs__list_item'>HTML</li>
               <li className='techs__list_item'>CSS</li>
               <li className='techs__list_item'>JS</li>
               <li className='techs__list_item'>React</li>
               <li className='techs__list_item'>Git</li>
               <li className='techs__list_item'>Express.js</li>
               <li className='techs__list_item'>mongoDB</li>
            </ul>
         </div>
      </section>
   )
}