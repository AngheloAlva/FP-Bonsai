/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaBars, FaXmark, FaAngleDown } from 'react-icons/fa6'
import '../styles/navbar.css'
import StartFreeButon from './StartFreeButon'

const NavBar = () => {
  const [navScroll, setNavScroll] = useState(false)
  const [navMenu, setNavMenu] = useState(false)

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

        <FaBars className='navbar__menu-icon' onClick={() => setNavMenu(true)} />

        <div className={`navbar-menu ${navMenu ? 'navbar-menu-active' : ''}`}>
          <div className='menu-logo'>
            <img src='../public/bonsai-logo.svg' alt='Bonsai Logo' />
            <FaXmark className='navbar__menu-icon' onClick={() => setNavMenu(false)} />
          </div>

          <div className='menu-options'>
            <div>Product <FaAngleDown /></div>
            <div>Templates <FaAngleDown /></div>
            <a href='#'>Pricing</a>
            <a href='#'>Reviews</a>
          </div>

          <div className='menu-btn-container'>
            <button className='btn-login'>LOG IN</button>
            <StartFreeButon />
          </div>
        </div>

        <div className='nav-menu-ul-options'>
          <ul>
            <li><a href='#'>Product <FaAngleDown size={'.8rem'} /></a></li>
            <li><a href='#'>Templates <FaAngleDown size={'.8rem'} /></a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Reviews</a></li>
          </ul>
        </div>

        <div className='nav-menu-ul-btn'>
          <button className='btn-login'>LOG IN</button>
          <StartFreeButon />
        </div>
      </nav>
    </>
  )
}

export default NavBar
