import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='home'>
        <p> Home Page</p>
    <div className='navbar'>
       <ul>
        <li> Home Page</li>
        <li> Categories</li>
        <li>Products</li>
        <li>Cart</li>
       </ul>
       </div>
       <div>
       <p className='auth'>
        <a>Sign in</a>
        <a > Sign up</a>
        </p>
        </div>
   
   
    </div>
  )
}

export default Navbar