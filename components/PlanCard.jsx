/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/price-card.css'
import { FaCheck } from 'react-icons/fa6'
import StartFreeButon from './StartFreeButon'

const PlanCard = ({ planTitle = '', planDesc = '', planPrice = [], planAdvantages = [], planType, popularPlan = false }) => {
  return (
    <div className='plan-card-container'>
      {
        popularPlan
          ? <p className='text-popular-plan'>MOST POPULAR</p>
          : <></>
      }
      <h3 className='plan-card-title'>{planTitle}</h3>
      <p>{planDesc}</p>
      <div className='price-container'>
        <p className='price-symbol'>$</p>
        <p className='price-amount'>
          {
            planType === 'monthly'
              ? planPrice[0]
              : planPrice[1]
          }
        </p>
        <p className='price-plan'>/MONTH</p>
      </div>
      {
        planType === 'yearly'
          ? <p className='text-yearly-selected'>Billed yearly</p>
          : <></>
      }
      <hr />
      <ul className='advantages-container'>
        {
          planAdvantages.map((advantage, index) => (
          <li key={index}>
            <FaCheck color='var(--primary-color)' />
            <p>{advantage}</p>
          </li>
          ))
        }
      </ul>
      <StartFreeButon padding={'1.375rem'} fontWeight={'700'} letterSpacing={'.044rem'} />
    </div>
  )
}

export default PlanCard
