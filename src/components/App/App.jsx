import React, { useCallback, useEffect } from 'react';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
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
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const checkJWT = useCallback(async (token) => {
    try {
      if (!token) {
        return
      }
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
      checkJWT(token);
    }
  }, [isCheckingToken, loggedIn, checkJWT]);

  const handleLogin = async (email, password) => {
    try {
      setIsLoading(true);
      const user = await login(email, password);
      localStorage.setItem('token', user.token);
      await checkJWT(user.token);
      setLoggedIn(true);
      navigate('/movies');
    } finally {
      setIsLoading(false);
    }
  }

  const createUser = async (name, email, password) => {
    try {
      setIsLoading(true);
      const user = await register(name, email, password);
      await handleLogin(user.email, password);
      setLoggedIn(true);
      navigate('/movies');
    } finally {
      setIsLoading(false);
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
      setIsLoading(true);
      const newUserData = await updateUser(name, email);
      setCurrentUser(newUserData);
    } finally {
      setIsLoading(false);
    }
  }

  if(isCheckingToken) {
    return null;
  }

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="page">
        <Routes>
          <Route 
              path='/'
              element={
              <Main
                loggedIn={loggedIn}
              />} 
            />
          <Route path='/signup' element={loggedIn ? <Navigate to='/' replace /> : <Register onSubmit={createUser} isLoading={isLoading} />}
          />
          <Route path='/signin' element={loggedIn ? <Navigate to='/' replace /> : <Login onSubmit={handleLogin} isLoading={isLoading} />}
          />
          <Route 
            path='/profile'
            element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={loggedIn}
                signOut={signOut}
                onSubmit={changeUserData}
                isLoading={isLoading}
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
