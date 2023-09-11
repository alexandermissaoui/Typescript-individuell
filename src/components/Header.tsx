import React from 'react'
import '../index.css';

const Header = () => {
  return (
    <div>
      <div className='Header'>
        <a href="/" className='header-link'><h1>Web Shop</h1></a>
        <a href='/post' id='create-btn'>Create New Product</a>
      </div>
    </div>
  )
}

export default Header