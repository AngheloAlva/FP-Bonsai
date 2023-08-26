/* eslint-disable no-unused-vars */
import NavBar from '../components/NavBar'
import PlanCard from '../components/PlanCard'
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
    </>
  )
}

export default App
