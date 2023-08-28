
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Home from './components/Home/Home';
import User from './components/User/User'
import Uploader from './components/Uploader/Uploader'
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './components/redux/api/firebase';
function App() {
  const [user, setUser] = useState()
  auth.onAuthStateChanged(user => {
    setUser(user)
  })
  return (
    <>
      <Routes>
        <Route path='/' element={user ? <Home user={user} /> : <Login user={user} />} />
        <Route path='/sign-in' element={user ? <Home user={user} /> : <Register />} />
        <Route path='/home' element={user ? <Home user={user} /> : <Login />} />
        <Route path='/home/user' element={user ? <User user={user} /> : <Login />} />
        <Route path='/home/upload' element={user ? <Uploader user={user} /> : <Login />} />

      </Routes>
    </>
  );
}

export default App;
