import React, { useEffect, useState } from 'react'
import './Api.css'
function Api() {
  const[categories,setCategories]=useState([]);
  const getcategories=async()=>{
    const response =await fetch('https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10');
    const data=await response.json();
    setCategories(data.categories);
  }

  useEffect(()=>{
   getcategories();

  },[])

  
  return (
    <>
    {categories.map(categorie=>
    <div className='categories' >
  <h2>{categorie.name} </h2>
      <img  className='img' src={categorie.image.secure_url}/>

    </div>
    
      )}
    </>
  )
}

export default Api