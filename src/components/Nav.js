import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/Logo.png'

function Nav() {
  return (
    <>
        <div className='flex py-[10px] mt-[15px]'>
            <div className='pl-[70px] text-emerald-900 '>
              <img src={logo} alt="logo"  className='w-[50px] h-[50px]'/>
            </div>
            <ul className='space-x-12 ml-60 text-sm'>
                <Link to='/' className=''>Home</Link>
                <Link to='/about' className=''>About</Link>
                <Link to='/contact' className=''>Contact</Link>
                <Link to='/signup' className=''><button className='text-sm rounded-full border-solid border-2 border-x-emerald-900 p-2 ml-[350px] w-[120px]'>Sign Up</button></Link>
                <Link to='/signin' className=''><button className='text-sm rounded-full border-solid border-2 border-x-emerald-900 p-2 ml-1 w-[120px]'>Sign in</button></Link>
            </ul>
        </div>
    </>
  )
}

export default Nav
