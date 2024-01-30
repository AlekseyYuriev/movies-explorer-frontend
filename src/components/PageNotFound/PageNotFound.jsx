import { Link, useNavigate } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFound () {

const navigate = useNavigate();

const handleLinkOnclick = (e) => {
   e.preventDefault();
   navigate(-1);
}

   return (
      <section className='notfound'>
         <h1 className='notfound__title'>404</h1>
         <p className='notfound__text'>Страница не найдена</p>
         <Link onClick={handleLinkOnclick} to='/' className='notfound__link' title='На главную'>Назад</Link>
      </section>
   )
}
