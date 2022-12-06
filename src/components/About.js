import React from 'react'
import img from '../imgs/wmn.png'
function About() {
  return (
    <>

      <div id="about" className=' text-black mt-[4%] mx-[6%] h-[50vh]  '>
        <h1 className=' text-center text-3xl font-thin p-2 pt-[10%]'>MISSION & VISION</h1>
        <p className='text-center mx-[20%] p-4 leading-loose'>
          Who we are and what drives us—it’s at the root of all we do.
        </p>
      </div>

      <div className=' flex'>

          <div className=' text-black text-center mx-[6%] h-[50vh]  '>
            <h1 className='text-center  text-3xl font-thin p-2 pt-4'>OUR MISSION</h1>
            <p className='text-center mx-[10%] p-4 leading-loose'>
             Provide financial solutions for people in our Community while delivering a Family experience
            </p>
          </div>

          <div className=' text-black h-[50vh] text-center'>
            <h1 className='text-center  text-3xl font-thin p-2 pt-4'>OUR VISION</h1>
            <p className='text-center p-4 leading-loose'>
             Make DREAMS a reality within our Communities
            </p>
          </div>
  
      </div>
    </>
  )
}

export default About
