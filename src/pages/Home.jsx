// src/pages/Home.jsx
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import DecalogoCarousel from '../components/DecalogoCarousel'
import ProposalsTeaser from '../components/ProposalsTeaser'
import ContactCTA from '../components/ContactCTA'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero />
        <About/>
        <DecalogoCarousel/>
        <ProposalsTeaser/>  
        <ContactCTA/>
      </main>
      <Footer/>
    </>
  )
}