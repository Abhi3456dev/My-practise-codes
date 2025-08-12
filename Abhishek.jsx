import axios from "axios";
import React, { useState } from "react";
const Abhishek = () => {
    const[data,setData]=useState([])
    const showProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setData(response.data)
  };
 return (
    <div className="p-10">
      <h1>Abhishek's Component</h1>
      <button onClick={showProducts}>Show the products</button>
    <div>
        {data.map(function(elem,idx){ 
            return <div key={idx}>
               <img className="h-80" src={elem.image} alt="" />
               {/* <h1>{elem.title}</h1> */}
            </div>
        })}
    </div>
    </div>
  );
};
export default Abhishek;
