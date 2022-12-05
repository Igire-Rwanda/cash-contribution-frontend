import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/logo1.jpg'
import { useEffect, useState } from "react";

function Nav() {
  

 return (
    <>
        <div className='shadow-md flex   bg-white p-2 mt-0 fixed top-0 z-50 w-full z-10 top-0'>
            <div className='pl-[70px] text-emerald-900 '>
              <img src={logo} alt="logo"  className='w-[45px] h-[35px]'/>
            </div>
            <ul className='space-x-12 ml-60 text-sm '>
                <Link to='/' className=''>Home</Link>
                <Link to='/about' className=''>About</Link>
                <Link to='/about' className=''>How it works</Link>
                <Link to='/about' className=''>Objectives</Link>
                <Link to='/contact' className=''>Contact</Link>
                <Link to='/signup' className=''><button className='text-sm rounded-full border-solid border-2 border-x-emerald-900 p-2 ml-[160px] w-[120px]'>Sign Up</button></Link>
                <Link to='/signin' className=''><button className='text-sm rounded-full border-solid border-2 border-x-emerald-900 p-2 ml-1 w-[120px]'>Sign in</button></Link>
            </ul>
        </div>
    </>
  )
}

export default Nav
