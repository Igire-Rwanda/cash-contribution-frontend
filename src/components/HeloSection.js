import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../imgs/pic.png'

function HeloSection() {
    return (
        <>
            <div className=' flex'>
                <div className='pt-[10%] ml-[6%]'>
                    <h1 className='text-2xl  '>Manage Your Finance with <span className='text-emerald-900 text-[15px] text-4xl'> Cash.</span></h1>
                    <p className='leading-6 pt-[40px] text-xl leading-relaxed'>Simple transfers, payment for utilities, functional statement, for which you used to have to go to the office <br /> -- easy now on <span className=''>e-BIKA</span></p>
                </div>

                <div className='ml-[7%] mt-[4%] w-[60%]'>
                    <img className=' h-[80vh] w-[100%]' src={bg} alt='bg' />
                </div>
            </div>
        </>
    )
}

export default HeloSection
