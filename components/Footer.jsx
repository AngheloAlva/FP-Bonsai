/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/footer.css'
import FooterDropdown from './FooterDropdown'

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
        <FooterDropdown textLink={'Invoice Templates'} dropdownLinks={['Invoice Generator', 'Blank Invoice Template', 'Consultant Invoice Template', 'Editable Invoice Template', 'Graphic Design Invoice', 'Web Desing Invoice', 'Contractor Invoice Template', 'Photography Invoice Template', 'Self Employed Invoice Template']} />
        <FooterDropdown textLink={'Proporsal Templates'} dropdownLinks={['Website Proposal Template', 'Digital Marketing Proposal Template', 'Social Media Marketing Proposal', 'Graphic Design Proposal', 'Freelance Proposal Template', 'SEO Proposal Template']} />
        <FooterDropdown textLink={'Contract Templates'} dropdownLinks={['Online Contract', 'Graphic Design Contract', 'Freelance Contract Template', 'Social Media Marketing Contract', 'Web Design Contract', 'Video Production Contract', 'Public Relations Contract', 'Translation Contract']} />
        <FooterDropdown textLink={'Agreement Templates'} dropdownLinks={['Retainer Agreement Template', 'Influencer Agreement Template', 'Collaboration Agreement Template', 'Software Development Agreement', 'Marketing Agreement Template']} />
        <FooterDropdown textLink={'Scope of Work Templates'} dropdownLinks={['Website Development Scope of Work', 'Digital Marketing Scope of Work', 'Consultant Statement of Work Template', 'Software Development Scope of Work']} />
        <FooterDropdown textLink={'Quote Templates'} dropdownLinks={['Freelance Quotation Template', 'Web Design Quotation Template', 'Graphic Design Quotation Template', 'Graphic Design Quotation Template', 'Interior Design Quotation Template', 'Video Production Quotation Template', 'Social Media Marketing Quotation']} />
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
        <FooterDropdown textLink={'Comparisons'} dropdownLinks={['Freshbooks Alternatives', 'Quickbooks Alternatives', 'Wave vs Quickbooks', 'Xero vs Quickbooks', 'Freshbooks vs Quickbooks']} />

      </ul>
    </footer>
  )
}

export default Footer
