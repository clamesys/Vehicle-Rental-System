import React from "react";
import Navbar from "../Navbar";
import { useState } from 'react';
import "./register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      // Perform registration API call or logic here
      // Replace the following code with your actual implementation

      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Check if passwords match
      if (password !== confirmPassword) {
        setIsError(true);
        return;
      }

      // Successful registration
      alert("Registration successful!");
      // Redirect to login page or perform other actions
    } catch (error) {
      console.error("Registration error:", error);
      setIsError(true);
    }

    setIsLoading(false);
  };
  return (
    <body>
      <Navbar />
      {" "}
      <div className="register-page">
        <div className="register-container">
          <h1>Create an Account</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {isError && (
              <p className="error-message">
                Error occurred during registration.
              </p>
            )}
            <button type="button" onClick={handleRegister} disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Register;
