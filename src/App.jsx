/* eslint-disable no-unused-vars */
import { useState } from 'react'
import AddOnBox from '../components/AddOnBox'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import PlanCard from '../components/PlanCard'
import StartFreeButon from '../components/StartFreeButon'
import './App.css'

function App () {
  const [planSelected, setPlanSelected] = useState(false)

  return (
    <>
      <NavBar />

      <section className='plans-container'>
        <div className='plans-container-title'>
          <div className='plan-title'>
            <h2>Plans & Pricing</h2>
            <div className='plan-months-free'>
              <img src='../public/5e9d7255d3886a6103fb12a9_FREE-text.svg' alt='2 months free' />
              <div className='plan-selected-container'>
                <p style={{ color: planSelected ? '#c1c3c6' : '' }}>MONTHLY</p>
                <div className='plan-selected-switch' onClick={() => setPlanSelected(!planSelected)}>
                  <div className={`plan-selected-switch-circle ${planSelected ? 'plan-selected-switch-circle-active' : ''}` }/>
                </div>
                <p style={{ color: planSelected ? '' : '#c1c3c6' }}>YEARLY</p>
              </div>
            </div>
          </div>
        </div>
        <PlanCard
          planTitle='Starter'
          planDesc='Ideal for freelancers and contractors just starting out.'
          planPrice={[24, 17]}
          planType={planSelected ? 'yearly' : 'monthly'}
          planAdvantages={[
            'All Templates',
            'Unlimited Clients & Projects',
            'Invoice & Payments',
            'Proposals & Contracts',
            'Tasks & Time Tracking',
            'Client CRM',
            'Expense Tracking',
            'Up to 5 Project Collaborators'
          ]}
        />
        <PlanCard
          planTitle='Professional'
          planDesc='Everything a growing independent business needs to thrive.'
          planPrice={[39, 32]}
          planType={planSelected ? 'yearly' : 'monthly'}
          popularPlan
          planAdvantages={[
            'Everything in Starter plus...',
            'Custom Branding',
            'Forms & Questionnaires',
            'Workflow Automations',
            'Client Portal',
            'QuickBooks Integration',
            'Zapier Integration',
            'Up to 15 Project Collaborators'
          ]}
        />
        <PlanCard
          planTitle='Business'
          planDesc='The perfect package for small businesses and agencies.'
          planPrice={[79, 52]}
          planType={planSelected ? 'yearly' : 'monthly'}
          planAdvantages={[
            'Everything in Starter and Professional plus...',
            'Subcontractor Management',
            'Hiring Agreement Templates (1099 contracts)',
            'Subcontractor Onboarding',
            'Talent Pool',
            '3 Team Seats (additional seats $9/month)',
            'Accountant Access',
            'Connect Multiple Bank Accounts',
            'Unlimited Subcontractors',
            'Unlimited Project Collaborators'
          ]}
        />
      </section>

      <section className='add-ons-section'>
        <h2 className='add-ons-title'>Super charge your work with add-ons</h2>
        <div className='add-ons-container' style={{ flexDirection: planSelected ? 'column-reverse' : 'column' }}>
          <AddOnBox
            addonAmount={['Free', 'Free']}
            addonTitle={'Collaborators'}
            addonDesc={'Invite other users to specific projects for limited access and funtionality.'}
          />
          <AddOnBox
            addonAmount={['$9', '$90']}
            AmountText
            addonTitle={'Partners'}
            addonDesc={'Invite other users for full account access and company management.'}
            planType={planSelected ? 'yearly' : 'monthly'}
          />
          <AddOnBox
            addonAmount={['$10', '$100']}
            AmountText
            addonTitle={planSelected ? 'Accounting & Tax Assistant' : 'Bonsai Tax'}
            addonDesc={planSelected ? 'Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.' : 'Track expenses, identify write-offs, and estimate quarterly taxes easily.'}
            LearnMore
            planType={planSelected ? 'yearly' : 'monthly'}
          />
        </div>
      </section>

      <div className='card-container'>
        <div><p>It's <p style={{ color: 'var(--primary-color)' }}>your</p> business. We're here to help it grow.</p></div>
        <StartFreeButon padding={'.938rem 1.563rem'} fontWeight={'400'} letterSpacing={'0'} minWidth={'8.563rem'} fontSize={'.875rem'} />
      </div>

      <section className='faq-container'>
        <h2 className='faq-container-title'>Frequently Asked Questions</h2>
        <Faq question={'How does the free trial work?'} answer={'When you start your trial with Bonsai you\'ll receive full, unlimited access to all of Bonsai\'s Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don\'t worry - we won\'t charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.'} />
        <Faq question={'Can I change plans anytime'} answer={'Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".'} />
        <Faq question={'How do I pause my Bonsai subscription'} answer={'We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you\'ll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.'} />
        <Faq question={'What is your refund policy'} answer={'If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.'} />
      </section>

      <Footer />
    </>
  )
}

export default App
