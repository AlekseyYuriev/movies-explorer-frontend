import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useState } from 'react';
import Main from '../Main/Main';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { checkToken, login, register } from '../../utils/MainApi';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  //состояние для прелоадреа
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      tokenCheck();
    }
  }, [token]);

  const tokenCheck = async () => {
    try {
      const userData = await checkToken(token);

      setLoggedIn(true);
      setCurrentUser(userData);
      navigate('/movies');
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    console.log(email, password);
    try {
      const user = await login(email, password);
      localStorage.setItem('token', user.token);
      setLoggedIn(true);
      navigate('/movies');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const createUser = async (name, email, password) => {
    setIsLoading(true);
    try {
      const user = await register(name, email, password);
      console.log(user);
      await handleLogin(user.email, password);

      setLoggedIn(true);
      navigate('/movies');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const signOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/signin', {replace: true});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route 
            path='/'
            element={
            <Main
              loggedIn={loggedIn}
            />} 
          />
          <Route 
            path='/signup' 
            element={
              <Register
                onSubmit={createUser}
              />}
          />
          <Route 
            path='/signin' 
            element={
              <Login
                onSubmit={handleLogin}
              />}
          />
          <Route 
            path='/profile'
            element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={loggedIn}
                signOut={signOut}
              />}
          />
          <Route 
            path='/movies' 
            element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={loggedIn}
              />}
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement 
                element={SavedMovies}
                loggedIn={loggedIn}
              />}
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
