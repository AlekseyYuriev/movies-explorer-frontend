import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="page">
      <Routes>
        <Route 
          path='/'
          element={<Main
          loggedIn={loggedIn}
          />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route 
          path='/profile'
          element={<Profile
          loggedIn={loggedIn}
          />} />
          <Route path='/movies' element={<Movies
            loggedIn={loggedIn}
            />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
