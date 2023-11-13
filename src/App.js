
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
  let userLocal  = JSON.parse(localStorage.getItem("userLocal")) 
  auth.onAuthStateChanged(user => {
    setUser(user)
    if (!userLocal) {
      localStorage.setItem("userLocal" , JSON.stringify(user))
      
    }
  })
  console.log(user)
  return (
    <>
      <Routes>
        <Route path='/' element={userLocal ?<Home user={user} /> :<Login user={user} />} />
        <Route path='/sign-in' element={userLocal ?<Home user={user} /> : <Register />} />
        <Route path='/home' element={userLocal ? <Home user={user} /> : null} />
        <Route path='/home/user' element={userLocal ? <User user={user} /> : null} />
        {/* <Route path='/home/upload' element={userLocal ? <Uploader user={user} /> : null} /> */}
        <Route path='/home/:id' element={userLocal ? <Folders user={user} /> : null} />
      </Routes>
    </>
  );
}

export default App;
