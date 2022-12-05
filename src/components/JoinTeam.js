import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { RWebShare } from "react-web-share";

function JoinTeam() {

  const [teamId, setTeamId] = useState("");

  const params = useParams();
  useEffect(() => {


    setTeamId(localStorage.getItem("team"));
  }, [])

  console.log(params)

  return (
    <>

      <div className=' ml-[500px] mt-[30px]'>

        <div className='w-[60%] h-[40vh] bg-gray-50 border-none shadow-2xl rounded-2xl '>

          <h1 className='pl-[25%] pt-4 flex'>

            <div className='mt-8'>
              <h1>are you sure you want to join Team ?</h1>
              <span className='text-gray-200'>{params.id} </span> 
            </div>

          </h1>

          <div className='mt-8 pl-[45%]'>
              <svg className='animate-bounce w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>

            </div>

          <div className='flex mt-8 ml-[170px] w-40 grid gap-[20px] grid-cols-2'>
            <button className='p-2 text-emerald-900 border-solid border-2 border-emerald-900  rounded-md '>Yes</button>
            <button className='p-2 text-emerald-900 border-solid border-2 border-emerald-900  rounded-md '>No</button>
          </div>

        </div>

      </div>


    </>
  )
}

export default JoinTeam
