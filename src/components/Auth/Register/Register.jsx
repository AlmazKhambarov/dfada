import React, { useState } from "react";
import "./Register.scss";
import { useDispatch } from "react-redux";
import { Registration } from "../../redux/extraReducer";
const Register = () => {
  const dispatch = useDispatch();
  const [formVisible, setFormVisible] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleLinkClick = () => {
    setFormVisible((prevFormVisible) => !prevFormVisible);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (data != null) {
      dispatch(Registration(data));
    }
  };

  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="username"
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="email"
            placeholder="email address.."
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
          <button type="submit">Create</button>
          <p class="message">
            Already registered? <a href="/">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
