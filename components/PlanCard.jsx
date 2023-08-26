/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/price-card.css'
import { FaCheck } from 'react-icons/fa6'

// TODO: Add state for monthly/annual price
// TODO: Add property for MOST POPULAR plan
const PlanCard = ({ planTitle = '', planDesc = '', planPrice = 0, planAdvantages = [] }) => {
  return (
    <div className='plan-card-container'>
      <h3 className='plan-card-title'>{planTitle}</h3>
      <p>{planDesc}</p>
      <div className='price-container'>
        <p className='price-symbol'>$</p>
        <p className='price-amount'>{planPrice}</p>
        <p className='price-plan'>/MONTH</p>
      </div>
      <hr />
      <ul className='advantages-container'>
        {planAdvantages.map((advantage, index) => (
          <li key={index}>
            <FaCheck color='var(--primary-color)' />
            <p>{advantage}</p>
          </li>
        ))}
      </ul>
      <button className='plan-card-btn'>START FREE</button>
    </div>
  )
}

export default PlanCard
