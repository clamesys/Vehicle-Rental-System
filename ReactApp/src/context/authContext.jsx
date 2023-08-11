import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const  [currentUser, setCurrentUser] = useState(
        localStorage.getItem("user")===null ? null : JSON.parse(localStorage.getItem("user"))  
    );
    const loginContext = async (inputs) => {
        
        const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
          withCredentials: true,
        });
        setCurrentUser(res.data);
        console.log("result of login post", res);
        return currentUser;
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    return (
        <AuthContext.Provider value={{ currentUser, loginContext }}>
            {children}
        </AuthContext.Provider>
    );
};
