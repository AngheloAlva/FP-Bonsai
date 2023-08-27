/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const FooterDropdown = ({ textLink, dropdownLinks = [] }) => {
  const [dropdownActive, setDropdownActive] = useState(false)

  return (
    <li>
      <div>
        <a href='#'>{textLink}</a>
        <FaAngleDown style={{ marginTop: '.2rem' }} onClick={() => setDropdownActive(!dropdownActive)} />
      </div>
      {
        dropdownActive && (
          <ul className='footer-dropdown'>
            {
              dropdownLinks.map((link, index) => (
                <li key={index}>
                  <a href='#'>{link}</a>
                </li>
              ))
            }
          </ul>
        )
      }
    </li>
  )
}

export default FooterDropdown
