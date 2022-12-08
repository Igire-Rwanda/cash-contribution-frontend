import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
// import About from '../components/About'
import GetSarted from '../components/GetStarted'
import HeloSection from '../components/HeloSection'
import HowItWorks from '../components/HowItWorks'
import Nav from '../components/Nav'
import Objectives from '../components/Objectives'


const Home = () => {
  return (
    <>
       <Nav /> 
      <HeloSection />
      <GetSarted />
      <About/>
      <HowItWorks />
      <Objectives/>
      <Footer/>
      
      {/* <About /> */}
    </>
  
       
       
    
  )
}

export default Home