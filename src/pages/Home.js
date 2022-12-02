import React from 'react'
import About from '../components/About'
// import About from '../components/About'
import GetSarted from '../components/GetStarted'
import HeloSection from '../components/HeloSection'
import Nav from '../components/Nav'
import Objectives from '../components/Objectives'


const Home = () => {
  return (
    <>
       <Nav /> 
      <HeloSection />
      <GetSarted />
      <About/>
      <Objectives/>
     
      {/* <About /> */}
    </>
  
       
       
    
  )
}

export default Home