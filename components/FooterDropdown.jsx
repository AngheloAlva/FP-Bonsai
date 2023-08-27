/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
// import { useSpring, animated } from '@react-spring/web'

const FooterDropdown = ({ textLink, dropdownLinks = [] }) => {
  const [dropdownActive, setDropdownActive] = useState(false)

  return (
    <li className='footer-dropdown-container'>
      <div>
        <a href='#'>{textLink}</a>
        <FaAngleDown style={{ marginTop: '.15rem' }} onClick={() => setDropdownActive(!dropdownActive)} />
      </div>
      {
        <ul className={`footer-dropdown ${dropdownActive ? 'footer-dropdown-active' : ''}`} >
          {
            dropdownLinks.map((link, index) => (
              <li key={index}>
                <a href='#'>{link}</a>
              </li>
            ))
          }
        </ul>
      }
    </li>
  )
}

export default FooterDropdown
