/** @format */

import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "../Auth/Register/Register.scss";
import "./User.scss";
import { auth } from "../redux/api/firebase";
import { useNavigate } from "react-router-dom";
import { changeUserProfile } from "../redux/extraReducer";
import { useDispatch, useSelector } from "react-redux";
const User = ({user}) => {
  const {userL} = useSelector(state=>state.login)
  const navigate = useNavigate();
  const [currUser, setCurrUser] = useState("")
  const handleLogout = () => {
    auth.signOut();
    localStorage.clear();
    navigate("/");
  };
  let userUid;
useEffect(()=>{
   userUid = JSON.parse(localStorage.getItem("userLocal"));
},[userL])
  const [data, setData] = useState({
    user: userUid?.uid,
    username: user?.displayName,
  });
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setCurrUser(user)
    })
  },[])
  console.log(data)
 const dispatch = useDispatch()
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(changeUserProfile(data))
  }
  return (
    <div>
      <Header />
      <div class='login-page'>
        <div class='form'>
          <p>User Name:</p>
          <span style={{display:"block", textAlign:"start", fontWeight:"bold"}}>{userUid?.displayName}</span>
          <form class='login-form'>
            <button className='log_out' onClick={handleLogout}>
              Log out
            </button>
            <input
              type='text'
              placeholder='username'
              value={data.username}
              onChange={(e) =>
                setData((prev) => ({ ...prev, username: e.target.value }))
              }
            />

            <button onClick={handleSubmit}>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
