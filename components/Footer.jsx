/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/footer.css'
import { FaAngleDown } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer>
      <ul className='footer-list'>
        <li><h3>PRODUCT</h3></li>
        <li><a href='#'>Proposals</a></li>
        <li><a href='#'>Contracts</a></li>
        <li><a href='#'>Invoicing</a></li>
        <li><a href='#'>Client CRM</a></li>
        <li><a href='#'>Time Tracking</a></li>
        <li><a href='#'>Task Tracking</a></li>
        <li><a href='#'>Forms</a></li>
        <li><a href='#'>Accounting</a></li>
        <li><a href='#'>Bonsai Tax</a></li>
        <li><a href='#'>Bonsai Cash</a></li>
        <li className='space-list' />
        <li><a href='#' style={{ color: 'var(--primary-color)' }}>Pricing</a></li>
        <li><a href='#'>Bonsai Reviews</a></li>
      </ul>
      <ul className='footer-list'>
        <li><h3>FREE RESOURCES</h3></li>
        <li><a href='#'>Freelance Resources</a></li>
        <li><a href='#'>How to Write a Contract</a></li>
        <li><a href='#'>Online Signature Maker</a></li>
        <li className='space-list' />
        <li><a href='#'>Self-Employed Taxes Hub</a></li>
        <li><a href='#'>Self-Employed Tax Calculator</a></li>
        <li><a href='#'>Self-Employed Tax Deductions</a></li>
        <li className='space-list' />
        <li><h4>Templates</h4></li>
        <li><a href='#'>Invoice Templates <FaAngleDown style={{ marginTop: '.2rem' }} /></a></li>
        <li><a href='#'>Proposal Templates <FaAngleDown style={{ marginTop: '.2rem' }} /></a></li>
        <li><a href='#'>Contract Templates <FaAngleDown style={{ marginTop: '.2rem' }} /></a></li>
        <li><a href='#'>Agreement Templates <FaAngleDown style={{ marginTop: '.2rem' }} /></a></li>
        <li><a href='#'>Scope of Work Templates <FaAngleDown style={{ marginTop: '.2rem' }} /></a></li>
        <li><a href='#'>Quote Templates <FaAngleDown style={{ marginTop: '.2rem' }} /></a></li>
        <li><a href='#'>Credit Note Templates</a></li>
        <li><a href='#'>Estimate Templates</a></li>
        <li><a href='#'>Form Templates</a></li>
      </ul>
      <ul className='footer-list'>
        <li><h3>BONSAI</h3></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Careers</a></li>
        <li><a href='#'>Support</a></li>
        <li><a href='#'>LinkedIn</a></li>
        <li><a href='#'>Twitter</a></li>
        <li><a href='#'>Provacy policy</a></li>
        <li><a href='#'>Legal</a></li>
        <li className='space-list' />
        <li><a href='#'>Affiliates</a></li>
        <li><a href='#'>Write for Us</a></li>
        <li className='space-list' />
        <li><a href='#'>Comparisons <FaAngleDown style={{ marginTop: '.2rem' }} /></a></li>

      </ul>
    </footer>
  )
}

export default Footer
