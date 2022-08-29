import React, { useEffect, useState } from "react";

const Product = ({data}) => {
  // Note: this id should come from api
  const [carts,setCarts] =useState([]);
  const [count,setCount]=useState(0);

 
  useEffect(() => {
    const fetchProducts = async () =>{
        let r =await fetch("http://localhost:8080/cartItems");
        let d= await r.json();
        setCarts(d);
    };
    fetchProducts();
},[]);

console.log(count)
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {/* {
            carts.map((ele)=>{
              if (ele.id==data.id)
                {
                    setCount(ele.count)
                }
            })
          } 
           {count} */}
          {/* {data.count}  */}
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Delete</button>
      </div>
    </div>
  );
};

export default Product;
