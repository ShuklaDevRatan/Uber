import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from "./pages/Start"
import UserLogin from './pages/UserLogin';
import UserLogout from './pages/UserLogout';
import UserSignup from './pages/UserSignup';
import CaptionLogin from './pages/CaptionLogin';
import CaptionSignup from './pages/CaptionSignup';
import { UserDataContext } from './context/UserContext';
import UserProtectWrapper from './pages/UserProtectWrapper';
import CaptionHome from './pages/CaptionHome';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/caption-login' element={<CaptionLogin />} />
        <Route path='/caption-signup' element={<CaptionSignup />} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        } />
        <Route path='/caption-home' element={<CaptionHome />} />
      </Routes>
    </div>
  )
}

export default App