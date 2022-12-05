import React from 'react'
import img from '../imgs/wmn.png'
function About() {
  return (
    <>

      <div className=' text-black mt-[4%] mx-[6%] h-[50vh]  '>
        <h1 className=' text-center text-3xl font-thin p-2 pt-[10%]'>MISSION & VISION</h1>
        <p className='text-center mx-[20%] p-4 leading-loose'>
          Who we are and what drives us—it’s at the root of all we do.
        </p>
      </div>

      <div className=' flex'>

        <div className=''>
          <div className=' text-black text-centermx-[6%] h-[50vh]  '>
            <h1 className='text-center  text-3xl font-thin p-2 pt-8'>OUR MISSION</h1>
            <p className='text-center mx-[20%] p-4 leading-loose'>
             Provide financial solutions for people in our Community while delivering a Family experience
            </p>
          </div>

          <div className=' text-black mx-[6%] h-[50vh] ml-12 '>
            <h1 className='text-center  text-3xl font-thin p-2 pt-[2px]'>OUR VISION</h1>
            <p className='text-center mx-[20%] p-4 leading-loose'>
             Make DREAMS a reality within our Communities
            </p>
          </div>
        </div>

        <div className=''>
          <img src={img} alt="img" />
        </div>
      </div>
    </>
  )
}

export default About
