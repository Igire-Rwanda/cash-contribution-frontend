import React from 'react'
import { Link } from 'react-router-dom'
// import bg from '../imgs/four.png'

function HeloSection() {
    return (
        <>
            <div className=''>
                <div className='pt-[8%] text-center'>
                    <h1 className='text-2xl '>Manage Your Finance with <span className='text-emerald-900 text-[15px] text-4xl'> Cash.</span></h1>
                    <p className='leading-6 pt-[40px] text-xl'>Simple transfers, payment for utilities, functional statement, for which you used to have to go to the office <br /> -- easy now on <span className=''>Cash.</span></p>
                </div>

                {/* <div className='ml-[40%] w-[50%]'>
                    <img className=' h-[60vh] w-[90%]' src={bg} alt='bg' />
                </div> */}
            </div>
        </>
    )
}

export default HeloSection
