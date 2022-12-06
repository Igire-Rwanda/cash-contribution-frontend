import React, { useRef, useState,useEffect } from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'
import user from "../imgs/profile.jpg";

function Dashb() {
  const [open, setOpen] = useState(false);
  const Menus = ['profile', 'settings', 'Logout'];

  //solution
  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener('click', (e)=>{
    if(e.target !== menuRef.current && e.target !== imgRef.current){
      setOpen(false);
    }
  });

  const [isLoggedIn,setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
  useEffect(()=>{
      const token = localStorage.getItem("token");
      if(token){
        setIsLoggedIn(true);
      }else{
        navigate("/signin")
      }
  },[]);
  return (
    <>

      <div className='flex flex-col'>

        <div className="fixed flex flex-col top-0 left-0 w-14 hover:w-64 md:w-64 bg-emerald-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
          <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Team Dashboard</div>
                </div>
              </li>

              <li>
                <Link to='/dashboard' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-emerald-900 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate"> Dashboard </span>
                </Link>
              </li>

              <li>
                <Link to='/dashboard/team' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-emerald-900 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate"> Teams </span>
                  <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-emerald-900 bg-indigo-50 rounded-full">New</span>
                </Link>
              </li>

              <li>
                <Link to='/dashboard/transactions' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-emerald-900 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                  </span>
                  <span className='ml-2 text-sm tracking-wide truncate'>Transactions</span>
                </Link>
              </li>

              <li>
                <Link to='/dashboard/teammembers' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-emerald-900 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Members</span>
                </Link>
              </li>

              <li>
                <Link to='/dashboard/settings' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-white dark:hover:bg-gray-600 text-white-600 hover:text-emerald-900 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='float-left w-screen  '>

          <div className='border-solid border-2 border-b-gray-100  '>
          <div className='pl-[1300px] pt-[20px]'>
            <div className='relative mb-[10px]'>
              <img 
              className='h-[20px] w-[20px] object-cover border-2 border-emerald-900 rounded-full cursor-pointer' 
              src={user} alt="user"
              onClick={()=>setOpen(!open)}
              ref={imgRef}
              />
              {
                open &&(
                <div
                ref={menuRef} 
                className='bg-white shadow-lg p-4 w-40 absolute -left-14 top-24'
                >
                  <ul>
                    {
                      Menus.map((menu) => (
                        <li 
                          className='p-2 text-sm cursor-pointer rounded hover:bg-blue-100'
                          key={menu}
                          onClick={() => setOpen(false)}
                          >
                            {menu}
                          </li>
                      ))
                    }
                  </ul>
                </div>
              )}

            </div>
          </div>
          </div>

          <div className='ml-[50px]'>
          <Outlet />
          </div>
        </div>

      </div>

    </>
  )
}

export default Dashb
