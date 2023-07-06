import React from "react";
import Navbar from "../Navbar";
import { useState } from 'react';
import "./login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      // Perform login API call or authentication logic here
      // Replace the following code with your actual implementation

      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Check username and password
      if (username === 'admin' && password === 'password') {
        // Successful login
        alert('Login successful!');
      } else {
        // Invalid credentials
        setIsError(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsError(true);
    }

    setIsLoading(false);
  };
  return (
    <body> 
    <Navbar selected="login"/>  
      <div className="login-page">
      <div className="login-container">
        <h1>Welcome to Rent A Vehicle</h1> 
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isError && <p className="error-message">Invalid username or password.</p>}
          <button type="button" onClick={handleLogin} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
    </body>
  );
}

export default Login;
