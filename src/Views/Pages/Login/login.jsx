import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../../Controllers/Redux/authSlice";

import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [formInput, setFormInput] = useState({ name: "", password: "" });

  useEffect(() => {
    if (auth.loggedIn) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  const inputChanged = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    dispatch(signIn(formInput));
  };
  return (
    <div className="login-panel">
      <div className="loginBg">
        <form className="login-panel">
          <h1>Login</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formInput.name}
            onChange={inputChanged}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formInput.password}
            onChange={inputChanged}
          />
          <button type="submit" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
