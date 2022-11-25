import React from 'react'

function DashBoardSection() {
  return (
    <>

      <div className='ml-[308px] mt-4 font-bold text-gray-400'>
        <h1>overview</h1>
      </div>

      <div className='flex ml-[300px] mt-[10px]'>

        <div className='w-[21%] h-[20vh] bg-gray-50 border-none shadow-2xl rounded-2xl grid gap-x-8 grid-cols-4'>

          <h1 className='pl-8 pt-4 flex'>

            <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>

            </div>

            <div className='pl-4'>
              <h1 className="text-sm pt-[4px]">Users</h1>
            </div>

          </h1>

          <div className='mt-14'>
            <p className="text-sm pl-[4px]">2,100,000</p>
          </div>

          <div className=''>
          <button className='border-none bg-emerald-900 w-[80px] rounded-full text-center p-[3px] text-white text-sm mt-[90px]'>Explore</button>
        </div>

        </div>

        <div className='w-[21%] h-[20vh] bg-gray-50 border-none shadow-2xl rounded-2xl grid gap-x-8 grid-cols-4 ml-[3%]'>
          <h1 className='pl-8 pt-4 flex'>

            <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .215-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>

            <div className='pl-2'>
              <h1 className="text-sm pt-[4px]">Teams</h1>
            </div>

          </h1>

          <div className='mt-14'>
            <p className="text-sm pl-[4px]">2,100,000</p>
          </div>

          <div>
          <button className='border-none bg-emerald-900 w-[80px] rounded-full text-center p-[3px] text-white text-sm mt-[90px]'>Explore</button>
        </div>

        </div>

        <div className='w-[21%] h-[20vh] bg-gray-50 border-none shadow-2xl rounded-2xl grid gap-x-8 grid-cols-4 ml-[3%]'>
          <h1 className='pl-8 pt-4 flex'>

            <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </div>

            <div className='pl-2 flex '>
              <h1 className="text-sm pt-[4px]">Total </h1>
              <h1 className='text-sm pl-[6px] pt-[4px]'>contribution</h1>
            </div>

          </h1>

          <div className='mt-14'>
            <p className="text-sm pl-[4px]">2,100,000</p>
          </div>

          <div>
          <button className='border-none bg-emerald-900 w-[80px] rounded-full text-center p-[3px] text-white text-sm mt-[90px]'>Explore</button>
        </div>

        </div>

        <div className='w-[22%] h-[20vh] bg-gray-50 border-none shadow-2xl rounded-2xl grid gap-x-8 grid-cols-4 ml-[3%]'>
          <h1 className='pl-8 pt-4 flex'>

            <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>

            </div>

            <div className='pl-4 flex'>
              <h1 className="text-sm pt-[4px]">Total</h1>
              <h1 className="text-sm pl-[6px] pt-[4px]">Views</h1>
            </div>

          </h1>

          <div className='mt-14'>
            <p className="text-sm pl-[8px]">2,100,000</p>
          </div>

          <div>
          <button className='border-none bg-emerald-900 w-[80px] rounded-full text-center p-[3px] text-sm text-white mt-[90px]'>Explore</button>
        </div>

        </div>

      </div>
    </>
  )
}

export default DashBoardSection