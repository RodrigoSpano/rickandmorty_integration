import React from 'react';
import './App.css';
import Nav from './components/searchBar/Nav';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CharacterDetail from './pages/CharacterDetail';
import { useLocation } from 'react-router-dom';
import Favourites from './pages/Favourites';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { Navigate } from 'react-router-dom';
import ErrorPage from './pages/errorPage/ErrorPage';
import LoginPage from './pages/LoginPage';

function App() {

  const location = useLocation()

  return (
    <div className='App'>
      {location.pathname.startsWith('/auth') || location.pathname.startsWith('/error') ? null : <Nav />}
      <Routes>
        <Route path='/auth/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<CharacterDetail />} />
          <Route path='/characters/favourites' element={<Favourites />} />
        </Route>
        <Route path='/errorPage' element={<ErrorPage />} />
        <Route path='*' element={<Navigate to='/errorPage' replace />} />
      </Routes>
    </div>
  );
}

export default App
