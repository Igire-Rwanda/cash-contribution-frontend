import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
        <div className='flex py-[10px] mt-[15px]'>
            <div className='text-2xl pl-[70px] text-emerald-900 '>Cash.</div>
            <ul className='space-x-12 ml-60'>
                <Link to='/' className=''>Home</Link>
                <Link to='/about' className=''>About</Link>
                <Link to='/viewteams' className=''>View Teams</Link>
                <Link to='/contact' className=''>Contact</Link>
                <Link to='/' className=''><button className='rounded-full border-solid border-2 border-x-emerald-900 p-2 ml-[200px] w-[120px]'>Sign Up</button></Link>
                <Link to='/' className=''><button className='rounded-full border-solid border-2 border-x-emerald-900 p-2 ml-1 w-[120px]'>Sign in</button></Link>
            </ul>
        </div>
    </>
  )
}

export default Nav
