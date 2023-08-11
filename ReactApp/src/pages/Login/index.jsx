import React from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const loginContext = useContext(AuthContext).loginContext;

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [inputs, setInputs] = useState({
    Email: "",
    Password: "",
  });


  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    for (const field in inputs) {
      if (inputs[field] === "") {
        setIsError(true);
        return;
      }
    }

    await loginContext(inputs)
      .then((res) => {
        setIsLoading(true);
        setIsLogin(true);
        setIsError(false);
        navigate("/");
      })
      .catch((err) => {
        setIsError(true);
        setIsLogin(false);
      }); 
    setIsLoading(false);
  };
  return (
    <>
      <Navbar selected="login" />
      <div className="login-page">
        <div className="login-container">
          <h1>Welcome to Rent A Vehicle</h1>
          <h2>Please Login</h2>
          <form>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={inputs.Email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              value={inputs.Password}
              onChange={handleChange}
            />
            {isError && (
              <p className="error-message">Invalid username or password.</p>
            )}
            {isLogin && !isError && <p className="success-message">Success!</p>}
            <button type="button" onClick={handleLogin} disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
