import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  // const login= useContext(AuthContext)
  // console.log(login)
  // const handleLogin = () => {
  //   const payload = { email, password };
  //   fetch(`https://reqres.in/api/login`, {
  //     method: "POST",
  //     body: JSON.stringify(payload),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.token) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <div>
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit"><Link to="/">Login</Link></button>
    </div>
  );
};

export default Login;
