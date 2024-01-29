import React, { useCallback, useEffect } from 'react';
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
import { checkToken, login, register, updateUser } from '../../utils/MainApi';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  const navigate = useNavigate();

  const tokenCheck = useCallback(async (token) => {
    try {
      const userData = await checkToken(token);
      setLoggedIn(true);
      setCurrentUser(userData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsCheckingToken(false);
    }
  }, []);


  useEffect(() => {
    const token = localStorage.getItem('token')
    if ((token && !loggedIn) || isCheckingToken) {
      tokenCheck();
    }
  }, [isCheckingToken, loggedIn, tokenCheck]);

  const handleLogin = async (email, password) => {
    try {
      const user = await login(email, password);
      localStorage.setItem('token', user.token);
      await tokenCheck(user.token);
      setLoggedIn(true);
      navigate('/movies');
    } catch (error) {
      console.log(error);
    }
  }

  const createUser = async (name, email, password) => {
    try {
      const user = await register(name, email, password);
      await handleLogin(user.email, password);
      setLoggedIn(true);
      navigate('/movies');
    } catch (error) {
      console.log(error);
    }
  }

  const signOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/', {replace: true});
  }

  const changeUserData = async (name, email) => {
    try {
      const newUserData = await updateUser(name, email);
      setCurrentUser(newUserData);
      console.log(newUserData)
    } catch (error) {
      console.log(error);
    }
  }

  if(isCheckingToken) {
    return null;
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
                onSubmit={changeUserData}
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
