import React from "react";
import Header from "../Header/Header";
import "../Auth/Register/Register.scss";
import "./User.scss";
import { auth } from "../redux/api/firebase";
const User = () => {
  const handleLogout = () => auth.signOut();
  return (
    <div>
      <Header />
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <button className="log_out" onClick={handleLogout}>
              Log out
            </button>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email address.." />
            <input type="password" placeholder="password" />
            <button>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
