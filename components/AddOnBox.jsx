/* eslint-disable no-unused-vars */
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import '../styles/add-on-box.css'

const AddOnBox = ({ addonAmount = [], AmountText = false, addonTitle, addonDesc, LearnMore = false, planType }) => {
  return (
    <div className='add-on-box-container'>
      <div className='amount-container'>
        <p className={AmountText ? 'amount-number' : ''}>
          {
            planType === 'yearly'
              ? addonAmount[1]
              : addonAmount[0]
          }
        </p>
        {
          AmountText &&
          <p className={AmountText ? 'amount-text' : ''}>
            {
              planType === 'yearly'
                ? '/YEAR'
                : '/MONTH'
            }
          </p>
        }
      </div>
      <div>
        <h5>{addonTitle}</h5>
        <p>{addonDesc}</p>

      {
        LearnMore &&
        <a className='learn-more-btn'>
          LEARN MORE <FaAngleRight size={'.875rem'} style={{ marginTop: '-.04rem' }} />
        </a>
      }
      </div>
    </div>
  )
}

export default AddOnBox
