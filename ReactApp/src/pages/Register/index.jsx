import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import axios from 'axios';
import './register.css'; // CSS dosyasını eklemeyi unutmayın

function index() {
  const [inputs, setInputs] = useState({
    UserId: '',
    Name: '',
    Email: '',
    Password: '',
    Age: '',
    Adress: '',
    TelNo: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    
  };
  const [err, setErr] = useState(false);
  const [errors, setErrors] = useState({
    UserId: false,
    Name: false,
    Email: false,
    Password: false,
    TelNo: false,
  });
  
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    let hasErrors = false;
    for (const field in inputs) {
      if ( inputs[field] === '') {
        newErrors[field] = true;
        hasErrors = true;
      } else {
        newErrors[field] = false;
      }
    }
    setErrors(newErrors);

    if (!hasErrors) {
      try {
        await axios.post('http://localhost:8800/api/auth/register', inputs);
      }
       catch (error) {
        setErr(error.response.data);
        console.error('Register error:', error); 
        setIsRegister(false);
      } 
      setIsRegister(true);
    }
    
  }; 

  return (
    <>
      <Navbar selected="register" />

      <div className="register-page">
        <div className="register-container">
          <h1>Create New Account</h1> 
          <form className="register-form" onSubmit={handleSubmit}> 
            <input
              type="number"
              name="UserId"
              placeholder="T.C. ID"
              value={inputs.UserSSN}
              onChange={handleChange}
              className={errors.UserId ? 'error' : ''} 
            />
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={inputs.Name}
              onChange={handleChange}
              className={errors.Name ? 'error' : ''} 
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={inputs.Email}
              onChange={handleChange}
              className={errors.Email ? 'error' : ''} 
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={inputs.Password}
              onChange={handleChange}
              className={errors.Password ? 'error' : ''} 
            />
            <input
              type="number"
              name="Age"
              placeholder="Age"
              value={inputs.Age}
              className={errors.Age ? 'error' : ''} 
              onChange={handleChange}
            />
            <input
              type="tel"
              name="TelNo"
              placeholder="Telephone Number"
              value={inputs.TelNo}
              onChange={handleChange}
              className={errors.TelNo ? 'error' : ''} 
            /> 
            <input
              name="Adress"
              placeholder="Adress"
              value={inputs.Address}
              className={errors.Address ? 'error' : ''} 
              onChange={handleChange}
            />
            {err && <p className="error-message">{err}</p>}
            {isRegister&&!err && <p className="success-message">Success!</p>}
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default index;