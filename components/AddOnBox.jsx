/* eslint-disable no-unused-vars */
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import '../styles/add-on-box.css'

const AddOnBox = ({ addonAmount, AmountText = false, addonTitle, addonDesc, LearnMore = false }) => {
  return (
    <div className='add-on-box-container'>
      <div className='amount-container'>
        <p className={AmountText ? 'amount-number' : ''}>{addonAmount}</p>
        {
          AmountText &&
          <p className={AmountText ? 'amount-text' : ''}>/MONTH</p>
        }
      </div>
      <h5>{addonTitle}</h5>
      <p>{addonDesc}</p>
      {
        LearnMore &&
        <a className='learn-more-btn'>
          LEARN MORE <FaAngleRight size={'.875rem'} style={{ marginTop: '-.04rem' }} />
        </a>
      }
    </div>
  )
}

export default AddOnBox
