import React, { useEffect, useState } from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";

// use react-router Link or NavLink

const Navbar = () => {

  const [carts,setCarts] =useState(0);

  useEffect(() => {
      const fetchProducts = async () =>{
          let r =await fetch("http://localhost:8080/cartItems");
          let d= await r.json();
          setCarts(d);
      };
      fetchProducts();
  },[]);

  

  return (
    <div  data-cy="navbar">
      <Link style={{margin:"10px"}} to="/" data-cy="navbar-home-link">Home</Link>
      <span style={{margin:"10px"}} data-cy="navbar-cart-items-count">Count: {carts.length}</span>
      <button style={{margin:"10px"}}  data-cy="navbar-login-logout-button"><Link to="/login">Login</Link></button>
    </div>
  );
};

export default Navbar;
