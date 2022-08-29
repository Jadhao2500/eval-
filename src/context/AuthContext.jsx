import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login,setLogin]= useState(false);

  const handleLogin=()=>{
      setLogin(login ? false:true)
  }
  return <AuthContext.Provider value={{login,handleLogin}}>{children}</AuthContext.Provider>;
};
