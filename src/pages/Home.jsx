// src/pages/Home.jsx
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import DecalogoCarousel from '../components/DecalogoCarousel'
import ContactCTA from '../components/ContactCTA'
import FacultyPortal from '../components/FacultyPortal'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero />
        <About/>
        <DecalogoCarousel/>
        <FacultyPortal />
        <ContactCTA/>
      </main>
      <Footer/>
    </>
  )
}