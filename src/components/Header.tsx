import React from 'react'
import '../index.css';

const Header = () => {
  return (
    <div>
      <div className='Header'>
        <a href="/" className='header-link'><h1>Carbuy.com</h1></a>
        <a href='/post' id='create-btn'>Publish New Car</a>
        <a href='/Cart' id='create-btn'>Shopping Cart</a>

      </div>
    </div>
  )
}

export default Header