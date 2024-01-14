import { Link } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFound () {
   return (
      <section className='notfound'>
         <h2 className='notfound__title'>404</h2>
         <p className='notfound__text'>Страница не найдена</p>
         <Link to='/' className='notfound__link' title='На главную'>Назад</Link>
      </section>
   )
}
