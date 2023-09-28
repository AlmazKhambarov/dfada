
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
import Folders from './components/Folders/Folders';

function App() {
  const [user, setUser] = useState()
  auth.onAuthStateChanged(user => {
    setUser(user)
  })
  return (
    <>
      <Routes>
        <Route path='/' element={<Login user={user} />} />
        <Route path='/sign-in' element={<Register />} />
        <Route path='/home' element={user ? <Home user={user} /> : null} />
        <Route path='/home/user' element={user ? <User user={user} /> : null} />
        <Route path='/home/upload' element={user ? <Uploader user={user} /> : null} />
        <Route path='/home/:id' element={user ? <Folders user={user} /> : null} />


      </Routes>
    </>
  );
}

export default App;
