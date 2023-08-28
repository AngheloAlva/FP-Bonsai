/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import '../styles/navbar.css'

const NavBar = () => {
  const [navScroll, setNavScroll] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setNavScroll(true)
    } else {
      setNavScroll(false)
    }
  })

  return (
    <>
      <div className={navScroll ? 'nav-scroll-active' : ''} />
      <nav>
        <a href='#'>
          <img src='../public/bonsai-logo.svg' alt='Bonsai Logo' />
        </a>

        <FaBars className='navbar__menu-icon' />
        {/* <ul>
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
        </ul> */}
      </nav>
    </>
  )
}

export default NavBar
