import React from 'react'
import { Link } from 'react-router-dom'

function GetStarted() {
    return (

        <>
            <div className=''>
                <div className='mt-[5%] ml-[40%] '>
                    <div className='rounded-full border-solid ml-[1px] border-2 border-emerald-900 h-[7.5vh] w-[40%] flex'>
                        <p className='mr-[0%] p-2 text-gray-300 text-sm pl-[40px]'>Enter you email address</p>
                        <Link to='addteam' className=''><button className='rounded-full bg-emerald-900 w-[110px] p-2 h-[7vh] mt-[0px] ml-[30%]'>Get started</button></Link>
                    </div>

                </div>
            </div>
        </>

    )
}

export default GetStarted
