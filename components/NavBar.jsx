/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/navbar.css'

const NavBar = () => {
  return (
    <nav>
      <img src='../public/bonsai-logo.svg' alt='Bonsai Logo' />

      <ul>
        <div>
          <li><a href='#'>Product</a></li>
          <li><a href='#'>Templates</a></li>
          <li><a href='#'>Pricing</a></li>
          <li><a href='#'>Reviews</a></li>
        </div>
        <div>
          <li><button>LOG IN</button></li>
          <li><button>START FREE</button></li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar
