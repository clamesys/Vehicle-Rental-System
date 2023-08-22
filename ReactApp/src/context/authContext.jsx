import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") == null
      ? null
      : JSON.parse(localStorage.getItem("user"))
  );
  const loginContext = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      {
        withCredentials: true,
      }
    );
    setCurrentUser(res.data);
    return currentUser;
  };
  const logoutContext = async () => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );
    setCurrentUser(null); 
    return currentUser;
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser, loginContext,logoutContext }}>
      {children}
    </AuthContext.Provider>
  );
  
};

