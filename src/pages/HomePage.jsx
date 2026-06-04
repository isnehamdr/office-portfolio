import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import SelectedProjects from '../components/SelectedProjects'
import ServicesSection from '../components/Servicessection'
import ClientsReviews from '../components/Testimonial'
import Blogs from '../components/Blogs'
import FactsFigures from '../components/Factsfigures'
import Newsletter from '../components/Newsletter'
import FeaturedClients from '../components/Featuredclients'

const HomePage = () => {
  return (
    <>
   <div className="overflow-x-hidden">
    <Hero/>
    <About/>
    <SelectedProjects/> 
    <ServicesSection/>
  <ClientsReviews/>
  <Blogs/>
  <FactsFigures/>
  <Newsletter/>
  <FeaturedClients/>
 </div>

    </>
  )
}

export default HomePage