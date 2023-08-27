/* eslint-disable no-unused-vars */
import AddOnBox from '../components/AddOnBox'
import NavBar from '../components/NavBar'
import PlanCard from '../components/PlanCard'
import StartFreeButon from '../components/StartFreeButon'
import './App.css'

function App () {
  return (
    <>
    <NavBar />
    <section className='plans-container'>
      <PlanCard
        planTitle='Starter'
        planDesc='Ideal for freelancers and contractors just starting out.'
        planPrice={24}
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
        planPrice={39}
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
        planPrice={79}
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
    <section className='add-ons-container'>
      <h2 className='add-ons-title'>Super charge your work with add-ons</h2>
      <AddOnBox addonAmount={'Free'} addonTitle={'Collaborators'} addonDesc={'Invite other users to specific projects for limited access and funtionality.'} />
      <AddOnBox addonAmount={'$9'} AmountText addonTitle={'Partners'} addonDesc={'Invite other users for full account access and company management.'} />
      <AddOnBox addonAmount={'$10'} AmountText addonTitle={'Bonsai Tax'} addonDesc={'Track expenses, identify write-offs, and estimate quarterly taxes easily.'} LearnMore />
    </section>
    <div className='card-container'>
      <div><p>It's <p style={{ color: 'var(--primary-color)' }}>your</p> business. We're here to help it grow.</p></div>
      <StartFreeButon padding={'.938rem 1.563rem'} fontWeight={'400'} letterSpacing={'0'} minWidth={'8.563rem'} fontSize={'.875rem'} />
    </div>
    </>
  )
}

export default App
