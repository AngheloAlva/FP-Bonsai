/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const Faq = ({ question, answer }) => {
  const [answerVisibility, setAnswerVisibility] = useState(false)

  return (
    <div className='faq-container'>
      <div className='faq-title' onClick={() => setAnswerVisibility(!answerVisibility)}>
        <h3>{question}</h3>
        <FaAngleDown color='#cccccc' size={'1.563rem'} />
      </div>
      <p style={{ display: answerVisibility ? 'flex' : 'none' }}>{answer}</p>
    </div>
  )
}

export default Faq
