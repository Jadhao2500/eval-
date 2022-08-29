import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";
const Products = () => {
  // const [products,setProducts] =useState([]);
  const [products,setProducts] =useState([]);

  useEffect(() => {
      const fetchProducts = async () =>{
          let r =await fetch("http://localhost:8080/products");
          let d= await r.json();
          setProducts(d);
      };
      fetchProducts();
  },[]);
  // console.log(products)

  return <div>
  {
    products.map((ele)=>{
      return<Product data={ele} />
    })
  }
  </div>;
};

export default Products;
