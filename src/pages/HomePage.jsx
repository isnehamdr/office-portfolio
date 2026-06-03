import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import SelectedProjects from '../components/SelectedProjects'
import ServicesSection from '../components/Servicessection'
import ClientsReviews from '../components/Testimonial'
import Blogs from '../components/Blogs'
import FactsFigures from '../components/Factsfigures'
import Newsletter from '../components/Newsletter'
import FeaturedClients from '../components/Featuredclients'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <>
   
    <Hero/>
    <About/>
    <SelectedProjects/>
    <ServicesSection/>
  <ClientsReviews/>
  <Blogs/>
  <FactsFigures/>
  <Newsletter/>
  <FeaturedClients/>
 

    </>
  )
}

export default HomePage