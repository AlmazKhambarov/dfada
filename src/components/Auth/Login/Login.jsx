import React, { useState } from "react";
import "../Register/Register.scss";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../../redux/extraReducer";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { errorData, user} = useSelector((state) => state.login);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    if (data != null) {
      dispath(UserLogin(data));
    }
    if(user === "logged"){
      navigate('/home')
    }
  };
  
  console.log(user);
  return (
    <div class="login-page">
      <div class="form">
        {errorData ? <span style={{ color: "red" }}>{errorData}</span> : null}
        <form class="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="email address"
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="sign-in">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
