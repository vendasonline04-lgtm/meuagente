import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { UrgencyBar } from '@/components/sales/UrgencyBar'
import { Hero } from '@/components/sales/Hero'
import { Testimonials } from '@/components/sales/Testimonials'
import { ProblemCycle } from '@/components/sales/ProblemCycle'
import { Solution } from '@/components/sales/Solution'
import { FourSteps } from '@/components/sales/FourSteps'
import { Deliverables } from '@/components/sales/Deliverables'
import { ForWho } from '@/components/sales/ForWho'
import { ValueStack } from '@/components/sales/ValueStack'
import { OfferCTA } from '@/components/sales/OfferCTA'
import { Urgency } from '@/components/sales/Urgency'
import { Guarantee } from '@/components/sales/Guarantee'
import { Recap } from '@/components/sales/Recap'
import { FAQ } from '@/components/sales/FAQ'
import { Footer } from '@/components/sales/Footer'

function App() {
  return (
    <main>
      <UrgencyBar />
      <Hero />
      <Testimonials />
      <ProblemCycle />
      <Solution />
      <FourSteps />
      <Deliverables />
      <ForWho />
      <ValueStack />
      <OfferCTA />
      <Urgency />
      <Guarantee />
      <Recap />
      <FAQ />
      <Footer />
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
